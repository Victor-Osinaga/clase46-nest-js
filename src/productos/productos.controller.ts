import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateProductoDto } from 'src/dtos/CreateProduct.dto'
import { Producto } from 'src/interfaces/producto.interface'
import { ProductoReturn } from 'src/interfaces/producto.return.interface'
import { ProductosService } from './productos.service'

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Post()
    async create(@Body() createProductoDto: CreateProductoDto): Promise<ProductoReturn>{
        return this.productosService.create(createProductoDto)
    }

    @Get()
    async findAll(): Promise<ProductoReturn[]> {
        return this.productosService.findAll()
    }
}