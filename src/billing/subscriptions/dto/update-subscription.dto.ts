import { SubscriptionStatus } from '../../enums/subscription-status.enum';

export class UpdateSubscriptionDto {
  status?: SubscriptionStatus;
  autoRenew?: boolean;
}
