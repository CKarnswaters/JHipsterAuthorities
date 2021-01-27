import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterRolesAndAuthoritiesSharedModule } from 'app/shared/shared.module';
import { JHipsterRolesAndAuthoritiesCoreModule } from 'app/core/core.module';
import { JHipsterRolesAndAuthoritiesAppRoutingModule } from './app-routing.module';
import { JHipsterRolesAndAuthoritiesHomeModule } from './home/home.module';
import { JHipsterRolesAndAuthoritiesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterRolesAndAuthoritiesSharedModule,
    JHipsterRolesAndAuthoritiesCoreModule,
    JHipsterRolesAndAuthoritiesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterRolesAndAuthoritiesEntityModule,
    JHipsterRolesAndAuthoritiesAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JHipsterRolesAndAuthoritiesAppModule {}
