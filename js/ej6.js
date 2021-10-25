/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/
class Libro{
    constructor(isbn, titulo, autor, numeroDePaginas){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numeroDePaginas=numeroDePaginas;
    }

    set cambiarTitulo(tituloNuevo){
        this.titulo=tituloNuevo;
    }

    set cambiarIsbn(isbnNuevo){
        this.isbn=isbnNuevo;
    }

    set cambiarAutor(autorNuevo){
        this.autor=autorNuevo;
    }

    set cambiarNumeroDePaginas(numeroDePaginasNuevo){
        this.numeroDePaginas=numeroDePaginasNuevo;
    }

    get obtIsbn(){
        return this.isbn;
    }

    get obtTitulo(){
        return this.titulo;
    }

    get obtAutor(){
        return this.autor;
    }

    get obtNumeroDePaginas(){
        return this.numeroDePaginas;
    }

    mostrarLibro(){
        return 'El Libro '+this.obtTitulo+', con ISBN N° '+this.obtIsbn+', creado por el autor '+this.obtAutor+
        ', tiene '+this.obtNumeroDePaginas+' paginas.-'
    }


}

function compararLibros(libro1, libro2){
 if(libro1.obtNumeroDePaginas>libro2.obtNumeroDePaginas){
     return 'El libro '+libro1.obtTitulo+' tiene mas paginas que el libro '+libro2.obtTitulo+'.-';
 }else if(libro1.obtNumeroDePaginas==libro2.obtNumeroDePaginas){
     return 'El libro '+libro1.obtTitulo+' tiene la misma cantidad de paginas que el libro '+libro2.obtTitulo+'.-';
 }else{
    return 'El libro '+libro2.obtTitulo+' tiene mas paginas que el libro '+libro1.obtTitulo+'.-';
}
}

let harryP=new Libro(123654654987987, 'Harry Potter y La Piedra Filosofal', 'J.K.Rowling', 556);
let brujulaD=new Libro(5468732984654, 'La Brujula Dorada', 'Alan', 987);

document.write('<br>'+harryP.mostrarLibro());
document.write('<br>'+brujulaD.mostrarLibro());
document.write('<hr>');
document.write(compararLibros(harryP, brujulaD));