(function(){"function"==typeof jQuery&&jQuery(function(n){var r,t,u,i;return null==n&&(n=jQuery),RLDLoadImages(n("#hero").find("img[data-src]")),RLDLoadImages(n(".main").find("img[data-src]")),n("#promos").each(function(){return new RLDCarouselView({el:this,chained:!0,skip:3}).render(),RLDLoadImages(n(this).find("img[data-src]"))}),RLD.beacon(),"undefined"==typeof history||null===history||!history.pushState||(r=location.href,t=location.href.match(/:\/\/[^\/]*\/([^\/]*)\//),t.length<2)?void 0:(u=window.root||"/"+t[1]+"/",i=new RLDTabRouter({container:n(".category-main"),title:n("#contentheader h2 a"),breadcrumbs:n(".breadcrumbs")}),Backbone.history.start({pushState:!0}),window.RLDCategoryRouter=i,i.on("route",function(){return RLD.beacon()}))})}).call(this)