import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'src/environments/environment';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    // NgxStripeModule.forRoot(environment.stripe_key)
  ],
  exports: [
    SubscriptionComponent
  ]
})
export class PaymentModule { }
