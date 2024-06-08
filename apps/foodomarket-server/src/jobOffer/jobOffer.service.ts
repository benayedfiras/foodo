import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobOfferServiceBase } from "./base/jobOffer.service.base";

@Injectable()
export class JobOfferService extends JobOfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
