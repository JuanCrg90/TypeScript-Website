(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[531],{9532:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(2784),r=a(7480),l=a(4345),s=a(8447),c=a(653),i=JSON.parse('{"_generated by":"node packages/typescriptlang-org/scripts/getTypeScriptReleaseInfo.js","upcoming_version":"4.4","iteration_plan_url":"https://github.com/microsoft/TypeScript/issues/44237","last_release_date":"2021-05-24T23:00:00.000Z","upcoming_beta_date":"2021-06-28T23:00:00.000Z","upcoming_rc_date":"2021-08-09T23:00:00.000Z","upcoming_release_date":"2021-08-23T23:00:00.000Z"}'),o=a(357),m=a(876),u=function(){var e=(0,m.Z)(),t=(0,o.D)(e),a=new Date(i.last_release_date),r=new Date(i.upcoming_beta_date),l=new Date(i.upcoming_rc_date),u=new Date(i.upcoming_release_date),p=new Date;!function(e,t,a,n){if(!(e&&t&&a&&n)){var r=[{name:"startDate",date:e},{name:"betaDate",date:t},{name:"rcDate",date:a},{name:"releaseDate",date:i}].filter((function(e){return e instanceof Date}));throw new Error("Dates in release-plan.json can't be converted into JS dates: "+r.join(" - "))}}(a,r,l,u);var d=864e5,h=Math.round(Math.abs((+a-+u)/d)),_=Math.round(Math.abs((+a-+r)/d)),v=Math.round(Math.abs((+a-+l)/d)),f=Math.round(Math.abs((+a-+p)/d)),E=-1;if(f>h||f<0);else if(f<_){E=f/_*.55*100}else if(f<v){E=f/v*.28*100+55}else{E=f/h*.17*100+83}var g=e.formatDateToParts(a,{month:"short",day:"numeric"}),b=e.formatDateToParts(r,{month:"short",day:"numeric"}),y=e.formatDateToParts(l,{month:"short",day:"numeric"}),D=e.formatDateToParts(u,{month:"short",day:"numeric"}),N=n.createElement("a",{href:i.iteration_plan_url},i.upcoming_version),M=n.createElement("a",{href:(0,s.withPrefix)(c.Lz)},t("index_releases_released")),T=c.hN?n.createElement("a",{href:c.ih},t("index_releases_beta")):n.createElement("span",null,t("index_releases_beta")),w=c.Pg?n.createElement("a",{href:c.ZM},t("index_releases_rc")):n.createElement("span",null,t("index_releases_rc"));return n.createElement("div",{className:"grey-box last"},n.createElement("p",null,t("index_releases_pt1")," ",N,t("index_releases_pt2")," ",D.map((function(e){return e.value})).join("")),n.createElement("div",{className:"release-info"},n.createElement("div",{className:"needle",style:{left:E+"%",display:-1===E?"none":"block"}}),n.createElement("div",{className:"needle-head",style:{left:E+"%",display:-1===E?"none":"block"}}),n.createElement("div",{className:"release"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,c.pJ.FA," ",M,n.createElement("br",null),g.map((function(e){return e.value})).join(""))),n.createElement("div",{className:"beta"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,i.upcoming_version," ",T,n.createElement("br",null),b.map((function(e){return e.value})).join(""))),n.createElement("div",{className:"rc"},n.createElement("div",null,n.createElement("div",{className:"separator"}),n.createElement("div",{className:"bar"})),n.createElement("p",null,i.upcoming_version," ",w,n.createElement("br",null),y.map((function(e){return e.value})).join("")))))};var p=function(e){var t=(0,m.Z)(),a=new Date,l=new Date(i.last_release_date),s=new Date(i.upcoming_beta_date),c=new Date(i.upcoming_rc_date),o=new Date(i.upcoming_release_date),p=864e5,d=Math.round(Math.abs((+l-+o)/p)),h=Math.round(Math.abs((+l-+s)/p)),_=Math.round(Math.abs((+l-+c)/p)),v=Math.round(Math.abs((+l-+a)/p)),f=t.formatDateToParts(s,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),E=t.formatDateToParts(c,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),g=t.formatDateToParts(o,{month:"short",day:"numeric"}).map((function(e){return e.value})).join(""),b="Up next: "+(v>d||v<0?"Preparing details for the next release":v<h?i.upcoming_version+" Beta on "+f:v<_?i.upcoming_version+" RC on "+E:i.upcoming_version+" Final release on "+g);return n.createElement(n.Fragment,null,n.createElement(r.A,{title:"Release Cycle",description:b,lang:"en"},n.createElement("div",{id:"upcoming"},n.createElement("div",{className:"raised content main-content-block"},n.createElement("div",{className:"split-fivehundred"},n.createElement("h1",{style:{marginTop:"20px"}},"Release Cycle"),n.createElement("div",{id:"index"},n.createElement(u,null)))))))},d=function(e){return n.createElement(l.R,{locale:"en"},n.createElement(p,e))}},653:function(e){"use strict";e.exports=JSON.parse('{"pJ":{"FA":"4.4","SC":"4.5","ZL":"4.4"},"Pg":false,"hN":true,"Lz":"/docs/handbook/release-notes/typescript-4-4.html","ih":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/","ZM":"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-rc/","vs":{"V":{"Y":"https://marketplace.visualstudio.com/items?itemName=TypeScriptTeam.typescript-442"}}}')}}]);
//# sourceMappingURL=component---src-pages-upcoming-tsx-89e2bdfaab0d4a363e78.js.map