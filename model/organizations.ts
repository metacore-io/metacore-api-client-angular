/**
 * Metacore IoT Object Storage API
 * Metacore Object Storage - IOT Core Services
 *
 * OpenAPI spec version: 1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OrganizationsId } from './organizationsId';

export interface Organizations { 
    id?: OrganizationsId;
    address?: string;
    brandName?: string;
    city?: string;
    country?: string;
    description?: string;
    guid?: number;
    isActive?: boolean;
    loraserverOrganizationId?: number;
    name: string;
    organizationId?: OrganizationsId;
    phoneNumber?: string;
    taxNumber?: number;
    taxOffice?: string;
}