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

import { Signup } from '../model/signup';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SignupService {

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
     * Deletes a signup document
     * 
     * @param signupId 
     * @param ifMatch Current value of the _etag field
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletesignupItem(signupId: string, ifMatch: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletesignupItem(signupId: string, ifMatch: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletesignupItem(signupId: string, ifMatch: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletesignupItem(signupId: string, ifMatch: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (signupId === null || signupId === undefined) {
            throw new Error('Required parameter signupId was null or undefined when calling deletesignupItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling deletesignupItem.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/signup/${encodeURIComponent(String(signupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a signup document
     * 
     * @param signupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getsignupItem(signupId: string, observe?: 'body', reportProgress?: boolean): Observable<Signup>;
    public getsignupItem(signupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Signup>>;
    public getsignupItem(signupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Signup>>;
    public getsignupItem(signupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (signupId === null || signupId === undefined) {
            throw new Error('Required parameter signupId was null or undefined when calling getsignupItem.');
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

        return this.httpClient.request<Signup>('get',`${this.basePath}/signup/${encodeURIComponent(String(signupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a signup document
     * 
     * @param body A signup document.
     * @param ifMatch Current value of the _etag field
     * @param signupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public patchsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public patchsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public patchsignupItem(body: Signup, ifMatch: string, signupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchsignupItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling patchsignupItem.');
        }

        if (signupId === null || signupId === undefined) {
            throw new Error('Required parameter signupId was null or undefined when calling patchsignupItem.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/signup/${encodeURIComponent(String(signupId))}`,
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
     * Stores one signup.
     * 
     * @param body A signup document.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postsignup(body: Signup, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postsignup(body: Signup, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postsignup(body: Signup, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postsignup(body: Signup, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postsignup.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/signup`,
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
     * Replaces a signup document
     * 
     * @param body A signup document.
     * @param ifMatch Current value of the _etag field
     * @param signupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putsignupItem(body: Signup, ifMatch: string, signupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putsignupItem(body: Signup, ifMatch: string, signupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putsignupItem.');
        }

        if (ifMatch === null || ifMatch === undefined) {
            throw new Error('Required parameter ifMatch was null or undefined when calling putsignupItem.');
        }

        if (signupId === null || signupId === undefined) {
            throw new Error('Required parameter signupId was null or undefined when calling putsignupItem.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/signup/${encodeURIComponent(String(signupId))}`,
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
