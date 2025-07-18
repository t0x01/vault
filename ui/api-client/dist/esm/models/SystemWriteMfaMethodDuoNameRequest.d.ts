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
/**
 *
 * @export
 * @interface SystemWriteMfaMethodDuoNameRequest
 */
export interface SystemWriteMfaMethodDuoNameRequest {
    /**
     * API host name for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    apiHostname?: string;
    /**
     * Integration key for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    integrationKey?: string;
    /**
     * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    mountAccessor?: string;
    /**
     * Push information for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    pushInfo?: string;
    /**
     * Secret key for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    secretKey?: string;
    /**
     * If true, the user is reminded to use the passcode upon MFA validation. This option does not enforce using the passcode. Defaults to false.
     * @type {boolean}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    usePasscode?: boolean;
    /**
     * A format string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    usernameFormat?: string;
}
/**
 * Check if a given object implements the SystemWriteMfaMethodDuoNameRequest interface.
 */
export declare function instanceOfSystemWriteMfaMethodDuoNameRequest(value: object): value is SystemWriteMfaMethodDuoNameRequest;
export declare function SystemWriteMfaMethodDuoNameRequestFromJSON(json: any): SystemWriteMfaMethodDuoNameRequest;
export declare function SystemWriteMfaMethodDuoNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteMfaMethodDuoNameRequest;
export declare function SystemWriteMfaMethodDuoNameRequestToJSON(json: any): SystemWriteMfaMethodDuoNameRequest;
export declare function SystemWriteMfaMethodDuoNameRequestToJSONTyped(value?: SystemWriteMfaMethodDuoNameRequest | null, ignoreDiscriminator?: boolean): any;
