class CarritoCompra{
    constructor(){
    this.carrito=[]

    }
    agregarProducto(producto){
        if(producto.length==0){
            throw Error("Factura Invalida");

        }else{
            for(const item of producto){
                this.carrito.push(item);
            }
        }


    }
    calcularTotal(){
        let suma=0;
        for(const item of this.carrito){
           
            const{precio,cantidad}=item;
          
            
            suma+=precio*cantidad;
            
        }
        return suma;

    }
    aplicarDescuento(porcentaje){
        let suma=this.calcularTotal();
        let descuento=suma*(1-porcentaje);

        return descuento;

    }
}
    module.exports=CarritoCompra;
    