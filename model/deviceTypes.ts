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
import { DeviceTypesId } from './deviceTypesId';
import { OrganizationsId } from './organizationsId';

export interface DeviceTypes { 
    id?: DeviceTypesId;
    config?: any;
    description?: string;
    name: string;
    organizationId?: OrganizationsId;
}