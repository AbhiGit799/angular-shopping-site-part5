"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[228],{2228:(tt,C,c)=>{c.r(C),c.d(C,{ShopModule:()=>V});var s=c(6895),u=c(8616),t=c(4650),g=c(4004),f=c(9019),S=c(529),h=c(4383);let _=(()=>{class e{constructor(o,r){this._httpClient=o,this._toastr=r,this.currency="INR"}allProducts(){return this._httpClient.get(f.N.BASE_API_PATH+"ProductMaster/GetProductList")}getProducts(){return this.allProducts()}getProduct(o){return this.allProducts().pipe((0,g.U)(r=>r.find(i=>i.id===o)))}getProductByCategory(o){return this.allProducts().pipe((0,g.U)(r=>r.filter(i=>"all"===o||i.category===o)))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(S.eN),t.LFG(h._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=c(4691);function I(e,n){if(1&e&&(t.TgZ(0,"div",4)(1,"a",5)(2,"div",6),t._UZ(3,"img",7),t.TgZ(4,"div",8)(5,"div")(6,"h4"),t._uU(7),t.qZA(),t.TgZ(8,"h2"),t._uU(9),t.qZA()()()()()()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("routerLink",o.link),t.xp6(2),t.Q6J("src",o.imagePath,t.LSH),t.xp6(4),t.hij("Save ",o.isSave," %"),t.xp6(2),t.Oqu(o.title)}}let A=(()=>{class e{constructor(o){this._httpService=o,this.categories=[]}ngOnInit(){this._httpService.get(f.N.BASE_API_PATH+"Category/GetAll").subscribe(o=>{this.categories=o.data})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(T.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-collection-banner"]],decls:4,vars:1,consts:[[1,"pb-0"],[1,"container"],[1,"row","partition2"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[3,"routerLink"],[1,"collection-banner","p-right","text-center"],["alt","category image",1,"img-fluid",3,"src"],[1,"contain-banner"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t.YNc(3,I,10,4,"div",3),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",r.categories))},dependencies:[s.sg,u.yS]}),e})();var l=c(6594);function k(e,n){if(1&e&&(t.TgZ(0,"div",7)(1,"div",8),t._UZ(2,"img",9),t.qZA()()),2&e){const o=n.$implicit;t.xp6(2),t.Q6J("src",o.imagePath,t.LSH)}}let b=(()=>{class e{constructor(o){this._httpService=o,this.logos=[],this.logoSliderConfig={infinite:!0,slidesToShow:6,slidesToScroll:6,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1367,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}}ngOnInit(){this._httpService.get(f.N.BASE_API_PATH+"Brandlogo/GetAll").subscribe(o=>{this.logos=o.data})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(T.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-logo"]],decls:7,vars:2,consts:[[1,"section-b-space"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"no-arrow",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",4,"ngFor","ngForOf"],["ngxSlickItem",""],[1,"logo-block"],["alt","logo image",3,"src"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ngx-slick-carousel",4,5),t.YNc(6,k,3,1,"div",6),t.qZA()()()()()),2&o&&(t.xp6(4),t.Q6J("config",r.logoSliderConfig),t.xp6(2),t.Q6J("ngForOf",r.logos))},dependencies:[s.sg,l.vE,l.Xg]}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-parallax-banner"]],decls:12,vars:0,consts:[[1,"p-0"],[1,"full-banner","parallax-banner1","parallax","text-center","p-left"],[1,"container"],[1,"row"],[1,"col"],[1,"banner-contain"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"2022"),t.qZA(),t.TgZ(8,"h3"),t._uU(9,"fashion trends"),t.qZA(),t.TgZ(10,"h4"),t._uU(11,"special offer"),t.qZA()()()()()()())}}),e})(),P=(()=>{class e{constructor(){this.SliderConfig={autoPlay:!0,autoplaySpeed:3e3}}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-slider"]],decls:29,vars:1,consts:[[1,"p-0"],[1,"home-slider",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem",""],[1,"home","home1","text-center"],[1,"container"],[1,"row"],[1,"col"],[1,"slider-contain"],["routerLink","/home/left-sidebar/collection/men",1,"btn","btn-solid"],[1,"home","home2","text-center"],["routerLink","/home/left-sidebar/collection/women",1,"btn","btn-solid"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"ngx-slick-carousel",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div")(10,"h4"),t._uU(11,"welcome to fashion"),t.qZA(),t.TgZ(12,"h1"),t._uU(13,"Men fashion"),t.qZA(),t.TgZ(14,"a",9),t._uU(15,"shop now"),t.qZA()()()()()()()(),t.TgZ(16,"div",3)(17,"div",10)(18,"div",5)(19,"div",6)(20,"div",7)(21,"div",8)(22,"div")(23,"h4"),t._uU(24,"welcome to fashion"),t.qZA(),t.TgZ(25,"h1"),t._uU(26,"Women fashion"),t.qZA(),t.TgZ(27,"a",11),t._uU(28,"shop now"),t.qZA()()()()()()()()()()),2&o&&(t.xp6(1),t.Q6J("config",r.SliderConfig))},dependencies:[u.yS,l.vE,l.Xg]}),e})();var F=c(1135),v=c(9646);let O=(()=>{class e{constructor(o){this._toastr=o,this.products=JSON.parse(localStorage.getItem("cartItem"))||[],this.cartItems=new F.X([])}getItems(){return(0,v.of)(this.products)}getTotalAmount(){return this.cartItems.pipe((0,g.U)(()=>this.products.reduce((o,r)=>o+r.product.price*r.quantity,0)))}addToCart(o,r=1){this.products.find((a,d)=>{if(a.product.id===o.id){let m=a.quantity+r,R=this.calculateItemStock(a.product,m);return 0!=m&&R&&(this.products[d].quantity=m,localStorage.setItem("cartItem",JSON.stringify(this.products))),!0}return!1})||(this.products.push({product:o,quantity:r}),localStorage.setItem("cartItem",JSON.stringify(this.products)),this._toastr.success("Item has been added to cart !!","CartList"))}updateToCart(o,r=1){this.products.find((i,a)=>{if(i.product.id===o.id){let d=i.quantity+r,m=this.calculateItemStock(i.product,d);0!=d&&m&&(this.products[a].quantity=d,localStorage.setItem("cartItem",JSON.stringify(this.products)))}})}calculateItemStock(o,r){return!(o.stock<r&&(this._toastr.error("You can not add more item in cartlist(Out of Stock) !!","Cartlist"),1))}removeFromCart(o){let r=this.products.indexOf(o);r>-1&&(this.products.splice(r,1),localStorage.setItem("cartItem",JSON.stringify(this.products)))}clearAllItemsFromCart(){this.products.splice(0,this.products.length),localStorage.setItem("cartItem",JSON.stringify(this.products))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(h._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),U=(()=>{class e{constructor(o){this._toastr=o,this.products=JSON.parse(localStorage.getItem("wishlistItem"))||[]}getItems(){return(0,v.of)(this.products)}hasProduct(o){return void 0!==this.products.find(i=>i.id===o.id)}addToWishlist(o){this.hasProduct(o)?this._toastr.warning("This item already added in your wishlist !!","WishList"):(this.products.push(o),localStorage.setItem("wishlistItem",JSON.stringify(this.products)),this._toastr.success("Item has been added to wishlist !!","WishList"))}removeFromWishlist(o){let r=this.products.indexOf(o);r>-1&&(this.products.splice(r,1),localStorage.setItem("wishlistItem",JSON.stringify(this.products)))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(h._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),J=(()=>{class e{constructor(o){this._toastr=o,this.products=JSON.parse(localStorage.getItem("compateItem"))||[]}getItems(){return(0,v.of)(this.products)}hasProduct(o){return void 0!==this.products.find(i=>i.id===o.id)}addToCompare(o){this.hasProduct(o)?this._toastr.warning("This item already added in your compare lsit !!","Compare List"):(this.products.push(o),localStorage.setItem("compateItem",JSON.stringify(this.products)),this._toastr.success("Item has been added to compare lsit !!","Compare List"))}removeFromComparelist(o){let r=this.products.indexOf(o);r>-1&&(this.products.splice(r,1),localStorage.setItem("compateItem",JSON.stringify(this.products)))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(h._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=c(4051);function q(e,n){1&e&&(t.TgZ(0,"span",20),t._uU(1,"new"),t.qZA())}function L(e,n){1&e&&(t.TgZ(0,"span",21),t._uU(1,"on sale"),t.qZA())}const N=function(e){return{active:e}};function Q(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"li",22)(1,"a",23),t.NdJ("click",function(){const a=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.changeVariant(a.images))}),t._UZ(2,"img",24),t.qZA()()}if(2&e){const o=n.$implicit,r=t.oxw(2);t.Q6J("ngClass",t.VKq(2,N,o.images===r.variantImage)),t.xp6(2),t.Q6J("src",o.images,t.LSH)}}const x=function(e){return["/home/product/details",e]};function Y(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,q,2,0,"span",4),t.YNc(3,L,2,0,"span",5),t.qZA(),t.TgZ(4,"div",6)(5,"a",7),t._UZ(6,"img",8),t.qZA()(),t.TgZ(7,"ul",9),t.YNc(8,Q,3,4,"li",10),t.qZA(),t.TgZ(9,"div",11)(10,"a",12),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addToCart())}),t._UZ(11,"i",13),t.qZA(),t.TgZ(12,"a",14),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addToWishlist())}),t._UZ(13,"i",15),t.qZA(),t.TgZ(14,"a",16),t._UZ(15,"i",17),t.qZA(),t.TgZ(16,"a",18),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addToCompare())}),t._UZ(17,"i",19),t.qZA()()()}if(2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.product.isNew),t.xp6(1),t.Q6J("ngIf",o.product.isSale),t.xp6(2),t.Q6J("routerLink",t.VKq(6,x,o.product.id)),t.xp6(1),t.Q6J("src",o.variantImage?o.variantImage:o.product.pictures[0],t.LSH),t.xp6(2),t.Q6J("ngForOf",o.product.variants),t.xp6(6),t.Q6J("routerLink",t.VKq(8,x,o.product.id))}}function W(e,n){if(1&e&&(t.TgZ(0,"div",25)(1,"div"),t._UZ(2,"bar-rating")(3,"br"),t.TgZ(4,"a")(5,"h6"),t._uU(6),t.qZA()(),t.TgZ(7,"h4"),t._uU(8),t.ALo(9,"currency"),t.TgZ(10,"del")(11,"span",26),t._uU(12),t.ALo(13,"currency"),t.qZA()()()()()),2&e){const o=t.oxw();t.xp6(6),t.hij(" ",o.product.name,""),t.xp6(2),t.hij(" ",t.Dn7(9,3,o.product.price,null==o._productsService?null:o._productsService.currency,"symbol")," "),t.xp6(4),t.hij("",t.Dn7(13,7,o.product.salePrice,null==o._productsService?null:o._productsService.currency,"symbol")," ")}}let y=(()=>{class e{constructor(o,r,i,a){this._productsService=o,this._cartService=r,this._wishlistService=i,this._compareService=a,this.rate=4,this.max=5}ngOnInit(){this.variantImage=this.product.variants.length>0?this.product.variants[0].images:""}changeVariant(o){this.variantImage=o}addToCart(){this._cartService.addToCart(this.product)}addToWishlist(){this._wishlistService.addToWishlist(this.product)}addToCompare(){this._compareService.addToCompare(this.product)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(_),t.Y36(O),t.Y36(U),t.Y36(J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],inputs:{product:"product"},decls:2,vars:2,consts:[["class","img-wrapper",4,"ngIf"],["class","product-detail",4,"ngIf"],[1,"img-wrapper"],[1,"lable-block"],["class","lable3",4,"ngIf"],["class","lable4",4,"ngIf"],[1,"front"],[3,"routerLink"],["alt","product image",1,"img-fluid",3,"src"],[1,"product-thumb-list"],["class","grid_thumb_img",3,"ngClass",4,"ngFor","ngForOf"],[1,"cart-info","cart-wrap"],["title","Add to cart",3,"click"],[1,"ti-shopping-cart"],["title","Add to Wishlist",3,"click"],["aria-hidden","true",1,"ti-heart"],["title","View Details",3,"routerLink"],["aria-hidden","true",1,"ti-search"],["title","Compare",3,"click"],["aria-hidden","true",1,"ti-reload"],[1,"lable3"],[1,"lable4"],[1,"grid_thumb_img",3,"ngClass"],[3,"click"],[3,"src"],[1,"product-detail"],[1,"money"]],template:function(o,r){1&o&&(t.YNc(0,Y,18,10,"div",0),t.YNc(1,W,14,11,"div",1)),2&o&&(t.Q6J("ngIf",r.product),t.xp6(1),t.Q6J("ngIf",r.product))},dependencies:[s.mk,s.sg,s.O5,u.yS,Z.OJ,s.H9]}),e})();function B(e,n){if(1&e&&(t.TgZ(0,"div",12),t._UZ(1,"app-product",13),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("product",o)}}let X=(()=>{class e{constructor(){this.products=[],this.productSliderConfig={infinite:!0,slidesToShow:4,slidesToScroll:4,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]}}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-slider"]],inputs:{products:"products"},decls:19,vars:6,consts:[[1,"title1","section-t-space"],[1,"title-inner1"],[1,"container"],[1,"row"],[1,"col-lg-6","offset-lg-3"],[1,"product-para"],[1,"text-center"],[1,"section-b-space","p-t-0"],[1,"col"],[1,"product-4","product-m","no-arrow",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","product-box",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"product-box"],[3,"product"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2,"special offer"),t.qZA(),t.TgZ(3,"h2",1),t._uU(4,"top collection"),t.qZA()(),t.TgZ(5,"div",2)(6,"div",3)(7,"div",4)(8,"div",5)(9,"p",6),t._uU(10,"Top Collection by Shopping mall"),t.qZA()()()()(),t.TgZ(11,"section",7)(12,"div",2)(13,"div",3)(14,"div",8)(15,"ngx-slick-carousel",9,10),t.YNc(17,B,2,1,"div",11),t.ALo(18,"slice"),t.qZA()()()()()),2&o&&(t.xp6(15),t.Q6J("config",r.productSliderConfig),t.xp6(2),t.Q6J("ngForOf",t.Dn7(18,2,r.products,0,16)))},dependencies:[s.sg,l.vE,l.Xg,y,s.OU]}),e})();var p=c(8259);function H(e,n){if(1&e&&(t.TgZ(0,"div",17),t._UZ(1,"app-product",18),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("product",o)}}function M(e,n){if(1&e&&(t.TgZ(0,"div",17),t._UZ(1,"app-product",18),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("product",o)}}let D=(()=>{class e{constructor(){this.products=[]}ngOnInit(){p("#tab-1").show(),p(".tabs li a").on("click",function(o){o.preventDefault(),p(this).parent().parent().find("li").removeClass("current"),p(this).parent().addClass("current");let r=p(this).attr("href");p(this).parent().parent().parent().find(".tab-content").hide(),p("#"+r).show()})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-tab"]],inputs:{products:"products"},decls:26,vars:10,consts:[[1,"title1","section-t-space"],[1,"title-inner1"],[1,"section-b-space","p-t-0"],[1,"container"],[1,"row"],[1,"col"],[1,"theme-tab"],[1,"tabs","tab-title"],[1,"current"],["href","tab-1"],[1,""],["href","tab-2"],[1,"tab-content-cls"],["id","tab-1",1,"tab-content"],[1,"no-slider","row"],["class","product-box",4,"ngFor","ngForOf"],["id","tab-2",1,"tab-content"],[1,"product-box"],[3,"product"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2,"exclusive products"),t.qZA(),t.TgZ(3,"h2",1),t._uU(4,"special products"),t.qZA()(),t.TgZ(5,"section",2)(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"ul",7)(11,"li",8)(12,"a",9),t._uU(13,"New Products"),t.qZA()(),t.TgZ(14,"li",10)(15,"a",11),t._uU(16,"Best Sellers"),t.qZA()()(),t.TgZ(17,"div",12)(18,"div",13)(19,"div",14),t.YNc(20,H,2,1,"div",15),t.ALo(21,"slice"),t.qZA()(),t.TgZ(22,"div",16)(23,"div",14),t.YNc(24,M,2,1,"div",15),t.ALo(25,"slice"),t.qZA()()()()()()()()),2&o&&(t.xp6(20),t.Q6J("ngForOf",t.Dn7(21,2,r.products,16,24)),t.xp6(4),t.Q6J("ngForOf",t.Dn7(25,6,r.products,24,30)))},dependencies:[s.sg,y,s.OU]}),e})();const G=[{path:"shop",component:(()=>{class e{constructor(o){this._productsService=o,this.products=[]}ngOnInit(){this._productsService.getProducts().subscribe(o=>{this.products=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:6,vars:2,consts:[[3,"products"]],template:function(o,r){1&o&&t._UZ(0,"app-slider")(1,"app-collection-banner")(2,"app-product-slider",0)(3,"app-parallax-banner")(4,"app-product-tab",0)(5,"app-logo"),2&o&&(t.xp6(2),t.Q6J("products",r.products),t.xp6(2),t.Q6J("products",r.products))},dependencies:[A,b,w,P,X,D]}),e})()},{path:"cart",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"cart works!"),t.qZA())}}),e})()},{path:"wishlist",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wishlist"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"wishlist works!"),t.qZA())}}),e})()},{path:"compare",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-compare"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"compare works!"),t.qZA())}}),e})()},{path:"checkout",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-checkout"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"checkout works!"),t.qZA())}}),e})()},{path:"checkout/success",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-success"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"success works!"),t.qZA())}}),e})()},{path:"product/details/:id",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-details"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"product-details works!"),t.qZA())}}),e})()},{path:"left-sidebar/collection/:category",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-collection"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"collection works!"),t.qZA())}}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(G),u.Bz]}),e})();var E=c(4006),z=c(6328),K=c(4466),$=c(9927);let V=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,j,E.UX,Z.C0,z.Rq,l.Sv,S.JF,K.m,$.kx]}),e})()}}]);