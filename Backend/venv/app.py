from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL
from flask_cors import CORS
import MySQLdb.cursors
from api import mysql, store_matches

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Configuración de CORS
CORS(app, supports_credentials=True)

# Configuración de la base de datos MySQL
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "prueba"
mysql.init_app(app)


# Ruta para traer datos de base de datos de los partidos jugados
@app.route("/api/get_matches", methods=["GET"])
def get_matches():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM matches")
        matches = cur.fetchall()
        cur.close()
        return jsonify(matches)
    except Exception as e:
        return jsonify({"error": str(e)})


# Ruta para traer datos de grupos de los equipos del torneo
@app.route("/api/get_groups", methods=["GET"])
def get_groups():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM equipos")
        groups = cur.fetchall()
        cur.close()
        return jsonify(groups)
    except Exception as e:
        return jsonify({"error": str(e)})


# Ruta para traer datos desde base de datos para información de pollas registradas
@app.route("/api/get_pollas", methods=["GET"])
def get_pollas():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM pollas_grupos")
        matches = cur.fetchall()
        cur.close()
        return jsonify(matches)
    except Exception as e:
        return jsonify({"error": str(e)})


# Ruta para actualizar información de pollas
def update_pollas():
    try:
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)  # Usar DictCursor

        # Reiniciar los puntos de todos los perfiles a 0
        reset_query = "UPDATE pollas_grupos SET puntos = 0"
        cur.execute(reset_query)
        mysql.connection.commit()

        # Consulta para obtener equipos ordenados por puntos para cada grupo
        groups = ["A", "B", "C", "D"]
        pollas_data = []

        # Obtener todos los perfiles y sus predicciones
        query_perfiles = "SELECT * FROM pollas_grupos"
        cur.execute(query_perfiles)
        perfiles_results = cur.fetchall()

        for perfil in perfiles_results:
            perfil_nombre = perfil["perfil"]
            grupo = perfil["grupo"]
            primero = perfil["primero"]
            segundo = perfil["segundo"]

            # Consulta para obtener equipos ordenados por puntos
            query_equipos = f"SELECT * FROM equipos WHERE group_name = '{grupo}' ORDER BY points DESC"
            cur.execute(query_equipos)
            equipos_results = cur.fetchall()
            print(
                f"Equipos del grupo {grupo} para el perfil {perfil_nombre}: {equipos_results}"
            )

            # Comparar y mostrar en consola
            if equipos_results:
                coincidencias = []
                puntos_a_sumar = 0

                if primero and equipos_results[0]["name"] == primero:
                    coincidencias.append("primer lugar")
                    puntos_a_sumar += 1

                if segundo and equipos_results[1]["name"] == segundo:
                    coincidencias.append("segundo lugar")
                    puntos_a_sumar += 1

                if coincidencias:
                    print(
                        f"Perfil {perfil_nombre}, Grupo {grupo}: Coincide en {', '.join(coincidencias)}."
                    )

                    # Actualizar los puntos en la base de datos
                    update_query = "UPDATE pollas_grupos SET puntos = puntos + %s WHERE perfil = %s AND grupo = %s"
                    cur.execute(update_query, (puntos_a_sumar, perfil_nombre, grupo))
                    mysql.connection.commit()

            # Guardar los datos relevantes en pollas_data
            pollas_data.append(
                {
                    "perfil": perfil_nombre,
                    "grupo": grupo,
                    "equipos": equipos_results,
                    "primer_lugar": primero,
                    "segundo_lugar": segundo,
                }
            )
            print(pollas_data)
        cur.close()
        return jsonify(pollas_data)

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

# Ruta para almacenar datos desde la API en base de datos de partidos
@app.route("/api/store_matches", methods=["POST"])
def store_matches_route():
    return store_matches()


@app.route("/api/get_user", methods=["GET"])
def get_user():
    if "user_id" not in session:
        return jsonify({"error": "Not logged in"}), 401

    user_id = session["user_id"]
    print(user_id)
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    user = cur.fetchone()
    cur.close()

    if user is None:
        return jsonify({"error": "User not found"}), 404

    return jsonify(user)


@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cur.execute(
        "SELECT * FROM users WHERE username = %s AND password = %s",
        (username, password),
    )
    user = cur.fetchone()
    cur.close()

    if user:
        session["user_id"] = user["id"]
        return jsonify({"message": "Inicio de sesión exitoso"})
    else:
        return jsonify({"message": "Credenciales inválidas"}), 401


if __name__ == "__main__":
    app.run(debug=True)
