import { Injectable } from '@nestjs/common'
import { Producto } from 'src/interfaces/producto.interface'
import { ProductoReturn } from 'src/interfaces/producto.return.interface'

@Injectable()
export class ProductosService {
    private readonly productos: ProductoReturn[] = []

    create(producto: Producto):ProductoReturn{
        const id : number = this.productos.length + 1
        const obj:ProductoReturn = {...producto, id}
        console.log(obj)
        this.productos.push(obj)
        return obj
    }

    findAll(): ProductoReturn[]{
        return this.productos
    }
}