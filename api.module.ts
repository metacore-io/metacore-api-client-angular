import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DeviceTypesService } from './api/deviceTypes.service';
import { DevicesService } from './api/devices.service';
import { HardwaresService } from './api/hardwares.service';
import { LoraserverCoreService } from './api/loraserverCore.service';
import { MeasurablesService } from './api/measurables.service';
import { OplogService } from './api/oplog.service';
import { OrganizationDetailsService } from './api/organizationDetails.service';
import { OrganizationsService } from './api/organizations.service';
import { PreferencesService } from './api/preferences.service';
import { RegionsService } from './api/regions.service';
import { RolesService } from './api/roles.service';
import { SensorsService } from './api/sensors.service';
import { SignupService } from './api/signup.service';
import { TenantsService } from './api/tenants.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DeviceTypesService,
    DevicesService,
    HardwaresService,
    LoraserverCoreService,
    MeasurablesService,
    OplogService,
    OrganizationDetailsService,
    OrganizationsService,
    PreferencesService,
    RegionsService,
    RolesService,
    SensorsService,
    SignupService,
    TenantsService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
