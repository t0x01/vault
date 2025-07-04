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
 * @interface UserpassWriteUserRequest
 */
export interface UserpassWriteUserRequest {
    /**
     * Use "token_bound_cidrs" instead. If this and "token_bound_cidrs" are both specified, only "token_bound_cidrs" will be used.
     * @type {Array<string>}
     * @memberof UserpassWriteUserRequest
     * @deprecated
     */
    boundCidrs?: Array<string>;
    /**
     * Use "token_max_ttl" instead. If this and "token_max_ttl" are both specified, only "token_max_ttl" will be used.
     * @type {string}
     * @memberof UserpassWriteUserRequest
     * @deprecated
     */
    maxTtl?: string;
    /**
     * Password for this user.
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    password?: string;
    /**
     * Pre-hashed password in bcrypt format for this user.
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    passwordHash?: string;
    /**
     * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
     * @type {Array<string>}
     * @memberof UserpassWriteUserRequest
     * @deprecated
     */
    policies?: Array<string>;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof UserpassWriteUserRequest
     */
    tokenBoundCidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    tokenExplicitMaxTtl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    tokenMaxTtl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof UserpassWriteUserRequest
     */
    tokenNoDefaultPolicy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof UserpassWriteUserRequest
     */
    tokenNumUses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    tokenPeriod?: string;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof UserpassWriteUserRequest
     */
    tokenPolicies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    tokenTtl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof UserpassWriteUserRequest
     */
    tokenType?: string;
    /**
     * Use "token_ttl" instead. If this and "token_ttl" are both specified, only "token_ttl" will be used.
     * @type {string}
     * @memberof UserpassWriteUserRequest
     * @deprecated
     */
    ttl?: string;
}

/**
 * Check if a given object implements the UserpassWriteUserRequest interface.
 */
export function instanceOfUserpassWriteUserRequest(value: object): value is UserpassWriteUserRequest {
    return true;
}

export function UserpassWriteUserRequestFromJSON(json: any): UserpassWriteUserRequest {
    return UserpassWriteUserRequestFromJSONTyped(json, false);
}

export function UserpassWriteUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserpassWriteUserRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'boundCidrs': json['bound_cidrs'] == null ? undefined : json['bound_cidrs'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'password': json['password'] == null ? undefined : json['password'],
        'passwordHash': json['password_hash'] == null ? undefined : json['password_hash'],
        'policies': json['policies'] == null ? undefined : json['policies'],
        'tokenBoundCidrs': json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        'tokenExplicitMaxTtl': json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        'tokenMaxTtl': json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        'tokenNoDefaultPolicy': json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        'tokenNumUses': json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        'tokenPeriod': json['token_period'] == null ? undefined : json['token_period'],
        'tokenPolicies': json['token_policies'] == null ? undefined : json['token_policies'],
        'tokenTtl': json['token_ttl'] == null ? undefined : json['token_ttl'],
        'tokenType': json['token_type'] == null ? undefined : json['token_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function UserpassWriteUserRequestToJSON(json: any): UserpassWriteUserRequest {
    return UserpassWriteUserRequestToJSONTyped(json, false);
}

export function UserpassWriteUserRequestToJSONTyped(value?: UserpassWriteUserRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bound_cidrs': value['boundCidrs'],
        'max_ttl': value['maxTtl'],
        'password': value['password'],
        'password_hash': value['passwordHash'],
        'policies': value['policies'],
        'token_bound_cidrs': value['tokenBoundCidrs'],
        'token_explicit_max_ttl': value['tokenExplicitMaxTtl'],
        'token_max_ttl': value['tokenMaxTtl'],
        'token_no_default_policy': value['tokenNoDefaultPolicy'],
        'token_num_uses': value['tokenNumUses'],
        'token_period': value['tokenPeriod'],
        'token_policies': value['tokenPolicies'],
        'token_ttl': value['tokenTtl'],
        'token_type': value['tokenType'],
        'ttl': value['ttl'],
    };
}

