class Producto{

    constructor(codigo, nombre, precio){
        this.cod=codigo;
        this.name=nombre;
        this.price=precio;        
    }

    /**
     * @param {number} precio
     */
    set cambiarPrecio(precio){
        this.price=precio;
    }

    get codigo(){
        return this.cod;
    }

    get nombre(){
        return this.name;
    }

    get precio(){
        return this.price;
    }
    get imprimeDatos(){
        return ('<br>El producto Codigo: '+this.codigo+', Nombre: '+this.nombre+', Precio: $'+this.precio); 
    }

}


let Productos=[];

let milk=new Producto('LS12354', 'La Serenisima parcialmente descremada', 100);

let bread=new Producto('F1235', 'Pan Lactal Fargo Blanco', 165);

let soda=new Producto('CC0001', 'Coca Cola 2lts Retornable', 160);

Productos.push(milk);
Productos.push(bread);
Productos.push(soda);

for(let i=0; i<Productos.length; i++){
    document.write(Productos[i].imprimeDatos);
}