import type { ApplicationStatus } from '../constants/status';

export interface Application {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  appliedAt: string;
}
