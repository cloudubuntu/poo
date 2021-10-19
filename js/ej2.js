class Cuenta{

   
    constructor(titular){
        this.titular=titular
        this.saldo=0;
    }

    ingresar(monto){
        this.saldo+=monto;
        document.write('<br>Ingreso exitoso, el saldo es de $'+this.saldo);
    }

    extraer(monto){
        if(monto<=this.saldo){
            this.saldo-=monto;
            document.write('<br>Extraccion exitosa, el saldo es de $'+this.saldo);
        }else{
            document.write('<br>Fondos insuficientes');
        }
    }

    informar(){
        document.write('<br>La cuenta del Titutlar '+this.titular+', posee un saldo de $ '+this.saldo);
    }

}


let cuenta=new Cuenta('Alan');

cuenta.informar();

cuenta.ingresar(10000);

cuenta.extraer(5000);

cuenta.informar();
