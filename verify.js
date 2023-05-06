// install jsrsasign module
const rs = require('jsrsasign');
// get cert string from jwks schema
// get public key
const pubkeyComplete = rs.KEYUTIL.getKey({jwkSchemaComplete:'someSchema'});
// check for isPublic
console.log("Is public?",pubkeyComplete.isPublic);
// generate accessToken, idToken
// verify JWT
const isValidAccessToken = rs.KJUR.jws.JWS.verifyJWT(accessToken,pubkeyComplete, {alg: ["RS256"]});
const isValidIdToken = rs.KJUR.jws.JWS.verifyJWT(idToken,pubkeyComplete, {alg: ["RS256"]});