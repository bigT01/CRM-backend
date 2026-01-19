export class CreateSubscriptionDto {
  serviceName: string;
  billingCycle: 'monthly' | 'yearly' | 'usage';
  currency: string;
  startDate: Date;
}
