import { Module } from "@nestjs/common";
import { JobOfferModuleBase } from "./base/jobOffer.module.base";
import { JobOfferService } from "./jobOffer.service";
import { JobOfferController } from "./jobOffer.controller";
import { JobOfferResolver } from "./jobOffer.resolver";

@Module({
  imports: [JobOfferModuleBase],
  controllers: [JobOfferController],
  providers: [JobOfferService, JobOfferResolver],
  exports: [JobOfferService],
})
export class JobOfferModule {}
