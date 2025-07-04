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
 * @interface PkiReadCaPemResponse
 */
export interface PkiReadCaPemResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCaPemResponse
     */
    caChain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCaPemResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCaPemResponse
     */
    issuerId?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCaPemResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCaPemResponse
     */
    revocationTimeRfc3339?: string;
}
/**
 * Check if a given object implements the PkiReadCaPemResponse interface.
 */
export declare function instanceOfPkiReadCaPemResponse(value: object): value is PkiReadCaPemResponse;
export declare function PkiReadCaPemResponseFromJSON(json: any): PkiReadCaPemResponse;
export declare function PkiReadCaPemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCaPemResponse;
export declare function PkiReadCaPemResponseToJSON(json: any): PkiReadCaPemResponse;
export declare function PkiReadCaPemResponseToJSONTyped(value?: PkiReadCaPemResponse | null, ignoreDiscriminator?: boolean): any;
