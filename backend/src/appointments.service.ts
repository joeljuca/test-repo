import { Injectable } from '@nestjs/common';

type Appointment = {
  id: string;
};

@Injectable()
export class AppointmentsService {
  getAppointments(): Promise<Appointment[]> {
    //

    return Promise.all([]);
  }
}
