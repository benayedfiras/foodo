/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FooterWhereInput } from "./FooterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FooterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FooterWhereInput,
  })
  @ValidateNested()
  @Type(() => FooterWhereInput)
  @IsOptional()
  @Field(() => FooterWhereInput, {
    nullable: true,
  })
  every?: FooterWhereInput;

  @ApiProperty({
    required: false,
    type: () => FooterWhereInput,
  })
  @ValidateNested()
  @Type(() => FooterWhereInput)
  @IsOptional()
  @Field(() => FooterWhereInput, {
    nullable: true,
  })
  some?: FooterWhereInput;

  @ApiProperty({
    required: false,
    type: () => FooterWhereInput,
  })
  @ValidateNested()
  @Type(() => FooterWhereInput)
  @IsOptional()
  @Field(() => FooterWhereInput, {
    nullable: true,
  })
  none?: FooterWhereInput;
}
export { FooterListRelationFilter as FooterListRelationFilter };
