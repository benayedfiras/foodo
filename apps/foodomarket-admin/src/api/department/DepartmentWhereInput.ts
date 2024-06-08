import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOfferListRelationFilter } from "../jobOffer/JobOfferListRelationFilter";

export type DepartmentWhereInput = {
  description?: StringNullableFilter;
  head?: StringNullableFilter;
  id?: StringFilter;
  jobOffers?: JobOfferListRelationFilter;
  name?: StringNullableFilter;
};
