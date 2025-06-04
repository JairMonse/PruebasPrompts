from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/saludar', methods=['GET'])
def saludar():
    nombre = request.args.get('nombre', 'Mundo')
    return jsonify({"mensaje": f"Hola, {nombre}"})

if __name__ == '__main__':
    app.run(debug=True)