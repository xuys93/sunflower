(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./examples/sunflower-antd-form-table/request.js":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=t("./node_modules/mockjs/dist/mock.js"),r=t.n(o).a.mock(Object(a.a)({},"list|".concat(200),[{username:"@name",email:"@email",id:"@guid"}]));function s(e,n,t){return t?e.filter(function(e){return e[n].toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}):e}n.default=function(e){var n=e.username,t=e.email,a=e.pageSize,o=e.currentPage;console.log("username: %s, pageSize: %s, currentPage: %s",n,a,o);var i=a*(o-1),u=i+a,l=r.list;l=s(l,"username",n);var c=(l=s(l,"email",t)).slice(i,u);return new Promise(function(e){return setTimeout(function(){e({list:c,total:l.length})},300)})}}}]);