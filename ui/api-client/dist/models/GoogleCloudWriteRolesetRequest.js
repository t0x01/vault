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
exports.instanceOfGoogleCloudWriteRolesetRequest = instanceOfGoogleCloudWriteRolesetRequest;
exports.GoogleCloudWriteRolesetRequestFromJSON = GoogleCloudWriteRolesetRequestFromJSON;
exports.GoogleCloudWriteRolesetRequestFromJSONTyped = GoogleCloudWriteRolesetRequestFromJSONTyped;
exports.GoogleCloudWriteRolesetRequestToJSON = GoogleCloudWriteRolesetRequestToJSON;
exports.GoogleCloudWriteRolesetRequestToJSONTyped = GoogleCloudWriteRolesetRequestToJSONTyped;
/**
 * Check if a given object implements the GoogleCloudWriteRolesetRequest interface.
 */
function instanceOfGoogleCloudWriteRolesetRequest(value) {
    return true;
}
function GoogleCloudWriteRolesetRequestFromJSON(json) {
    return GoogleCloudWriteRolesetRequestFromJSONTyped(json, false);
}
function GoogleCloudWriteRolesetRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bindings': json['bindings'] == null ? undefined : json['bindings'],
        'project': json['project'] == null ? undefined : json['project'],
        'secretType': json['secret_type'] == null ? undefined : json['secret_type'],
        'tokenScopes': json['token_scopes'] == null ? undefined : json['token_scopes'],
    };
}
function GoogleCloudWriteRolesetRequestToJSON(json) {
    return GoogleCloudWriteRolesetRequestToJSONTyped(json, false);
}
function GoogleCloudWriteRolesetRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'bindings': value['bindings'],
        'project': value['project'],
        'secret_type': value['secretType'],
        'token_scopes': value['tokenScopes'],
    };
}
