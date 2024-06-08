import { JobOfferCreateNestedManyWithoutDepartmentsInput } from "./JobOfferCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  description?: string | null;
  head?: string | null;
  jobOffers?: JobOfferCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
};
