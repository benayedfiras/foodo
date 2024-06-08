import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobOfferWhereInput = {
  department?: DepartmentWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  requirements?: StringNullableFilter;
  title?: StringNullableFilter;
};
