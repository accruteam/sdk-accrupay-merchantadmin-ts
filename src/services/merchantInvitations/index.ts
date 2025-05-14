import { AccruPayMerchantAdminClientContext } from '@/types/context.types';

import { MerchantSentInvitations } from './sent';
import { UserReceivedMerchantInvitations } from './received';

class MerchantInvitations {
  public readonly sent: MerchantSentInvitations;
  public readonly received: UserReceivedMerchantInvitations;

  constructor(private context: AccruPayMerchantAdminClientContext) {
    this.sent = new MerchantSentInvitations(context);
    this.received = new UserReceivedMerchantInvitations(context);
  }
}

export { MerchantInvitations };
