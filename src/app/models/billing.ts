export interface Billing {
  id: number;
  patientId: number;
  amount: number;
  status: string;
  date: string; // use appropriate date format
}
