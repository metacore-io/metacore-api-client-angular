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
import { DevicesId } from './devicesId';
import { OrganizationsId } from './organizationsId';
import { UsersId } from './usersId';

export interface Hardwares { 
    id?: string;
    capabilities?: Array<string>;
    claimed?: boolean;
    claimedAt?: Date;
    claimedBy?: UsersId;
    claimedUntil?: Date;
    colorCode?: string;
    description?: string;
    desired?: number;
    deviceId: DevicesId;
    gpioPin: number;
    name: string;
    organizationId?: OrganizationsId;
    outputId?: number;
    reported?: number;
}