
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [];

workbox.precaching.suppressWarnings();

/**
 * Using WorkBoxes to manually cache XHR response over network either and if 
 * offline bringing it from cache
*/

/**
 * A "route" in workbox is nothing more than two functions: 
 * a “matching” function to determine if the route should match a request and 
 * a “handling” function, which should handle the request and respond with a Response.

Workbox comes with some helpers that’ll perform the matching and handling for you, 
but if you ever find yourself wanting different behaviour, writing a custom match and handler function is the best option.
A match function will be given a FetchEvent and a URL object and you can match against 
a request by returning a truthy value. For a simple example, you could match against 
a specific URL like so:
 */

const matcher = ({ url, event }) => {
    return (url.pathname === '/special/url');
};

/**
 * A "handler" will be given the url and event as well and you can determine how to respond, 
 * whether it’s from the network, from the cache or generated in the service worker.
 */

const handler = ({ url, event, params }) => {
    return fetch(event.request)
        .then((response) => {
            return response.text();
        })
        .then((responseBody) => {
            return new Response(`${responseBody}`);
        });
};

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    (context) => {
        if (context.event.request.destination === 'document') {
            return true;
        }
        return null;
    },
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    /.*(?:googleapis|gstatic|google-analytics)\.com/,
    workbox.strategies.networkOnly(),
);

workbox.routing.registerRoute(
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'css-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Only cache requests for a week
                maxAgeSeconds: 1 * 24 * 60 * 60,
                // Only cache 10 requests.
                maxEntries: 10,
            }),
        ]
    })
);


workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg)/,
    workbox.strategies.cacheFirst({
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    }),
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'js.cache',
        networkTimeoutSeconds: 4,
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
                purgeOnQuotaError: true,
            })
        ]
    })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
