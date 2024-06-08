import { SortOrder } from "../../util/SortOrder";

export type JobOfferOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requirements?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
