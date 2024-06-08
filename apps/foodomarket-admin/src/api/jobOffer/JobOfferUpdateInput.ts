import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type JobOfferUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  description?: string | null;
  requirements?: string | null;
  title?: string | null;
};
