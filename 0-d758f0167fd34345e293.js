(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(0),i=a.n(s),o=a(81),l=a.n(o);a.d(t,"a",function(){return l.a}),a(290),r.a.createContext({}),i.a.object,i.a.string.isRequired,i.a.func,i.a.func},260:function(e,t,a){"use strict";a(84);var n=a(31),r=a.n(n),s=a(1),i=a.n(s),o=a(315),l=a.n(o),c=a(253),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title;return i.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement(c.a,{className:"text-center",to:"/"},i.a.createElement("h1",{className:"navbar-brand mb-0"},a)),i.a.createElement("div",{className:"navbar-nav-scroll"},i.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},i.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(c.a,{to:"/",className:"nav-link"},"Home")),i.a.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},i.a.createElement(c.a,{to:"/profile/",className:"nav-link"},"Profile")))),i.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(i.a.Component),m=a(265),u=a(277),g=(a(314),a(312),a(310),a(308),a(306),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){l.a.init()},a.componentDidUpdate=function(){l.a.init()},a.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(p,Object.assign({title:u.siteMetadata.title},this.props)),e,i.a.createElement(m.a,{title:u.siteMetadata.title,author:u.siteMetadata.author}))},t}(i.a.Component));t.a=g},262:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(323),i=a.n(s),o=a(249),l=a.n(o);t.a=function(e){var t=e.site,a=e.title,n=l()(t,"title");return a=a?a+" | "+n:n,r.a.createElement(i.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l()(t,"twitter")},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:l()(t,"description")},{property:"og:url",content:l()(t,"siteUrl")+"/profile"},{property:"og:image",content:l()(t,"siteUrl")+"/img/profile.jpg"}]})}},265:function(e,t,a){"use strict";var n=a(253),r=a(1),s=a.n(r);a(325),t.a=function(e){var t=e.author,a=e.title;return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"container"},s.a.createElement("hr",{className:"border-primary"}),s.a.createElement("p",null,a,s.a.createElement(n.a,{to:"/profile/"},s.a.createElement("br",null),s.a.createElement("strong",null,t)," on Profile"))))}},277:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",siteUrl:"https://gatstrap.netlify.com",author:"jaxx2104",twitter:"jaxx2104",adsense:""},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/images/",name:"images"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",description:"Gatsby starter for bootstrap a blog",homepage_url:"https://gatstrap.netlify.com",start_url:"/",background_color:"#fff",theme_color:"#673ab7",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},290:function(e,t,a){var n;e.exports=(n=a(382))&&n.default||n},310:function(e,t,a){},325:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(0),i=a.n(s),o=a(75),l=a(3),c=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=0-d758f0167fd34345e293.js.map