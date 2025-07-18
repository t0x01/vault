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
exports.instanceOfRootTokenGenerationUpdateRequest = instanceOfRootTokenGenerationUpdateRequest;
exports.RootTokenGenerationUpdateRequestFromJSON = RootTokenGenerationUpdateRequestFromJSON;
exports.RootTokenGenerationUpdateRequestFromJSONTyped = RootTokenGenerationUpdateRequestFromJSONTyped;
exports.RootTokenGenerationUpdateRequestToJSON = RootTokenGenerationUpdateRequestToJSON;
exports.RootTokenGenerationUpdateRequestToJSONTyped = RootTokenGenerationUpdateRequestToJSONTyped;
/**
 * Check if a given object implements the RootTokenGenerationUpdateRequest interface.
 */
function instanceOfRootTokenGenerationUpdateRequest(value) {
    return true;
}
function RootTokenGenerationUpdateRequestFromJSON(json) {
    return RootTokenGenerationUpdateRequestFromJSONTyped(json, false);
}
function RootTokenGenerationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'key': json['key'] == null ? undefined : json['key'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
    };
}
function RootTokenGenerationUpdateRequestToJSON(json) {
    return RootTokenGenerationUpdateRequestToJSONTyped(json, false);
}
function RootTokenGenerationUpdateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key': value['key'],
        'nonce': value['nonce'],
    };
}
