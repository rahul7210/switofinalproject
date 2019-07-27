import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpwComponent } from './resetpw/resetpw.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BindingComponent } from './binding/binding.component';
import { JoinComponent } from './join/join.component';
import { ViewComponent } from './view/view.component';
import { Header2Component } from './header2/header2.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { ItemsComponent } from './items/items.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { UpdatedpassComponent } from './updatedpass/updatedpass.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CartlogoComponent } from './cartlogo/cartlogo.component';
import { NotiComponent } from './noti/noti.component';
import { PaytmComponent } from './paytm/paytm.component';
import { TokenidComponent } from './tokenid/tokenid.component';
import { PayComponent } from './pay/pay.component';
import { ViewpayComponent } from './viewpay/viewpay.component';
import { VieworderComponent } from './vieworder/vieworder.component';




const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'order' , component:OrderComponent},
  {path:'login', component:LoginComponent},
  {path:'login/forgot password', component:ForgotpwComponent },
  {path:'login/sign up', component:SignupComponent},
  {path:'login/forgot password/resetpw', component:ResetpwComponent},
  {path:'login/admindashboard', component:AdmindashboardComponent},
  {path:'binding',component:BindingComponent},
  {path:'join',component:JoinComponent},
  {path:'view',component:ViewComponent},
  {path:'adminorders' ,component:AdminordersComponent},
  {path:'settings' ,component:SettingsComponent},
  {path:'items' ,component:ItemsComponent},
  {path:'viewitems' ,component:ViewitemsComponent},
  {path:'logout' ,component:LogoutComponent},
  {path:'updatedpass' ,component:UpdatedpassComponent},
  {path:'cart' ,component:CartComponent},
  {path:'payment' ,component:PaymentComponent},
  {path:'noti' ,component:NotiComponent},
  {path:'paytm' ,component:PaymentComponent},
  {path:'token' ,component:TokenidComponent},
  {path:'pay' ,component:PayComponent},
  {path:'viewpayment' ,component:ViewpayComponent},
  {path:'vieworder' ,component:VieworderComponent},
  {path:'updatedpass' ,component:UpdatedpassComponent},
  

 
 
  {path:'**',component:PagenotfoundComponent},



  {path:'', redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 
