import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobOfferService } from "./jobOffer.service";
import { JobOfferControllerBase } from "./base/jobOffer.controller.base";

@swagger.ApiTags("jobOffers")
@common.Controller("jobOffers")
export class JobOfferController extends JobOfferControllerBase {
  constructor(protected readonly service: JobOfferService) {
    super(service);
  }
}
