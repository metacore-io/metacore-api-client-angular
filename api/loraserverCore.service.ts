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

import { InlineResponse2003 } from '../model/inlineResponse2003';
import { LoraserverCore } from '../model/loraserverCore';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LoraserverCoreService {

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
     * Deletes a loraserver-core document
     * 
     * @param loraserverCoreId 
     * @param ifMatch Current value of the _etag field
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteloraserverCoreItem(loraserverCoreId: string, ifMatch: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteloraserverCoreItem(loraserverCoreId: string, ifMatch: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteloraserverCoreItem(loraserverCoreId: string, ifMatch: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteloraserverCoreItem(loraserverCoreId: string, ifMatch: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (loraserverCoreId === null || loraserverCoreId === undefined) {
            throw new Error('Required parameter loraserverCoreId was null or undefined when calling deleteloraserverCoreItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling deleteloraserverCoreItem.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/loraserver_core/${encodeURIComponent(String(loraserverCoreId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves one or more loraserver_core
     * 
     * @param where the filters query parameter (ex.: {\&quot;number\&quot;: 10})
     * @param sort the sort query parameter (ex.: \&quot;city,-lastname\&quot;)
     * @param page the pages query parameter
     * @param maxResults the max results query parameter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getloraserverCore(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2003>;
    public getloraserverCore(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2003>>;
    public getloraserverCore(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2003>>;
    public getloraserverCore(where?: string, sort?: string, page?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





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

        return this.httpClient.request<InlineResponse2003>('get',`${this.basePath}/loraserver_core`,
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
     * Retrieves a loraserver-core document
     * 
     * @param loraserverCoreId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getloraserverCoreItem(loraserverCoreId: string, observe?: 'body', reportProgress?: boolean): Observable<LoraserverCore>;
    public getloraserverCoreItem(loraserverCoreId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoraserverCore>>;
    public getloraserverCoreItem(loraserverCoreId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoraserverCore>>;
    public getloraserverCoreItem(loraserverCoreId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (loraserverCoreId === null || loraserverCoreId === undefined) {
            throw new Error('Required parameter loraserverCoreId was null or undefined when calling getloraserverCoreItem.');
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

        return this.httpClient.request<LoraserverCore>('get',`${this.basePath}/loraserver_core/${encodeURIComponent(String(loraserverCoreId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a loraserver-core document
     * 
     * @param body A loraserver-core or list of loraserver-core documents
     * @param ifMatch Current value of the _etag field
     * @param loraserverCoreId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public patchloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public patchloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public patchloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchloraserverCoreItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling patchloraserverCoreItem.');
        }

        if (loraserverCoreId === null || loraserverCoreId === undefined) {
            throw new Error('Required parameter loraserverCoreId was null or undefined when calling patchloraserverCoreItem.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/loraserver_core/${encodeURIComponent(String(loraserverCoreId))}`,
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
     * Stores one or more loraserver_core.
     * 
     * @param body A loraserver-core or list of loraserver-core documents
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postloraserverCore(body: LoraserverCore, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postloraserverCore(body: LoraserverCore, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postloraserverCore(body: LoraserverCore, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postloraserverCore(body: LoraserverCore, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postloraserverCore.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/loraserver_core`,
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
     * Replaces a loraserver-core document
     * 
     * @param body A loraserver-core or list of loraserver-core documents
     * @param ifMatch Current value of the _etag field
     * @param loraserverCoreId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putloraserverCoreItem(body: LoraserverCore, ifMatch: string, loraserverCoreId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putloraserverCoreItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling putloraserverCoreItem.');
        }

        if (loraserverCoreId === null || loraserverCoreId === undefined) {
            throw new Error('Required parameter loraserverCoreId was null or undefined when calling putloraserverCoreItem.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/loraserver_core/${encodeURIComponent(String(loraserverCoreId))}`,
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
