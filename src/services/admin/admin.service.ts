import { AccruPayMerchantAdminClientContext } from '@/types/context.types';

import { AdminMerchants } from './merchants';

class Admin {
  public readonly merchants: AdminMerchants;

  constructor(private context: AccruPayMerchantAdminClientContext) {
    this.merchants = new AdminMerchants(context);
  }
}

export { Admin };
