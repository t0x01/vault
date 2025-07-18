/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PoliciesListAclPolicies3Response
 */
export interface PoliciesListAclPolicies3Response {
    /**
     * 
     * @type {Array<string>}
     * @memberof PoliciesListAclPolicies3Response
     */
    keys?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PoliciesListAclPolicies3Response
     */
    policies?: Array<string>;
}

/**
 * Check if a given object implements the PoliciesListAclPolicies3Response interface.
 */
export function instanceOfPoliciesListAclPolicies3Response(value: object): value is PoliciesListAclPolicies3Response {
    return true;
}

export function PoliciesListAclPolicies3ResponseFromJSON(json: any): PoliciesListAclPolicies3Response {
    return PoliciesListAclPolicies3ResponseFromJSONTyped(json, false);
}

export function PoliciesListAclPolicies3ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliciesListAclPolicies3Response {
    if (json == null) {
        return json;
    }
    return {
        
        'keys': json['keys'] == null ? undefined : json['keys'],
        'policies': json['policies'] == null ? undefined : json['policies'],
    };
}

export function PoliciesListAclPolicies3ResponseToJSON(json: any): PoliciesListAclPolicies3Response {
    return PoliciesListAclPolicies3ResponseToJSONTyped(json, false);
}

export function PoliciesListAclPolicies3ResponseToJSONTyped(value?: PoliciesListAclPolicies3Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'keys': value['keys'],
        'policies': value['policies'],
    };
}

