import { JobOfferUpdateManyWithoutDepartmentsInput } from "./JobOfferUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  description?: string | null;
  head?: string | null;
  jobOffers?: JobOfferUpdateManyWithoutDepartmentsInput;
  name?: string | null;
};
