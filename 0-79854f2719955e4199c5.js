(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),s=a.n(i),o=a(81),l=a.n(o);a.d(t,"a",function(){return l.a}),a(288),r.a.createContext({}),s.a.object,s.a.string.isRequired,s.a.func,s.a.func},258:function(e,t,a){"use strict";a(84);var n=a(31),r=a.n(n),i=a(1),s=a.n(i),o=a(313),l=a.n(o),c=a(251),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title;return s.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},s.a.createElement("div",{className:"container"},s.a.createElement(c.a,{className:"text-center",to:"/"},s.a.createElement("h1",{className:"navbar-brand mb-0"},a)),s.a.createElement("div",{className:"navbar-nav-scroll"},s.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},s.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(c.a,{to:"/",className:"nav-link"},"Home")),s.a.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},s.a.createElement(c.a,{to:"/profile/",className:"nav-link"},"Profile")))),s.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(s.a.Component),p=a(263),u=a(275),g=(a(312),a(310),a(308),a(306),a(304),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){l.a.init()},a.componentDidUpdate=function(){l.a.init()},a.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(m,Object.assign({title:u.siteMetadata.title},this.props)),e,s.a.createElement(p.a,{title:u.siteMetadata.title,author:u.siteMetadata.author}))},t}(s.a.Component));t.a=g},260:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(321),s=a.n(i),o=a(247),l=a.n(o);t.a=function(e){var t=e.site,a=e.title,n=l()(t,"title");return a=a?a+" | "+n:n,r.a.createElement(s.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l()(t,"twitter")},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:l()(t,"description")},{property:"og:url",content:l()(t,"siteUrl")+"/profile"},{property:"og:image",content:l()(t,"siteUrl")+"/img/profile.jpg"}]})}},263:function(e,t,a){"use strict";var n=a(251),r=a(1),i=a.n(r);a(323),t.a=function(e){var t=e.author,a=e.title;return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("hr",{className:"border-primary"}),i.a.createElement("p",null,a,i.a.createElement(n.a,{to:"/profile/"},i.a.createElement("br",null),i.a.createElement("strong",null,t)," on Profile"))))}},275:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",siteUrl:"https://gatstrap.netlify.com",author:"jaxx2104",twitter:"jaxx2104",adsense:""},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/images/",name:"images"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},288:function(e,t,a){var n;e.exports=(n=a(380))&&n.default||n},308:function(e,t,a){},323:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(0),s=a.n(i),o=a(75),l=a(3),c=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=0-79854f2719955e4199c5.js.map