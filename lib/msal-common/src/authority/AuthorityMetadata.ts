/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Logger } from "../logger/Logger";
import { UrlString } from "../url/UrlString";
import { AuthorityMetadataSource } from "../utils/Constants";
import { StaticAuthorityOptions } from "./AuthorityOptions";
import { CloudDiscoveryMetadata } from "./CloudDiscoveryMetadata";

export const rawMetdataJSON = {
    endpointMetadata: {
        "https://login.microsoftonline.com/common/": {
            token_endpoint:
                "https://login.microsoftonline.com/common/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.com/common/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.com/common/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.com/common/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.com",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pas.windows.net",
        },
        "https://login.chinacloudapi.cn/common/": {
            token_endpoint:
                "https://login.chinacloudapi.cn/common/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.chinacloudapi.cn/common/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint:
                "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo",
            authorization_endpoint:
                "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "partner.microsoftonline.cn",
            cloud_graph_host_name: "graph.chinacloudapi.cn",
            msgraph_host: "microsoftgraph.chinacloudapi.cn",
            rbac_url: "https://pas.chinacloudapi.cn",
        },
        "https://login.microsoftonline.us/common/": {
            token_endpoint:
                "https://login.microsoftonline.us/common/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.us/common/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.us/common/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.us/common/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.us/common/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.us",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pasff.usgovcloudapi.net",
        },
        "https://login.microsoftonline.com/consumers/": {
            token_endpoint:
                "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.com/consumers/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.com/consumers/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.com",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pas.windows.net",
        },
        "https://login.chinacloudapi.cn/consumers/": {
            token_endpoint:
                "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint:
                "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo",
            authorization_endpoint:
                "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.chinacloudapi.cn/consumers/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "partner.microsoftonline.cn",
            cloud_graph_host_name: "graph.chinacloudapi.cn",
            msgraph_host: "microsoftgraph.chinacloudapi.cn",
            rbac_url: "https://pas.chinacloudapi.cn",
        },
        "https://login.microsoftonline.us/consumers/": {
            token_endpoint:
                "https://login.microsoftonline.us/consumers/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.us/consumers/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.us/consumers/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.us",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pasff.usgovcloudapi.net",
        },
        "https://login.microsoftonline.com/organizations/": {
            token_endpoint:
                "https://login.microsoftonline.com/organizations/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.com/organizations/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.com/organizations/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.com",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pas.windows.net",
        },
        "https://login.chinacloudapi.cn/organizations/": {
            token_endpoint:
                "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint:
                "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo",
            authorization_endpoint:
                "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.chinacloudapi.cn/organizations/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "partner.microsoftonline.cn",
            cloud_graph_host_name: "graph.chinacloudapi.cn",
            msgraph_host: "microsoftgraph.chinacloudapi.cn",
            rbac_url: "https://pas.chinacloudapi.cn",
        },
        "https://login.microsoftonline.us/organizations/": {
            token_endpoint:
                "https://login.microsoftonline.us/organizations/oauth2/v2.0/token",
            token_endpoint_auth_methods_supported: [
                "client_secret_post",
                "private_key_jwt",
                "client_secret_basic",
            ],
            jwks_uri:
                "https://login.microsoftonline.us/organizations/discovery/v2.0/keys",
            response_modes_supported: ["query", "fragment", "form_post"],
            subject_types_supported: ["pairwise"],
            id_token_signing_alg_values_supported: ["RS256"],
            response_types_supported: [
                "code",
                "id_token",
                "code id_token",
                "id_token token",
            ],
            scopes_supported: ["openid", "profile", "email", "offline_access"],
            issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
            request_uri_parameter_supported: false,
            userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo",
            authorization_endpoint:
                "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize",
            device_authorization_endpoint:
                "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode",
            http_logout_supported: true,
            frontchannel_logout_supported: true,
            end_session_endpoint:
                "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout",
            claims_supported: [
                "sub",
                "iss",
                "cloud_instance_name",
                "cloud_instance_host_name",
                "cloud_graph_host_name",
                "msgraph_host",
                "aud",
                "exp",
                "iat",
                "auth_time",
                "acr",
                "nonce",
                "preferred_username",
                "name",
                "tid",
                "ver",
                "at_hash",
                "c_hash",
                "email",
            ],
            kerberos_endpoint:
                "https://login.microsoftonline.us/organizations/kerberos",
            tenant_region_scope: null,
            cloud_instance_name: "microsoftonline.us",
            cloud_graph_host_name: "graph.windows.net",
            msgraph_host: "graph.microsoft.com",
            rbac_url: "https://pasff.usgovcloudapi.net",
        },
    },
    instanceDiscoveryMetadata: {
        tenant_discovery_endpoint:
            "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration",
        "api-version": "1.1",
        metadata: [
            {
                preferred_network: "login.microsoftonline.com",
                preferred_cache: "login.windows.net",
                aliases: [
                    "login.microsoftonline.com",
                    "login.windows.net",
                    "login.microsoft.com",
                    "sts.windows.net",
                ],
            },
            {
                preferred_network: "login.partner.microsoftonline.cn",
                preferred_cache: "login.partner.microsoftonline.cn",
                aliases: [
                    "login.partner.microsoftonline.cn",
                    "login.chinacloudapi.cn",
                ],
            },
            {
                preferred_network: "login.microsoftonline.de",
                preferred_cache: "login.microsoftonline.de",
                aliases: ["login.microsoftonline.de"],
            },
            {
                preferred_network: "login.microsoftonline.us",
                preferred_cache: "login.microsoftonline.us",
                aliases: [
                    "login.microsoftonline.us",
                    "login.usgovcloudapi.net",
                ],
            },
            {
                preferred_network: "login-us.microsoftonline.com",
                preferred_cache: "login-us.microsoftonline.com",
                aliases: ["login-us.microsoftonline.com"],
            },
        ],
    },
};

export const EndpointMetadata = rawMetdataJSON.endpointMetadata;
export const InstanceDiscoveryMetadata =
    rawMetdataJSON.instanceDiscoveryMetadata;

export const InstanceDiscoveryMetadataAliases: Set<String> = new Set();
InstanceDiscoveryMetadata.metadata.forEach(
    (metadataEntry: CloudDiscoveryMetadata) => {
        metadataEntry.aliases.forEach((alias: string) => {
            InstanceDiscoveryMetadataAliases.add(alias);
        });
    }
);

/**
 * Attempts to get an aliases array from the static authority metadata sources based on the canonical authority host
 * @param staticAuthorityOptions
 * @param logger
 * @returns
 */
export function getAliasesFromStaticSources(
    staticAuthorityOptions: StaticAuthorityOptions,
    logger?: Logger
): string[] {
    let staticAliases: string[] | undefined;
    const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
    if (canonicalAuthority) {
        const authorityHost = new UrlString(
            canonicalAuthority
        ).getUrlComponents().HostNameAndPort;
        staticAliases =
            getAliasesFromMetadata(
                authorityHost,
                staticAuthorityOptions.cloudDiscoveryMetadata?.metadata,
                AuthorityMetadataSource.CONFIG,
                logger
            ) ||
            getAliasesFromMetadata(
                authorityHost,
                InstanceDiscoveryMetadata.metadata,
                AuthorityMetadataSource.HARDCODED_VALUES,
                logger
            ) ||
            staticAuthorityOptions.knownAuthorities;
    }

    return staticAliases || [];
}

/**
 * Returns aliases for from the raw cloud discovery metadata passed in
 * @param authorityHost
 * @param rawCloudDiscoveryMetadata
 * @returns
 */
export function getAliasesFromMetadata(
    authorityHost?: string,
    cloudDiscoveryMetadata?: CloudDiscoveryMetadata[],
    source?: AuthorityMetadataSource,
    logger?: Logger
): string[] | null {
    logger?.trace(`getAliasesFromMetadata called with source: ${source}`);
    if (authorityHost && cloudDiscoveryMetadata) {
        const metadata = getCloudDiscoveryMetadataFromNetworkResponse(
            cloudDiscoveryMetadata,
            authorityHost
        );

        if (metadata) {
            logger?.trace(
                `getAliasesFromMetadata: found cloud discovery metadata in ${source}, returning aliases`
            );
            return metadata.aliases;
        } else {
            logger?.trace(
                `getAliasesFromMetadata: did not find cloud discovery metadata in ${source}`
            );
        }
    }

    return null;
}

/**
 * Get cloud discovery metadata for common authorities
 */
export function getCloudDiscoveryMetadataFromHardcodedValues(
    authorityHost: string
): CloudDiscoveryMetadata | null {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(
        InstanceDiscoveryMetadata.metadata,
        authorityHost
    );
    return metadata;
}

/**
 * Searches instance discovery network response for the entry that contains the host in the aliases list
 * @param response
 * @param authority
 */
export function getCloudDiscoveryMetadataFromNetworkResponse(
    response: CloudDiscoveryMetadata[],
    authorityHost: string
): CloudDiscoveryMetadata | null {
    for (let i = 0; i < response.length; i++) {
        const metadata = response[i];
        if (metadata.aliases.includes(authorityHost)) {
            return metadata;
        }
    }

    return null;
}
