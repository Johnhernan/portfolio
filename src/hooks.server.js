import {error} from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const {headers, method} = event.request;
    console.log(Object.assign(headers))
    const contentType = headers.get('content-type');
    console.log(contentType, method)
    if (
        (!contentType && method !== 'GET') &&
        !contentType.startsWith('application/json') &&
        !contentType.startsWith('application/x-www-form-urlencoded')
    ) {
        return error(403, {message: "This action is not permitted"});
    }

    const response = await resolve(event);
    setHeaders(response);

    return response;
}

/** @type {import('@sveltejs/kit').Handle} */
export async function reroute(event) {


}


function setHeaders(response) {
    // Global headers
    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('Accept', 'application/x-www-form-urlencoded, application/json, text/plain');
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.headers.set(
        'Content-Security-Policy',
        'default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data:;'
    );
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('X-Content-Type-Options', 'nosniff');

}