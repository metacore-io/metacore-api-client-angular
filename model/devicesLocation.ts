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

export interface DevicesLocation { 
    coordinates: Array<number>;
    type: DevicesLocation.TypeEnum;
}
export namespace DevicesLocation {
    export type TypeEnum = 'Point';
    export const TypeEnum = {
        Point: 'Point' as TypeEnum
    };
}