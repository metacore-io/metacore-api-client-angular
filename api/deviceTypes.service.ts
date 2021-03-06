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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DeviceTypes } from '../model/deviceTypes';
import { InlineResponse200 } from '../model/inlineResponse200';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DeviceTypesService {

    protected basePath = 'https://api.teke.li/api/v1/obs/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Deletes a device-types document
     * 
     * @param deviceTypesId 
     * @param ifMatch Current value of the _etag field
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletedeviceTypesItem(deviceTypesId: string, ifMatch: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletedeviceTypesItem(deviceTypesId: string, ifMatch: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletedeviceTypesItem(deviceTypesId: string, ifMatch: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletedeviceTypesItem(deviceTypesId: string, ifMatch: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (deviceTypesId === null || deviceTypesId === undefined) {
            throw new Error('Required parameter deviceTypesId was null or undefined when calling deletedeviceTypesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling deletedeviceTypesItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/device_types/${encodeURIComponent(String(deviceTypesId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves one or more device_types
     * 
     * @param where the filters query parameter (ex.: {\&quot;number\&quot;: 10})
     * @param sort the sort query parameter (ex.: \&quot;city,-lastname\&quot;)
     * @param page the pages query parameter
     * @param maxResults the max results query parameter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getdeviceTypes(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public getdeviceTypes(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public getdeviceTypes(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public getdeviceTypes(where?: string, sort?: string, page?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (where !== undefined && where !== null) {
            queryParameters = queryParameters.set('where', <any>where);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (maxResults !== undefined && maxResults !== null) {
            queryParameters = queryParameters.set('max_results', <any>maxResults);
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<InlineResponse200>('get',`${this.basePath}/device_types`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a device-types document
     * 
     * @param deviceTypesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getdeviceTypesItem(deviceTypesId: string, observe?: 'body', reportProgress?: boolean): Observable<DeviceTypes>;
    public getdeviceTypesItem(deviceTypesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeviceTypes>>;
    public getdeviceTypesItem(deviceTypesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeviceTypes>>;
    public getdeviceTypesItem(deviceTypesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (deviceTypesId === null || deviceTypesId === undefined) {
            throw new Error('Required parameter deviceTypesId was null or undefined when calling getdeviceTypesItem.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<DeviceTypes>('get',`${this.basePath}/device_types/${encodeURIComponent(String(deviceTypesId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a device-types document
     * 
     * @param body A device-types or list of device-types documents
     * @param ifMatch Current value of the _etag field
     * @param deviceTypesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public patchdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public patchdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public patchdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchdeviceTypesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling patchdeviceTypesItem.');
        }

        if (deviceTypesId === null || deviceTypesId === undefined) {
            throw new Error('Required parameter deviceTypesId was null or undefined when calling patchdeviceTypesItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('patch',`${this.basePath}/device_types/${encodeURIComponent(String(deviceTypesId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Stores one or more device_types.
     * 
     * @param body A device-types or list of device-types documents
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postdeviceTypes(body: DeviceTypes, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postdeviceTypes(body: DeviceTypes, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postdeviceTypes(body: DeviceTypes, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postdeviceTypes(body: DeviceTypes, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postdeviceTypes.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/device_types`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replaces a device-types document
     * 
     * @param body A device-types or list of device-types documents
     * @param ifMatch Current value of the _etag field
     * @param deviceTypesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putdeviceTypesItem(body: DeviceTypes, ifMatch: string, deviceTypesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putdeviceTypesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling putdeviceTypesItem.');
        }

        if (deviceTypesId === null || deviceTypesId === undefined) {
            throw new Error('Required parameter deviceTypesId was null or undefined when calling putdeviceTypesItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys["X-Api-Key"]) {
            headers = headers.set('X-Api-Key', this.configuration.apiKeys["X-Api-Key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/device_types/${encodeURIComponent(String(deviceTypesId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
