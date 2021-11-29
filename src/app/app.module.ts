import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PostComponent } from './pages/post/post/post.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserComponent } from './pages/user/user/user.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { InfoListComponent } from './pages/info-list/info-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DATE_FORMAT } from './utils/custom_date_format';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesComponent } from './pages/post/categories/categories.component';
import { CategoriesListComponent } from './pages/post/categories-list/categories-list.component';

registerLocaleData(it);



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    SettingsComponent,
    UserComponent,
    UserListComponent,
    InfoListComponent,
    CategoriesComponent,
    CategoriesListComponent,
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    CKEditorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT },  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
