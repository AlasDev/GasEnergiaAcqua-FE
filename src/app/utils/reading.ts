export interface Reading {
  id: string;
  meterId: string;
  valueRecorded: number;
  readingTimestamp: Date;
  notes: string;
  createdAt: Date;
}
