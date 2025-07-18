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
 * Check if a given object implements the TerraformCloudWriteRoleRequest interface.
 */
export function instanceOfTerraformCloudWriteRoleRequest(value) {
    return true;
}
export function TerraformCloudWriteRoleRequestFromJSON(json) {
    return TerraformCloudWriteRoleRequestFromJSONTyped(json, false);
}
export function TerraformCloudWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'credentialType': json['credential_type'] == null ? undefined : json['credential_type'],
        'description': json['description'] == null ? undefined : json['description'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'teamId': json['team_id'] == null ? undefined : json['team_id'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}
export function TerraformCloudWriteRoleRequestToJSON(json) {
    return TerraformCloudWriteRoleRequestToJSONTyped(json, false);
}
export function TerraformCloudWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'credential_type': value['credentialType'],
        'description': value['description'],
        'max_ttl': value['maxTtl'],
        'organization': value['organization'],
        'team_id': value['teamId'],
        'ttl': value['ttl'],
        'user_id': value['userId'],
    };
}
