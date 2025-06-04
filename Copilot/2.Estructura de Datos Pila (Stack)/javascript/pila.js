const readline = require('readline');

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.length ? this.items.pop() : "Pila vacía";
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const stack = new Stack();

function prompt() {
    rl.question("Elige una opción (push, pop, salir): ", (op) => {
        if (op === "push") {
            rl.question("Valor a agregar: ", (val) => {
                stack.push(val);
                prompt();
            });
        } else if (op === "pop") {
            console.log("Elemento eliminado:", stack.pop());
            prompt();
        } else if (op === "salir") {
            rl.close();
        } else {
            prompt();
        }
    });
}

prompt();
