export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  appointmentDate: string; // use appropriate date format
  status: string;
}
