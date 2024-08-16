class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    // Getters
    get Nombre() {
        return this.#nombre;
    }

    get Edad() {
        return this.#edad;
    }

    get Img() {
        return this.#img;
    }

    get Sonido() {
        return this.#sonido;
    }

    get Comentarios() {
        return this.#comentarios;
    }

    // Setters
    set Comentarios(comentarios) {
        this.#comentarios = comentarios;
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        console.log(this.Sonido);
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        console.log(this.Sonido);
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir() {
        console.log(this.Sonido);
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        console.log(this.Sonido);
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        console.log(this.Sonido);
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };