import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule , BsDropdownModule, AccordionModule, ButtonsModule} from "ngx-bootstrap";
import { AppComponent } from "./app.component";
import { appRoutingProviders, routing } from './app.routes';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    CoreModule, 
    routing,
    TooltipModule.forRoot(), 
    BsDropdownModule.forRoot(), 
    ButtonsModule.forRoot(),
     AccordionModule.forRoot()],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
