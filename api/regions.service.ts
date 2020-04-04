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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InlineResponse2009 } from '../model/inlineResponse2009';
import { Regions } from '../model/regions';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RegionsService {

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
     * Deletes a regions document
     * 
     * @param regionsId 
     * @param ifMatch Current value of the _etag field
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteregionsItem(regionsId: string, ifMatch: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteregionsItem(regionsId: string, ifMatch: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteregionsItem(regionsId: string, ifMatch: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteregionsItem(regionsId: string, ifMatch: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (regionsId === null || regionsId === undefined) {
            throw new Error('Required parameter regionsId was null or undefined when calling deleteregionsItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling deleteregionsItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<any>('delete',`${this.basePath}/regions/${encodeURIComponent(String(regionsId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves one or more regions
     * 
     * @param where the filters query parameter (ex.: {\&quot;number\&quot;: 10})
     * @param sort the sort query parameter (ex.: \&quot;city,-lastname\&quot;)
     * @param page the pages query parameter
     * @param maxResults the max results query parameter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getregions(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2009>;
    public getregions(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2009>>;
    public getregions(where?: string, sort?: string, page?: number, maxResults?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2009>>;
    public getregions(where?: string, sort?: string, page?: number, maxResults?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





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
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<InlineResponse2009>('get',`${this.basePath}/regions`,
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
     * Retrieves a regions document
     * 
     * @param regionsId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getregionsItem(regionsId: string, observe?: 'body', reportProgress?: boolean): Observable<Regions>;
    public getregionsItem(regionsId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Regions>>;
    public getregionsItem(regionsId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Regions>>;
    public getregionsItem(regionsId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (regionsId === null || regionsId === undefined) {
            throw new Error('Required parameter regionsId was null or undefined when calling getregionsItem.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<Regions>('get',`${this.basePath}/regions/${encodeURIComponent(String(regionsId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a regions document
     * 
     * @param body A regions or list of regions documents
     * @param ifMatch Current value of the _etag field
     * @param regionsId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public patchregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public patchregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public patchregionsItem(body: Regions, ifMatch: string, regionsId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchregionsItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling patchregionsItem.');
        }

        if (regionsId === null || regionsId === undefined) {
            throw new Error('Required parameter regionsId was null or undefined when calling patchregionsItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<any>('patch',`${this.basePath}/regions/${encodeURIComponent(String(regionsId))}`,
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
     * Stores one or more regions.
     * 
     * @param body A regions or list of regions documents
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postregions(body: Regions, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postregions(body: Regions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postregions(body: Regions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postregions(body: Regions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postregions.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<any>('post',`${this.basePath}/regions`,
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
     * Replaces a regions document
     * 
     * @param body A regions or list of regions documents
     * @param ifMatch Current value of the _etag field
     * @param regionsId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putregionsItem(body: Regions, ifMatch: string, regionsId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putregionsItem(body: Regions, ifMatch: string, regionsId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putregionsItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling putregionsItem.');
        }

        if (regionsId === null || regionsId === undefined) {
            throw new Error('Required parameter regionsId was null or undefined when calling putregionsItem.');
        }

        let headers = this.defaultHeaders;
        if (ifMatch !== undefined && ifMatch !== null) {
            headers = headers.set('If-Match', String(ifMatch));
        }

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["X-Api-Key"]) {
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

        return this.httpClient.request<any>('put',`${this.basePath}/regions/${encodeURIComponent(String(regionsId))}`,
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