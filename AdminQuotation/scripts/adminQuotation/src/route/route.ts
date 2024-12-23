import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { layoutComponent } from '../components/layout/layout.component';
import { TableListComponent } from '../components/requestList/tableList/tableList.component';
import { RequestQuoteComponent } from '../components/requestQuote/requestQuote/requestQuote.component';
import { responseQuoteComponent } from '../components/responseQuote/responseQuote/responseQuote.component';
import { ViewAcceptComponent } from '../components/viewAcceptQuote/viewAccept/viewAccept.component';
import { ViewRejectComponent } from '../components/viewRejectQuote/viewReject/viewReject.component';
import { AcceptDetailComponent } from '../components/acceptDetail/acceptDetail/acceptDetail.component';
import { RejectDetailComponent } from '../components/rejectDetail/rejectDetail/rejectDetail.component';



const adminRoute: Routes = [
    {
        path: 'home',
        component: layoutComponent,
        children: [
            {
                path: 'tablelist',
                component: TableListComponent
            },
            {
                path: 'request',
                component: RequestQuoteComponent
            },
            {
                path: 'viewaccept',
                component: ViewAcceptComponent
            },
            {
                path: 'viewreject',
                component: ViewRejectComponent
            },
            {
                path: 'acdetail',
                component: AcceptDetailComponent
            },
            {
                path: 'rjdetail',
                component: RejectDetailComponent
            },
            {
                path: 'response',
                component: responseQuoteComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(adminRoute, { useHash: true })],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminUiRoute {

}