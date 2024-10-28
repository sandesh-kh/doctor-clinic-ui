export interface Prescription {
  id: number;
  patientId: number;
  medication: string;
  dosage: string;
  instructions: string;
  date: string; // use appropriate date format
}
