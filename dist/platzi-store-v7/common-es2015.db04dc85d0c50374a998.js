(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"f+7+":function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var u=e("fXoL"),o=e("AytR"),p=e("tk/3");let n=(()=>{class t{constructor(t){this.http=t}getAllProducts(){return this.http.get(`${o.a.url_api}/products`)}getProduct(t){return this.http.get(`${o.a.url_api}/products/${t}`)}createProduct(t){return this.http.post(`${o.a.url_api}/products`,t)}updateProduct(t,r){return this.http.put(`${o.a.url_api}/products/${t}`,r)}deleteProduct(t){return this.http.delete(`${o.a.url_api}/products/${t}`)}}return t.ngInjectableDef=u.Rb({token:t,factory:function(r){return new(r||t)(u.gc(p.a))},providedIn:"root"}),t})()}}]);