export * from './deviceTypes.service';
import { DeviceTypesService } from './deviceTypes.service';
export * from './devices.service';
import { DevicesService } from './devices.service';
export * from './hardwares.service';
import { HardwaresService } from './hardwares.service';
export * from './loraserverCore.service';
import { LoraserverCoreService } from './loraserverCore.service';
export * from './measurables.service';
import { MeasurablesService } from './measurables.service';
export * from './oplog.service';
import { OplogService } from './oplog.service';
export * from './organizationDetails.service';
import { OrganizationDetailsService } from './organizationDetails.service';
export * from './organizations.service';
import { OrganizationsService } from './organizations.service';
export * from './preferences.service';
import { PreferencesService } from './preferences.service';
export * from './regions.service';
import { RegionsService } from './regions.service';
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './sensors.service';
import { SensorsService } from './sensors.service';
export * from './signup.service';
import { SignupService } from './signup.service';
export * from './tenants.service';
import { TenantsService } from './tenants.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [DeviceTypesService, DevicesService, HardwaresService, LoraserverCoreService, MeasurablesService, OplogService, OrganizationDetailsService, OrganizationsService, PreferencesService, RegionsService, RolesService, SensorsService, SignupService, TenantsService, UsersService];