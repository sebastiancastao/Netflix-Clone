const CarritoCompra=require("./indice.js");



productos=[{
precio:2000,
cantidad:2,
},
{
precio:2000,
cantidad:2,
},
{
precio:2000,
cantidad:2,   
}]

producto=[{
    precio:2000,
    cantidad:2,
    }]
porcentaje=0.2;
const carrito=new CarritoCompra;
carrito.agregarProducto(producto);
const MockCarro=jest.fn(()=>{  let car=new CarritoCompra;

    return {
        agregarProducto:jest.fn(car.agregarProducto(producto)),
        aplicarDescuento:jest.fn(car.aplicarDescuento(porcentaje))
    };
} )
console.log(MockCarro);
const agregar=carrito.agregarProducto;
const MockAgregar=jest.fn(agregar);

describe("Test de la clase Carrito Compra",()=>{
   
   
    it("Prueba de Metodo Celcular Total",()=>{
        
        expect(carrito.calcularTotal()).toBe(4000);

    })
    it("Prueba de Metodo Aplicar Descuento",()=>{
        expect(carrito.aplicarDescuento(porcentaje)).toBe(3200);


    })
    it("Prueba de Metodo Calcular Total con Multiples Productos",()=>{
        carrito.agregarProducto(productos);
        expect(carrito.calcularTotal()).toBe(16000);


    })
    it("Prueba de Metodo Agregar Producto si Arroja Error con una Factura vacía",()=>{
        expect(()=>carrito.agregarProducto([])).toThrowError("Factura Invalida");
    })
    it("Probar Mock de un Metodo",()=>{
        MockAgregar(producto)
        expect(carrito.calcularTotal()).toBe(2000)

    })

    it("Probar Matcher ",()=>{
        expect(MockAgregar).toHaveBeenCalled();
      

    })
    it("Probar Mock de la Clase ",()=>{
        MockCarro.agregarProducto(producto);
        expect(MockCarro.calcularTotal()).toHaveBeenCalled(4000);
      

    })
  
})