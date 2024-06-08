import { JobOfferWhereInput } from "./JobOfferWhereInput";
import { JobOfferOrderByInput } from "./JobOfferOrderByInput";

export type JobOfferFindManyArgs = {
  where?: JobOfferWhereInput;
  orderBy?: Array<JobOfferOrderByInput>;
  skip?: number;
  take?: number;
};
