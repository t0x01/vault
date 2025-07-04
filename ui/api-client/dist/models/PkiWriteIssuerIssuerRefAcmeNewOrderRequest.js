"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPkiWriteIssuerIssuerRefAcmeNewOrderRequest = instanceOfPkiWriteIssuerIssuerRefAcmeNewOrderRequest;
exports.PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSON = PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSON;
exports.PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSONTyped = PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSONTyped;
exports.PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSON = PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSON;
exports.PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSONTyped = PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSONTyped;
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefAcmeNewOrderRequest interface.
 */
function instanceOfPkiWriteIssuerIssuerRefAcmeNewOrderRequest(value) {
    return true;
}
function PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefAcmeNewOrderRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}
function PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefAcmeNewOrderRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}
