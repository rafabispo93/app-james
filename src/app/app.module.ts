import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ConfigurationPage} from '../pages/configuration/configuration';
import {ManualPage} from '../pages/manual/manual';
import {MainPage} from '../pages/main/main';
import {ManagementPage} from '../pages/management/management';
import {ManagementRitmosPage} from '../pages/management-ritmos/management-ritmos';
import {ModalLoginPage} from '../pages/modal-login/modal-login';
import {VisualizationPage} from '../pages/visualization/visualization';
import {CompressionPage} from '../pages/compression/compression';
import { ChartsModule } from 'ng2-charts';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DebuggerPage } from '../pages/debugger/debugger';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfigurationPage,
    ManualPage,
    MainPage,
    ManagementPage,
    ManagementRitmosPage,
    ModalLoginPage,
    VisualizationPage,
    CompressionPage,
    DebuggerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfigurationPage,
    ManualPage,
    MainPage,
    ManagementPage,
    ManagementRitmosPage,
    ModalLoginPage,
    VisualizationPage,
    CompressionPage,
    DebuggerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
