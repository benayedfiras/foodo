/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FooterWhereInput } from "./FooterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FooterOrderByInput } from "./FooterOrderByInput";

@ArgsType()
class FooterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FooterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FooterWhereInput, { nullable: true })
  @Type(() => FooterWhereInput)
  where?: FooterWhereInput;

  @ApiProperty({
    required: false,
    type: [FooterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FooterOrderByInput], { nullable: true })
  @Type(() => FooterOrderByInput)
  orderBy?: Array<FooterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FooterFindManyArgs as FooterFindManyArgs };
