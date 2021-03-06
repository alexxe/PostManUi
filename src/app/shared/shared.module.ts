import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {
  BsDropdownModule,
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    CKEditorModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    CKEditorModule
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
