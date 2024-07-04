from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos MySQL
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "prueba"
mysql = MySQL(app)

# Ruta de ejemplo para probar la conexión
@app.route('/api/', methods=['POST'])
def home():
    message_out = {"message": "Inicio"}
    return jsonify(message_out)

# Ruta para obtener datos desde MySQL
@app.route('/api/data', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT name FROM item")
    items = cur.fetchall()
    cur.close()
    return jsonify([item['name'] for item in items])

# Ruta para agregar un item a MySQL
@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    name = data.get('name')
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO item (name) VALUES (%s)", (name,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Item added!"})

# Ruta de ejemplo para enviar mensajes
@app.route('/api/message', methods=['POST'])
def message():
    message_out = {"message": "Hola"}
    return jsonify(message_out)

# Ruta para login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
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

