import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AdminUiRoute } from "../route/route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { layoutComponent } from "../components/layout/layout.component";
import { sidebarComponent } from "../components/sidebar/sidebar.component";
import { headerComponent } from "../components/header/header.component";
import { RequestListComponent } from "../components/requestList/requestList/requestList.component";
import { TableListComponent } from "../components/requestList/tableList/tableList.component";
import { FormQuoteComponent } from "../components/requestQuote/formQuote/formQuote.component";
import { RequestQuoteComponent } from "../components/requestQuote/requestQuote/requestQuote.component";
import { QuoteDetailComponent } from "../components/responseQuote/quoteDetail/quoteDetail.component";
import { responseQuoteComponent } from "../components/responseQuote/responseQuote/responseQuote.component";
import { ViewAcceptComponent } from "../components/viewAcceptQuote/viewAccept/viewAccept.component";
import { AcceptQuoteComponent } from "../components/viewAcceptQuote/acceptQuote/accptQuote.component";
import { ViewRejectComponent } from "../components/viewRejectQuote/viewReject/viewReject.component";
import { RejectQuoteComponent } from "../components/viewRejectQuote/rejectQuote/rejectQuote.component";
import { DetailComponent } from "../components/acceptDetail/detail/detail.component";
import { AcceptDetailComponent } from "../components/acceptDetail/acceptDetail/acceptDetail.component";
import { RejectDetailComponent } from "../components/rejectDetail/rejectDetail/rejectDetail.component";
import { RJDetailComponent } from "../components/rejectDetail/detail/detail.component";
import { RequestDetailComponent } from "../components/requestQuote/requestDetail/requestDetail.component";


@NgModule({
    declarations: [
        layoutComponent,
        headerComponent,
        sidebarComponent,
        RequestListComponent,
        TableListComponent,
        FormQuoteComponent,
        RequestQuoteComponent,
        QuoteDetailComponent,
        responseQuoteComponent,
        ViewAcceptComponent,
        AcceptQuoteComponent,
        ViewRejectComponent,
        RejectQuoteComponent,
        DetailComponent,
        AcceptDetailComponent,
        RejectDetailComponent,
        RJDetailComponent,
        RequestDetailComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AdminUiRoute,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }