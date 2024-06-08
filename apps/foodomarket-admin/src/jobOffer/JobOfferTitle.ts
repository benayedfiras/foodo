import { JobOffer as TJobOffer } from "../api/jobOffer/JobOffer";

export const JOBOFFER_TITLE_FIELD = "title";

export const JobOfferTitle = (record: TJobOffer): string => {
  return record.title?.toString() || String(record.id);
};
