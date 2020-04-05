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

import { Devices } from '../model/devices';
import { InlineResponse2001 } from '../model/inlineResponse2001';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DevicesService {

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
     * Deletes a devices document
     * 
     * @param devicesId 
     * @param ifMatch Current value of the _etag field
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletedevicesItem(devicesId: string, ifMatch: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletedevicesItem(devicesId: string, ifMatch: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletedevicesItem(devicesId: string, ifMatch: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletedevicesItem(devicesId: string, ifMatch: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (devicesId === null || devicesId === undefined) {
            throw new Error('Required parameter devicesId was null or undefined when calling deletedevicesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling deletedevicesItem.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/devices/${encodeURIComponent(String(devicesId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves one or more devices
     * 
     * @param where the filters query parameter (ex.: {\&quot;number\&quot;: 10})
     * @param sort the sort query parameter (ex.: \&quot;city,-lastname\&quot;)
     * @param page the pages query parameter
     * @param maxResults the max results query parameter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getdevices(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    public getdevices(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    public getdevices(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    public getdevices(where?: string, sort?: string, page?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





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

        return this.httpClient.request<InlineResponse2001>('get',`${this.basePath}/devices`,
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
     * Retrieves a devices document
     * 
     * @param devicesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getdevicesItem(devicesId: string, observe?: 'body', reportProgress?: boolean): Observable<Devices>;
    public getdevicesItem(devicesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Devices>>;
    public getdevicesItem(devicesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Devices>>;
    public getdevicesItem(devicesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (devicesId === null || devicesId === undefined) {
            throw new Error('Required parameter devicesId was null or undefined when calling getdevicesItem.');
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

        return this.httpClient.request<Devices>('get',`${this.basePath}/devices/${encodeURIComponent(String(devicesId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a devices document
     * 
     * @param body A devices or list of devices documents
     * @param ifMatch Current value of the _etag field
     * @param devicesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public patchdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public patchdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public patchdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchdevicesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling patchdevicesItem.');
        }

        if (devicesId === null || devicesId === undefined) {
            throw new Error('Required parameter devicesId was null or undefined when calling patchdevicesItem.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/devices/${encodeURIComponent(String(devicesId))}`,
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
     * Stores one or more devices.
     * 
     * @param body A devices or list of devices documents
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postdevices(body: Devices, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postdevices(body: Devices, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postdevices(body: Devices, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postdevices(body: Devices, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postdevices.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/devices`,
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
     * Replaces a devices document
     * 
     * @param body A devices or list of devices documents
     * @param ifMatch Current value of the _etag field
     * @param devicesId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putdevicesItem(body: Devices, ifMatch: string, devicesId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putdevicesItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling putdevicesItem.');
        }

        if (devicesId === null || devicesId === undefined) {
            throw new Error('Required parameter devicesId was null or undefined when calling putdevicesItem.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/devices/${encodeURIComponent(String(devicesId))}`,
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
