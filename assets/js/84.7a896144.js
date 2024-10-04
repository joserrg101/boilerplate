(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{366:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"broadcasting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting"}},[e._v("#")]),e._v(" Broadcasting")]),e._v(" "),t("p",[e._v("In many modern web applications, WebSockets are used to implement realtime, live-updating user interfaces. When some data is updated on the server, a message is typically sent over a WebSocket connection to be handled by the client. WebSockets provide a more efficient alternative to continually polling your application's server for data changes that should be reflected in your UI.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://laravel.com/docs/broadcasting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel broadcasting features"),t("OutboundLink")],1),e._v(' makes it easy to "broadcast" your server-side events over a WebSocket connection.')]),e._v(" "),t("p",[e._v("This package adds some extra features to make it even easier.")]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v('This package will only support the "pusher" driver.')]),e._v(" "),t("blockquote",[t("p",[e._v("You can create a "),t("a",{attrs:{href:"https://dashboard.pusher.com/accounts/sign_up",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pusher account"),t("OutboundLink")],1),e._v(" or use "),t("a",{attrs:{href:"https://docs.soketi.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Soketi"),t("OutboundLink")],1),e._v(" if you don't want to be limited.")])]),e._v(" "),t("p",[e._v("Once your application has been created, transfer its parameters to your "),t("code",[e._v(".env")]),e._v(" file :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("PUSHER_APP_ID=your-pusher-app-id\nPUSHER_APP_KEY=your-pusher-key\nPUSHER_APP_SECRET=your-pusher-secret\nPUSHER_APP_CLUSTER=mt1\n")])])]),t("p",[e._v("Also in you "),t("code",[e._v(".env")]),e._v(" file, set the broadcast driver to pusher :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("BROADCAST_DRIVER=pusher\n")])])]),t("p",[t("strong",[e._v("NB")]),e._v(": The broadcast service provider will be loaded automatically when the broadcast driver is set to "),t("code",[e._v("pusher")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);