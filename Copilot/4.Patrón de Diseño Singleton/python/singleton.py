from flask import Flask, request

app = Flask(__name__)

@app.route('/saludo', methods=['GET'])
def saludo():
    nombre = request.args.get('nombre', 'amigo')
    return f"Hola, {nombre}!"

if __name__ == '__main__':
    app.run(debug=True)
