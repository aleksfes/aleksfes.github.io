"use strict";var precacheConfig=[["./index.html","efee19b1b1e289d2323f0927cd1aeab8"],["./static/css/main.cd237332.css","48e9a101b752fba2b0ab7abcfcce540f"],["./static/js/main.f4325099.js","993c9cf81352b8a83268dc396964bfe7"],["./static/media/dog_100.3773fa1b.png","3773fa1be951b2820500b727d12bfe96"],["./static/media/dog_101.3ddc99c3.png","3ddc99c3709397f82122144cd249c342"],["./static/media/dog_102.f9f0cc24.png","f9f0cc24274379bf861e425074042343"],["./static/media/dog_103.f20e9e8a.png","f20e9e8ae9e6951b9e9a5fff0c094470"],["./static/media/dog_104.5fbf63eb.png","5fbf63ebdc7109ae711237cdd9181a85"],["./static/media/dog_105.adcf4ff2.png","adcf4ff2d97655e5ed8d55e73cbd7545"],["./static/media/dog_106.0cf4afe1.png","0cf4afe1fa04105d7b16d5f82d1ef896"],["./static/media/dog_107.1a63bfa6.png","1a63bfa61424edb3ddce2e0cbead0431"],["./static/media/dog_108.7204871f.png","7204871f4e44a85e2e8b9fe58944193e"],["./static/media/dog_109.de4c28bc.png","de4c28bc637f32b2561409a62b9efa45"],["./static/media/dog_110.1cad4447.png","1cad44473b2de7e763fd003d5d8a5cb2"],["./static/media/dog_111.998d1208.png","998d12088c62720367d865dbbdeb9d16"],["./static/media/dog_112.5cb8b32b.png","5cb8b32b07ec51324d7fe3997a81aaea"],["./static/media/dog_113.1ccb13c7.png","1ccb13c7f3a1eba883cca7055e999aff"],["./static/media/dog_114.2eb7472b.png","2eb7472b6a3a54e1fbe8009bc96e4ffc"],["./static/media/dog_115.d8fa71e0.png","d8fa71e0b5cb465fe94e7f8b3874d7e8"],["./static/media/fox_100.58d1a958.png","58d1a958ada3f8840f2e8d1aaa6a031a"],["./static/media/fox_101.28a5a163.png","28a5a16372c1da5b56469b3b36245e5c"],["./static/media/fox_102.fda29d30.png","fda29d30e35a9a2085d899c29440df01"],["./static/media/fox_103.d8b72d6b.png","d8b72d6bf136e5aeca3a045777d8f879"],["./static/media/fox_104.36c46559.png","36c46559db37b8108e663bfd6a316dc8"],["./static/media/fox_105.13dede44.png","13dede441332fd469eee70d973414e07"],["./static/media/fox_106.41bb7927.png","41bb7927e3a502b4c48b24f237cfc789"],["./static/media/fox_107.fa461afe.png","fa461afee12498ea3b7f2d3d76d51f53"],["./static/media/fox_108.bd26ba39.png","bd26ba392320846b1aa852e3cb853675"],["./static/media/fox_109.7caed4fe.png","7caed4fec1aa0bebb956e2178601cfe5"],["./static/media/fox_110.7e775a0f.png","7e775a0f73baa666f62732e3a8b1a439"],["./static/media/fox_111.e3b75e80.png","e3b75e8010e3be1016dca1bc3fe52a2f"],["./static/media/fox_112.e8babe75.png","e8babe75ea020b294605870c14bb455c"],["./static/media/fox_113.b875108e.png","b875108e2157c57c0b8b930a097b638c"],["./static/media/fox_114.172c9aa3.png","172c9aa3348b18cb182adb7249ec8450"],["./static/media/fox_115.646d522a.png","646d522af89cfb9f16635e50028e36bc"],["./static/media/fox_116.3c3d02c7.png","3c3d02c70cd71304842f97d5f409c47b"],["./static/media/fox_117.d18fb309.png","d18fb309e5922ad46f05da59fe33e5bb"],["./static/media/fox_118.ae69727c.png","ae69727c08c86e5c345403dc11a6b8b9"],["./static/media/fox_119.888c18a4.png","888c18a42f95334b1b30cf0603efcef2"],["./static/media/oklogo.94e7dd42.svg","94e7dd4218fa8a09cfabc9fbc9d4a2b9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});