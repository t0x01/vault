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
/**
 * Check if a given object implements the SystemWriteNamespacesApiLockUnlockRequest interface.
 */
export function instanceOfSystemWriteNamespacesApiLockUnlockRequest(value) {
    return true;
}
export function SystemWriteNamespacesApiLockUnlockRequestFromJSON(json) {
    return SystemWriteNamespacesApiLockUnlockRequestFromJSONTyped(json, false);
}
export function SystemWriteNamespacesApiLockUnlockRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'unlockKey': json['unlock_key'] == null ? undefined : json['unlock_key'],
    };
}
export function SystemWriteNamespacesApiLockUnlockRequestToJSON(json) {
    return SystemWriteNamespacesApiLockUnlockRequestToJSONTyped(json, false);
}
export function SystemWriteNamespacesApiLockUnlockRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'unlock_key': value['unlockKey'],
    };
}
