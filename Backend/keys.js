module.exports = {
    OIDC: {
        clientID: '7ec49333-169e-4134-abea-bbfb0127a866',
        clientSecret: 'llt8Q~T2zh8RrLIOzqOYPR7rxhka_p1ypisuJbbd',
        tenantID: '850aa78d-94e1-4bc6-9cf3-8c11b530701c',
        identityMetadata: 'https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/v2.0/.well-known/openid-configuration',
        responseType: 'code id_token',
        responseMode: 'form_post',
        redirectUrl: 'http://localhost:5000/auth/outlook/callback',
        allowHttpForRedirectUrl: true,
        scope: ['openid',' profile', 'offline_access'],
        cookieEncryptionKeys: [ 
            { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
            { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
        ],
        validateIssuer: false,
        issuer: null,
        useCookieInsteadOfSession:true,
        loggingLevel: 'info',
        nonceLifetime: null,
        nonceMaxAmount: 5,
        clockSkew: null,
    },
    session: {
        cookieKey:'olxcloneisdone',
    },
    useMongoDBSessionStore: {
        useMongoDBSessionStore : true
    },
    destroySessionUrl: {
        destroySessionUrl:'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000/auth/login'
    }
}