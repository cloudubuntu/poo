class Contacto{

    constructor(nombre, telefono){
        this.nombre=nombre.toUpperCase();
        this.telefono=telefono;
    }

    set setNombre(nombre){
        this.nombre=nombre.toUpperCase();
    }

    set setTelefono(telefono){
        this.telefono=telefono;
    }

    get getNombre(){
        return this.nombre;
    }

    get getTelefono(){
        return this.telefono;
    }

    detallesContacto(){
        document.write(`Nombre:${this.nombre} Telefono_ ${this.telefono}`); 
    }
}

class AgendadeContactos{

    constructor(long){

       this.agenda=[];
       this.longitud=long; 
    }

    set setLongAgenda(long){
        this.longitud=long;
    }

    get getAgenda(){
        return this.agenda;
    }

    addContacto(Contacto){
        if(this.agenda.length<this.long){
            this.agenda.push(Contacto);
        }else{
            alert('Agenda llena');
        }
        
    }

    existeContacto(Contacto){
        let exist=this.agenda.find((contactoExistente)=>contactoExistente.nombre===Contacto.nombre);

        if(exist){
            return true;
        }else{
            return false;
        }
    }

    listarContactos(agenda){
        for(let i=0;i.agenda.length;i++){
            console.log(`Contacto: ${this.agenda[i].getNombre} Telefono: ${this.agenda[i].getTelefono}`);
        }
    }

    buscaContacto(nombre){
        let exist=this.agenda.find((contactoExist)=>contactoExist.nombre===contacto.nombre);
        if(exist){
            console.log(`Contacto encontrado Telefono: ${}`)
        }
    }



}