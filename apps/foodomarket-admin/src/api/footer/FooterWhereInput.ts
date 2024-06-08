import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FooterWhereInput = {
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
};
