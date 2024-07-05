from flask import request, jsonify
from flask_mysqldb import MySQL
import requests

mysql = MySQL()

# Ruta para almacenar datos desde la API en MySQL
def store_matches():
    try:
        # Truncar (eliminar todos los registros) la tabla matches
        cur = mysql.connection.cursor()
        cur.execute("TRUNCATE TABLE matches")
        mysql.connection.commit()
        cur.close()

        # Obtener nuevos datos de la API
        response = requests.get('https://v3.football.api-sports.io/fixtures', params={'league': '9', 'season': '2024'},
                                headers={'x-rapidapi-host': 'v3.football.api-sports.io',
                                         'x-rapidapi-key': 'b0398b5fe322287ab72156211fa117fb'})
        data = response.json().get('response', [])

        print("Datos recibidos de la API:", data)  # Debugging

        # Insertar nuevos datos en la tabla matches
        cur = mysql.connection.cursor()
        for match in data:
            home_team = match['teams']['home']['name']
            home_team_logo = match['teams']['home']['logo']
            away_team = match['teams']['away']['name']
            away_team_logo = match['teams']['away']['logo']
            home_score = match['score']['fulltime']['home']
            away_score = match['score']['fulltime']['away']
            date = match['fixture']['date']
            round = match['league']['round']
            cur.execute("INSERT INTO matches (home_team, home_team_logo, away_team, away_team_logo, home_score, away_score, date, round) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                        (home_team ,home_team_logo , away_team, away_team_logo, home_score, away_score, date, round))
        
        mysql.connection.commit()
        cur.close()
        
        return jsonify({'message': 'Matches stored successfully'})
    
    except Exception as e:
        print("Error al almacenar los partidos:", e)  # Debugging
        return jsonify({'error': str(e)})
