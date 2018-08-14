import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {PostsService} from './observable-example/list-posts/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BindingsComponent} from './bindings';
import { MenuComponent } from './menu/menu.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form.component';
import {ReactiveFormComponent} from './forms/reactive-form.component';
import { CreditCardValidatorDirective } from './forms/credit-card-validator.directive';
import {HidingComponent} from './hiding/hiding.component';
import {ModelComponent} from './model/model.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';
import {NgforComponent} from './ngfor/ngfor.component';
import {NgClassComponent} from './ngclass/ng-class.component';
import {NgSwitchComponent} from './ngswitch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ListPostsComponent, ObservableExampleComponent,
    TwoWayDataBindingExampleComponent,
    MenuComponent,
    TemplateDrivenFormComponent, ReactiveFormComponent, CreditCardValidatorDirective,
    HidingComponent, ModelComponent,
    NgforComponent, NgClassComponent, NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule, routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
