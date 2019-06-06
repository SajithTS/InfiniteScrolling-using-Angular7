import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule, MatProgressBarModule,
  MatMenuModule,
  MatSelectModule, MatFormFieldModule,MatRadioModule,MatPaginatorModule,
  MatProgressSpinnerModule,MatChipsModule, MatTooltipModule,MatBadgeModule,
  MatSliderModule,MatDialogModule, MatSnackBarModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule, MatProgressBarModule,
  MatMenuModule,
  MatSelectModule, MatFormFieldModule,MatRadioModule,MatPaginatorModule,
  MatProgressSpinnerModule,MatChipsModule, MatTooltipModule,MatBadgeModule,
  MatSliderModule,MatDialogModule, MatSnackBarModule,
  InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
