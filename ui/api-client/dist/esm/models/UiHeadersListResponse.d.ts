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
 * @interface UiHeadersListResponse
 */
export interface UiHeadersListResponse {
    /**
     * Lists of configured UI headers. Omitted if list is empty
     * @type {Array<string>}
     * @memberof UiHeadersListResponse
     */
    keys?: Array<string>;
}
/**
 * Check if a given object implements the UiHeadersListResponse interface.
 */
export declare function instanceOfUiHeadersListResponse(value: object): value is UiHeadersListResponse;
export declare function UiHeadersListResponseFromJSON(json: any): UiHeadersListResponse;
export declare function UiHeadersListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiHeadersListResponse;
export declare function UiHeadersListResponseToJSON(json: any): UiHeadersListResponse;
export declare function UiHeadersListResponseToJSONTyped(value?: UiHeadersListResponse | null, ignoreDiscriminator?: boolean): any;
