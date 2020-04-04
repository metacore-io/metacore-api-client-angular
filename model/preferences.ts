/**
 * Metacore IoT Object Storage API
 * Metacore Object Storage - IOT Core Services
 *
 * OpenAPI spec version: 0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OrganizationsId } from './organizationsId';
import { PreferencesDashboards } from './preferencesDashboards';
import { UsersId } from './usersId';

export interface Preferences { 
    id?: string;
    dashboards?: Array<PreferencesDashboards>;
    organizationId?: OrganizationsId;
    userId: UsersId;
}