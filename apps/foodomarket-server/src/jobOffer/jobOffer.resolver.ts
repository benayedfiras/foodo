import * as graphql from "@nestjs/graphql";
import { JobOfferResolverBase } from "./base/jobOffer.resolver.base";
import { JobOffer } from "./base/JobOffer";
import { JobOfferService } from "./jobOffer.service";

@graphql.Resolver(() => JobOffer)
export class JobOfferResolver extends JobOfferResolverBase {
  constructor(protected readonly service: JobOfferService) {
    super(service);
  }
}
