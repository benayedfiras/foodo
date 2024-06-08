import { Department } from "../department/Department";

export type JobOffer = {
  createdAt: Date;
  department?: Department | null;
  description: string | null;
  id: string;
  requirements: string | null;
  title: string | null;
  updatedAt: Date;
};
