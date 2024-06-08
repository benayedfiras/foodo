import { JobOffer } from "../jobOffer/JobOffer";

export type Department = {
  createdAt: Date;
  description: string | null;
  head: string | null;
  id: string;
  jobOffers?: Array<JobOffer>;
  name: string | null;
  updatedAt: Date;
};
