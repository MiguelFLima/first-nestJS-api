/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
  IsPositive,
  IsDecimal,
  Min,
  Length,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ImageInfoDTO } from './imageInfo.dto';
import { ProductsInfoDTO } from './productsInfo.dto';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  @IsDecimal(
    { decimal_digits: '2' },
    { message: 'O valor deve ter no máximo 2 casas decimais' },
  )
  @Min(0, { message: 'O valor precisa ser maior ou igual a 0' })
  valor: number;

  @IsNumber()
  quantidadeDisponivel: number;

  @Length(1, 100, {
    message: 'A propriedade deve ter entre 1 e 100 caracteres',
  })
  descricao: string;

  @ArrayMinSize(3, {
    message: 'O produto deve ter no mínimo 3 características',
  })
  @ValidateNested()
  @IsArray()
  @Type(() => ProductsInfoDTO)
  caracteristicas: ProductsInfoDTO[];

  @ArrayMinSize(1, {
    message: 'O produto deve ter no mínimo 1 imagem',
  })
  @ValidateNested()
  @IsArray()
  @Type(() => ImageInfoDTO)
  imagens: ImageInfoDTO[];

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  dataCriacao: string;

  @IsString()
  @IsNotEmpty()
  dataAtualizacao: string;
}
