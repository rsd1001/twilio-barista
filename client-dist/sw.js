"use strict";function setOfCachedUrls(s){return s.keys().then(function(s){return s.map(function(s){return s.url})}).then(function(s){return new Set(s)})}var precacheConfig=[["/assets/.DS_Store","4653b08e73b2ecc2f6441b59645ab714"],["/assets/barista-icons/barista-icons_aeropress.svg","eabe318d3a849ebad5488e663b9dfd39"],["/assets/barista-icons/barista-icons_americano-alternative.svg","be07012798e90fe5239884750f4de92d"],["/assets/barista-icons/barista-icons_americano.svg","b1f3a2109259a37bd1050e261b2d22ee"],["/assets/barista-icons/barista-icons_cafe-latte.svg","4596e96fd6fa52a42de47d5116c4f341"],["/assets/barista-icons/barista-icons_cappuccino-alternative.svg","0643853bfed74edabb603841eb10ac45"],["/assets/barista-icons/barista-icons_cappuccino.svg","073d6f629f0c20fe16b03d0dd9fe1d03"],["/assets/barista-icons/barista-icons_carafe-with-filter-coffee.svg","cf55be4c2e6b8d2a78d39ce2f9225954"],["/assets/barista-icons/barista-icons_chemex.svg","2b5bcdc768d47f2d0147ccfcc43b3ee8"],["/assets/barista-icons/barista-icons_coffea-arabica.svg","eb449aaa53a78b2f9895ca2ccbf066b1"],["/assets/barista-icons/barista-icons_coffee-bean-alternative.svg","c551b5e0f73ede31cc4f4954b2810203"],["/assets/barista-icons/barista-icons_coffee-bean.svg","104bcb14b5d08caedcb4a57a5afca96e"],["/assets/barista-icons/barista-icons_coffee-filter.svg","9d64513ddb7209492284d0a865374006"],["/assets/barista-icons/barista-icons_coffee-grinder-alternative.svg","3ac21fd24c3e800e3e50c06a54dc3f8a"],["/assets/barista-icons/barista-icons_coffee-grinder-machine.svg","73e03e4e37f59f91f3d0cfe280f46ce7"],["/assets/barista-icons/barista-icons_coffee-grinder.svg","a87deb51a9208fa3edecb67411c1f283"],["/assets/barista-icons/barista-icons_coffee-pad.svg","97db467f0103ddb4ad9a413af7ef2e5f"],["/assets/barista-icons/barista-icons_coffee-pads-pile.svg","4e7feb3040f127def588bd5ce1eefe14"],["/assets/barista-icons/barista-icons_coffee-shop-sign.svg","52d5c2f92dd2f3d8a125662ac78c5b65"],["/assets/barista-icons/barista-icons_coffee-to-go.svg","34798f4f3ff2860cca40cb154f1e5268"],["/assets/barista-icons/barista-icons_coffeepot.svg","7967f4dad02f86fb557f491569509039"],["/assets/barista-icons/barista-icons_cortado.svg","f4aa596e59d520148b7fea3325f92104"],["/assets/barista-icons/barista-icons_cup-of-coffee.svg","a1a31feb68d4118a1938d4b418db781c"],["/assets/barista-icons/barista-icons_espresso-alternative.svg","f385dd704f4d281f787eb7c10b089fb2"],["/assets/barista-icons/barista-icons_espresso-doppio.svg","57ad51d0b05341b6afc5509d0f0a77f2"],["/assets/barista-icons/barista-icons_espresso-macchiato-alternative.svg","b24d94e1b4e1fe9c5014ae5b0b5b863e"],["/assets/barista-icons/barista-icons_espresso-macchiato.svg","1b87a41998485cb9c498a1a26df39718"],["/assets/barista-icons/barista-icons_espresso-machine-alternative.svg","f6b9e02dc541773a6dcb4edb9c78b57a"],["/assets/barista-icons/barista-icons_espresso-machine.svg","dfcf9ab228957af5f9f3dc3e86a4ab43"],["/assets/barista-icons/barista-icons_espresso-maker.svg","c3104a79efab8905c7e8cd8cd509c338"],["/assets/barista-icons/barista-icons_espresso-milk-foam.svg","7dd84990734f22df087a53e60776f812"],["/assets/barista-icons/barista-icons_espresso.svg","85fa5be4f623751c929867ee7a69a447"],["/assets/barista-icons/barista-icons_filter-coffee-maker.svg","eab136239d99637b8568bd5d064e83fc"],["/assets/barista-icons/barista-icons_filtercone.svg","410ed0fceb69ef18e651363588e49a8c"],["/assets/barista-icons/barista-icons_flat-white-alternative.svg","50ff78cf4094e1605d198b59bfb5360e"],["/assets/barista-icons/barista-icons_flat-white.svg","821d78c8490a4ef37ce2d783cb7754b9"],["/assets/barista-icons/barista-icons_frappuccino-milk-shake.svg","cd43584675436ef712e13b4d601ce2a7"],["/assets/barista-icons/barista-icons_french-press.svg","5071aa86fe7fec074246c124bc2fd6e8"],["/assets/barista-icons/barista-icons_jar-of-ground-coffee.svg","ec76eb90bbbb9aa54970d50e97c59069"],["/assets/barista-icons/barista-icons_latte-macchiato.svg","08d031243f8a3c77379ba33b0c6d27ee"],["/assets/barista-icons/barista-icons_milk-bottle-glass.svg","37628c39b4c99950263d40505e48f1a6"],["/assets/barista-icons/barista-icons_milk-bottle-plastic.svg","5578a936d2a83a240ab2f7975e64a64f"],["/assets/barista-icons/barista-icons_milk-jug.svg","2089ae9fc9222c54f9fe71ce68097edb"],["/assets/barista-icons/barista-icons_milk-package.svg","3b5b5df09eebbaa9f8778e92fed63469"],["/assets/barista-icons/barista-icons_moccacino.svg","9a0d0c006ab1fc1d88d26cd2627b0d72"],["/assets/barista-icons/barista-icons_modern-coffee-grinder.svg","20b38795dd1f9c59bfcab0ace93cb6d9"],["/assets/barista-icons/barista-icons_pilsener.svg","d4e7ea54e53f457131371211190a5ef0"],["/assets/barista-icons/barista-icons_portafilter-with-tamper.svg","c7686c403e2fd6a3eb3b8dae382c3149"],["/assets/barista-icons/barista-icons_portafilter.svg","0479753224e9d39f1223262f15c3fee4"],["/assets/barista-icons/barista-icons_red-wine.svg","f2cab8fa3de789aa1a8dd466362f5fb2"],["/assets/barista-icons/barista-icons_syphon-coffee-maker-alternative.svg","9c7e8c77aab2d33b0417d3eb05180d9b"],["/assets/barista-icons/barista-icons_syphon-coffee-maker.svg","d3aa3204e34b80e904acd6a35758d1ef"],["/assets/barista-icons/barista-icons_tamper.svg","92c1b98c23e33e0a66e9fc370f466658"],["/assets/barista-icons/barista-icons_white-wine.svg","0973edb64eeb3d937fda0c43044f278a"],["/assets/favicon.ico","a2b599a2f0ba424f05f0b9514d36ac15"],["/assets/icons/android-chrome-192x192.png","489727500d44421cff5530c51d9ea6e6"],["/assets/icons/android-chrome-512x512.png","e10481a7c5c510dd2cc95b6312d00e4c"],["/assets/icons/apple-touch-icon.png","e6a875274e167dd2ebf56c1aa41d6c17"],["/assets/icons/favicon-16x16.png","ea308686934f98b14fe7b2963afdbd86"],["/assets/icons/favicon-32x32.png","a3262637fb2ca2d7c08037c468f7b66b"],["/assets/icons/mstile-150x150.png","da50ae3ee3fc6460c1b132a016604e0a"],["/bundle.ca1df.js","fb3fba90ca6f7d959e2e67b5eb99cd1b"],["/debug.7e4e7.js","620c71ec7f46430fc7db537d5e80628e"],["/favicon.ico","a2b599a2f0ba424f05f0b9514d36ac15"],["/index.html","3d36dbdd4d60f39d19c4411d01344af5"],["/manifest.json","a49a91d845c9bd58f013652b48639135"],["/route-admin.chunk.ca5cf.js","371bd47f1b4b81bc85c225c79664ada9"],["/route-dashboard.chunk.fc9a5.js","7d4d181c6a99dddbd30e3463dc19c47b"],["/route-home.chunk.3f95c.js","338c2b781e8bd8d05c5799d2a5f033f3"],["/route-kiosk.chunk.3c95c.js","5f8a9eb85a194904bc96435e1fa474e9"],["/route-orders.chunk.44bc7.js","a54565d637ba51c5c2778a0d05e1c908"],["/style.e00ef.css","ddb927baa80197f856bbad6650dd6afb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(s,a){var e=new URL(s);return"/"===e.pathname.slice(-1)&&(e.pathname+=a),e.toString()},cleanResponse=function(s){return s.redirected?("body"in s?Promise.resolve(s.body):s.blob()).then(function(a){return new Response(a,{headers:s.headers,status:s.status,statusText:s.statusText})}):Promise.resolve(s)},createCacheKey=function(s,a,e,c){var t=new URL(s);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(e)),t.toString()},isPathWhitelisted=function(s,a){if(0===s.length)return!0;var e=new URL(a).pathname;return s.some(function(s){return e.match(s)})},stripIgnoredUrlParameters=function(s,a){var e=new URL(s);return e.hash="",e.search=e.search.slice(1).split("&").map(function(s){return s.split("=")}).filter(function(s){return a.every(function(a){return!a.test(s[0])})}).map(function(s){return s.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(s){var a=s[0],e=s[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,e,!1);return[c.toString(),t]}));self.addEventListener("install",function(s){s.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!a.has(e)){var c=new Request(e,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return s.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(s){var a=new Set(urlsToCacheKeys.values());s.waitUntil(caches.open(cacheName).then(function(s){return s.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return s.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(s){if("GET"===s.request.method){var a,e=stripIgnoredUrlParameters(s.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(e))||(e=addDirectoryIndex(e,"index.html"),a=urlsToCacheKeys.has(e));!a&&"navigate"===s.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],s.request.url)&&(e=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(e)),a&&s.respondWith(caches.open(cacheName).then(function(s){return s.match(urlsToCacheKeys.get(e)).then(function(s){if(s)return s;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',s.request.url,a),fetch(s.request)}))}});