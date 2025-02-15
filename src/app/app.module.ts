import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import {CovalentLayoutModule} from "@covalent/core/layout";
import {CovalentStepsModule} from "@covalent/core/steps";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentHttpModule} from "@covalent/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from '@angular/material/chips';
import {AppComponent} from "./app.component";
import { BodyComponent } from './body/body.component';
import {CovalentSearchModule} from "@covalent/core/search";
import {CovalentCommonModule} from "@covalent/core/common";
import { MedicationRenderComponent } from './medication-render/medication-render.component';
import {CovalentJsonFormatterModule} from "@covalent/core/json-formatter";
import {MessageService} from "./service/message.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ProductRenderComponent } from './product-render/product-render.component';
import {CovalentMessageModule} from "@covalent/core/message";
import {CovalentExpansionPanelModule} from "@covalent/core/expansion-panel";
import {CovalentLoadingModule} from "@covalent/core/loading";
import {TokenInterceptor} from "./service/token.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";


@NgModule({
  declarations: [
      AppComponent,
    MainComponent,
    BodyComponent,
    MedicationRenderComponent,
    ProductRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentJsonFormatterModule,
    CovalentMessageModule,
    CovalentSearchModule,
    CovalentExpansionPanelModule,
    CovalentLoadingModule,

    MatIconModule,
    FlexLayoutModule,


    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    //   MatRadioModule,
    MatSelectModule,
    //  MatChipsModule,
    //  MatSortModule,
    MatToolbarModule,
    MatDialogModule,
      MatChipsModule,
    CovalentCommonModule,
    MatCheckboxModule,

  ],
  providers: [ MessageService,
      AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
