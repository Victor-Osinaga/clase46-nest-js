import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto {
    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly foto: string;
}