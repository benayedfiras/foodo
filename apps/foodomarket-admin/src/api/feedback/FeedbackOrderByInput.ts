import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
