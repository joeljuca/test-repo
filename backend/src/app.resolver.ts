import { Resolver, Query } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AppointmentsService } from './appointments.service';

const prisma = new PrismaClient();

@Resolver()
export class AppResolver {
constructor {
  this.appointmentsService =  new AppointmentsService()
}

  @Query(() => String)
  async hello(): Promise<string> {
    const helloWorld = await prisma.helloWorld.findFirst();
    return helloWorld ? helloWorld.message : 'No message found';
  }

  async getAppointments() {
    // - Use a service module to fetch appointments
    // - Return them to be served as GraphQL response

    return await this.appointmentsService.getAppointments();
  }
}
