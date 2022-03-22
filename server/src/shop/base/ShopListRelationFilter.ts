/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShopWhereInput } from "./ShopWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShopListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShopWhereInput,
  })
  @ValidateNested()
  @Type(() => ShopWhereInput)
  @IsOptional()
  @Field(() => ShopWhereInput, {
    nullable: true,
  })
  every?: ShopWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShopWhereInput,
  })
  @ValidateNested()
  @Type(() => ShopWhereInput)
  @IsOptional()
  @Field(() => ShopWhereInput, {
    nullable: true,
  })
  some?: ShopWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShopWhereInput,
  })
  @ValidateNested()
  @Type(() => ShopWhereInput)
  @IsOptional()
  @Field(() => ShopWhereInput, {
    nullable: true,
  })
  none?: ShopWhereInput;
}
export { ShopListRelationFilter };
