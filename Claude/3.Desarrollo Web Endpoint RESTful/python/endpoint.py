from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/saludo', methods=['GET'])
def obtener_saludo():
    nombre = request.args.get('nombre', 'Usuario')
    return jsonify({
        'mensaje': f'Hola, {nombre}',
        'status': 'success'
    })

@app.route('/saludo', methods=['POST'])
def crear_saludo():
    data = request.get_json()
    nombre = data.get('nombre', 'Usuario') if data else 'Usuario'
    return jsonify({
        'mensaje': f'Hola, {nombre}',
        'status': 'success'
    }), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)