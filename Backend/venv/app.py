from flask import Flask, request, jsonify  # Asegúrate de importar request desde flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from api import mysql, store_matches  # Importa las funciones de api.py

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos MySQL
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "prueba"
mysql.init_app(app)

# Ruta para almacenar datos desde la API en MySQL
@app.route('/api/get_matches', methods=['GET'])
def get_matches():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM matches")
        matches = cur.fetchall()
        # print(matches)
        cur.close()
        return jsonify(matches)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Ruta para almacenar datos desde la API en MySQL
@app.route('/api/get_groups', methods=['GET'])
def get_groups():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM equipos")
        groups = cur.fetchall()
        # print(matches)
        cur.close()
        return jsonify(groups)
    except Exception as e:
        return jsonify({'error': str(e)})

# Ruta para almacenar datos desde la API en MySQL
@app.route('/api/store_matches', methods=['POST'])
def store_matches_route():
    return store_matches()

# Ruta para login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json  # Asegúrate de usar request aquí
    username = data.get('username')
    password = data.get('password')

    # Verificar en la base de datos si el usuario y contraseña son válidos
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cur.fetchone()
    cur.close()

    if user:
        return jsonify({"message": "Inicio de sesión exitoso"})
    else:
        return jsonify({"message": "Credenciales inválidas"}), 401

if __name__ == '__main__':
    app.run(debug=True)
