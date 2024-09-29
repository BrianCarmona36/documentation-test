(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3345],{1411:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/itg-mobile-framework/component_development/render_your_components",function(){return n(9676)}])},9676:function(e,o,n){"use strict";n.r(o),n.d(o,{__toc:function(){return m},default:function(){return l}});var t=n(5893),r=n(2673),i=n(7913),a=n(8426);n(9128);var s=n(2643);n(7294);var d=n(9013),components_RegisterCustomComponentsFileTree=()=>(0,t.jsx)(d.zH,{children:(0,t.jsx)(d.zH.Folder,{name:"src",defaultOpen:!0,children:(0,t.jsxs)(d.zH.Folder,{name:"components",defaultOpen:!0,children:[(0,t.jsxs)(d.zH.Folder,{name:"Button",children:[(0,t.jsx)(d.zH.File,{name:"index.tsx"}),(0,t.jsx)(d.zH.File,{name:"Button.tsx"})]}),(0,t.jsxs)(d.zH.Folder,{name:"Slider",children:[(0,t.jsx)(d.zH.File,{name:"index.tsx"}),(0,t.jsx)(d.zH.File,{name:"Slider.tsx"}),(0,t.jsx)(d.zH.File,{name:"useSlider.tsx"})]}),(0,t.jsx)(d.zH.File,{name:"index.tsx"})]})})});let m=[{depth:2,value:"Archivo de registro componentes",id:"archivo-de-registro-componentes"},{depth:2,value:"Ejemplo de registro",id:"ejemplo-de-registro"},{depth:2,value:"Consideraciones para el registro de componentes",id:"consideraciones-para-el-registro-de-componentes"},{depth:3,value:"Configura tu componente desde tu CMS",id:"configura-tu-componente-desde-tu-cms"},{depth:3,value:"Nombramiento de tus componentes custom",id:"nombramiento-de-tus-componentes-custom"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",pre:"pre",span:"span",h3:"h3",ol:"ol",li:"li"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{children:"Registro de componentes personalizados"}),"\n",(0,t.jsx)(o.p,{children:"Una vez has creado tus componentes, deber\xe1s registrarlos para visualizarlos en tu aplicaci\xf3n. Esta secci\xf3n te ense\xf1ar\xe1 a registrar tus componentes y algunos puntos que deber\xe1s tener en cuenta al momento de hacerlo."}),"\n",(0,t.jsx)(o.h2,{id:"archivo-de-registro-componentes",children:"Archivo de registro componentes"}),"\n",(0,t.jsxs)(o.p,{children:["Los componentes personalizados que quieras agregar a tu proyecto, se registran de forma sencilla en el archivo ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"index.tsx"})})," en la ruta ",(0,t.jsx)(o.code,{children:"/src/components"})]}),"\n",(0,t.jsx)(components_RegisterCustomComponentsFileTree,{}),"\n",(0,t.jsxs)(o.p,{children:["Este archivo, exporta un objeto llamado ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"customComponents"})})," que act\xfaa como el registro de componentes. En este objeto, cada llave representa el nombre del componente y su valor ser\xe1 la funci\xf3n que renderiza el componente."]}),"\n",(0,t.jsx)(o.h2,{id:"ejemplo-de-registro",children:"Ejemplo de registro"}),"\n",(0,t.jsxs)(o.p,{children:["Tu plantilla proyecto ya incluye un componente registrado. El componente ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"RichText"})})," es importado desde la ruta ",(0,t.jsx)(o.code,{children:"/src/components/RichText"})," y es a\xf1adido al objeto de registro ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"customComponents"})}),"."]}),"\n",(0,t.jsx)(o.pre,{"data-language":"tsx","data-theme":"default",children:(0,t.jsxs)(o.code,{"data-language":"tsx","data-theme":"default",children:[(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:'// Ejemplo de registro del componente "rich-text"'})}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" RichText "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./RichText'"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"AllowedComponents"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"customComponents"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"AllowedComponents"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// ...otros componentes registrados"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rich-text'"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" RichText"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"// ...otros componentes registrados"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(o.h2,{id:"consideraciones-para-el-registro-de-componentes",children:"Consideraciones para el registro de componentes"}),"\n",(0,t.jsx)(o.p,{children:"Como ves, el registrar un componente personalizado es un proceso sencillo. A\xfan as\xed ten en cuenta las siguientes consideraciones"}),"\n",(0,t.jsx)(o.h3,{id:"configura-tu-componente-desde-tu-cms",children:"Configura tu componente desde tu CMS"}),"\n",(0,t.jsx)(o.p,{children:"T\xfa componente est\xe1 listo para usar, pero debes agregarlo a tu CMS para que puedas visualizarlo. Recuerda que tu CMS es quien gener\xe1 la estructura de tu aplicaci\xf3n, sus rutas y componentes para esas rutas.\nAunque tu componente est\xe9 registrado, si no lo llamas en alguna de tus rutas, no lo visualizar\xe1s."}),"\n",(0,t.jsx)(o.p,{children:"Si ya agregaste tu componente a una ruta y no lo visualizas, revisa alguno de los siguientes puntos:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["El nombre de tu componente debe ser exactamente igual tanto en el archivo de registro de componentes como en tu CMS. Por ejemplo si en tu CMS quieres llamar al componente ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"RichText"})})," no se renderizar\xe1 si en tu proyecto lo registraste como ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"rich-text"})})]}),"\n",(0,t.jsxs)(o.li,{children:["Verifica que las propiedades que envias desde tu CMS son las que tu componente necesita. Si tu componente ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"Slider"})})," necesita de un arreglo de urls, y en su lugar tu CMS env\xeda otro tipo de dato tu componente puede no renderizarse o puede causar errores en tu aplicaci\xf3n."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"nombramiento-de-tus-componentes-custom",children:"Nombramiento de tus componentes custom"}),"\n",(0,t.jsxs)(o.p,{children:["Al registrar tus componentes, es posible que uses un nombre que ya ha sido usado por alg\xfan componente de ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"itg-ecommerce-plugin"})}),". Cuando dos componentes tienen el mismo nombre, ",(0,t.jsx)(o.strong,{children:"tendr\xe1 prioridad tu componente personalizado"})," sobre los componentes de ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"itg-ecommerce-plugin"})}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Por ejemplo, tu proyecto por defecto tiene un componente registrado llamado ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"'rich-text'"})}),", este componente existe en e-commerce y est\xe1 registrado bajo el mismo nombre. Pero al ser llamados desde el CMS, se el componente de tu proyecto."]}),"\n",(0,t.jsx)(d.UW,{emoji:"\uD83D\uDC69\uD83C\uDFFD‍\uD83D\uDCBB",type:"info",children:(0,t.jsxs)(o.p,{children:["Puedes cambiar estilos de tu componente ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"'rich-text'"})})," y visualizarlos en\ntu aplicaci\xf3n. Si el componente no est\xe1 en la estructura de tu aplicaci\xf3n,\npuedes a\xf1adirlo desde tu CMS."]})}),"\n",(0,t.jsx)(o.p,{children:"Algunas consideraciones al momento de nombrar tus componentes:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Si usas un nombre ya existente se usar\xe1 en lugar de los componentes de ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"itg-ecommerce-plugin"})}),". Esto incluye todas las secciones de la app que est\xe1n usando ese componente. As\xed que, si quieres cambiar o a\xf1adir un componente en solo una secci\xf3n y mantener en otras secciones el uso del componente de e-commerce, registra tu componente bajo un nombre distinto."]}),"\n"]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,s.a)(),e.components);return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/itg-mobile-framework/component_development/render_your_components.mdx",route:"/itg-mobile-framework/component_development/render_your_components",timestamp:1721139958e3,pageMap:[{kind:"Meta",data:{"itg-mobile-framework":"ITG Mobile Framework"}},{kind:"Folder",name:"itg-mobile-framework",route:"/itg-mobile-framework",children:[{kind:"Folder",name:"2024",route:"/itg-mobile-framework/2024",children:[{kind:"MdxPage",name:"Go_live",route:"/itg-mobile-framework/2024/Go_live"},{kind:"Meta",data:{Go_live:"Go Live"}}]},{kind:"Meta",data:{introduction:"Introducci\xf3n","set-up":"Configuraci\xf3n de Ambiente","core-set-up":"Configuraci\xf3n CORE","initial-set-up":"Configuraci\xf3n Store Template",component_development:"C\xf3mo desarrollar tus componentes",components:"Componentes",implementation:"Implementaci\xf3n",plugins:"Desarrolla tu propio Plugin","release-notes":"Release Notes"}},{kind:"Folder",name:"component_development",route:"/itg-mobile-framework/component_development",children:[{kind:"Meta",data:{intro_to_component_development:"Introducci\xf3n al desarrollo de componentes",your_first_component:"Tu primer componente",render_your_components:"Renderiza tus componentes",style_your_components:"Estiliza tus componentes"}},{kind:"MdxPage",name:"intro_to_component_development",route:"/itg-mobile-framework/component_development/intro_to_component_development"},{kind:"MdxPage",name:"render_your_components",route:"/itg-mobile-framework/component_development/render_your_components"},{kind:"MdxPage",name:"style_your_components",route:"/itg-mobile-framework/component_development/style_your_components"},{kind:"MdxPage",name:"your_first_component",route:"/itg-mobile-framework/component_development/your_first_component"}]},{kind:"Folder",name:"components",route:"/itg-mobile-framework/components",children:[{kind:"MdxPage",name:"AddToCartButton",route:"/itg-mobile-framework/components/AddToCartButton"},{kind:"Folder",name:"Autocomplete",route:"/itg-mobile-framework/components/Autocomplete",children:[{kind:"MdxPage",name:"ProductSuggestions",route:"/itg-mobile-framework/components/Autocomplete/ProductSuggestions"},{kind:"MdxPage",name:"SearchSuggestions",route:"/itg-mobile-framework/components/Autocomplete/SearchSuggestions"},{kind:"MdxPage",name:"TopSearches",route:"/itg-mobile-framework/components/Autocomplete/TopSearches"},{kind:"Meta",data:{ProductSuggestions:"Product Suggestions",SearchSuggestions:"Search Suggestions",TopSearches:"Top Searches"}}]},{kind:"MdxPage",name:"CategoryMenu",route:"/itg-mobile-framework/components/CategoryMenu"},{kind:"MdxPage",name:"Checkout",route:"/itg-mobile-framework/components/Checkout"},{kind:"Folder",name:"Header",route:"/itg-mobile-framework/components/Header",children:[{kind:"MdxPage",name:"DeliveryInfo",route:"/itg-mobile-framework/components/Header/DeliveryInfo"},{kind:"MdxPage",name:"GoBack",route:"/itg-mobile-framework/components/Header/GoBack"},{kind:"MdxPage",name:"GoCart",route:"/itg-mobile-framework/components/Header/GoCart"},{kind:"MdxPage",name:"Header",route:"/itg-mobile-framework/components/Header/Header"},{kind:"MdxPage",name:"SearchBar",route:"/itg-mobile-framework/components/Header/SearchBar"},{kind:"Meta",data:{DeliveryInfo:"Delivery Info",GoBack:"Go Back",GoCart:"Go Cart",Header:"Header",SearchBar:"Search Bar"}}]},{kind:"MdxPage",name:"ImageList",route:"/itg-mobile-framework/components/ImageList"},{kind:"MdxPage",name:"ImageSlider",route:"/itg-mobile-framework/components/ImageSlider"},{kind:"MdxPage",name:"InfoCard",route:"/itg-mobile-framework/components/InfoCard"},{kind:"Folder",name:"Login",route:"/itg-mobile-framework/components/Login",children:[{kind:"MdxPage",name:"EmailInput",route:"/itg-mobile-framework/components/Login/EmailInput"},{kind:"MdxPage",name:"Login",route:"/itg-mobile-framework/components/Login/Login"},{kind:"MdxPage",name:"OtpAndPasswordScreen",route:"/itg-mobile-framework/components/Login/OtpAndPasswordScreen"},{kind:"MdxPage",name:"OtpInput",route:"/itg-mobile-framework/components/Login/OtpInput"},{kind:"MdxPage",name:"PasswordInput",route:"/itg-mobile-framework/components/Login/PasswordInput"},{kind:"Meta",data:{EmailInput:"Email Input",Login:"Login",OtpAndPasswordScreen:"OTP And Password Screen",OtpInput:"OTP Input",PasswordInput:"Password Input"}}]},{kind:"MdxPage",name:"MaintenanceScreen",route:"/itg-mobile-framework/components/MaintenanceScreen"},{kind:"MdxPage",name:"ModalCustom",route:"/itg-mobile-framework/components/ModalCustom"},{kind:"MdxPage",name:"NewsLetter",route:"/itg-mobile-framework/components/NewsLetter"},{kind:"Folder",name:"OrderDetail",route:"/itg-mobile-framework/components/OrderDetail",children:[{kind:"MdxPage",name:"OrderEstimatedDate",route:"/itg-mobile-framework/components/OrderDetail/OrderEstimatedDate"},{kind:"MdxPage",name:"OrderIdStatus",route:"/itg-mobile-framework/components/OrderDetail/OrderIdStatus"},{kind:"MdxPage",name:"OrderItemsInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderItemsInfo"},{kind:"MdxPage",name:"OrderPaymentMethod",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentMethod"},{kind:"MdxPage",name:"OrderPaymentSummary",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentSummary"},{kind:"MdxPage",name:"OrderShippingInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderShippingInfo"},{kind:"Meta",data:{OrderEstimatedDate:"Order Estimated Date",OrderIdStatus:"Order ID Status",OrderItemsInfo:"Order Items Info",OrderPaymentMethod:"Order Payment Method",OrderPaymentSummary:"Order Payment Summary",OrderShippingInfo:"Order Shipping Info"}}]},{kind:"Folder",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced",children:[{kind:"MdxPage",name:"ClientProfileData",route:"/itg-mobile-framework/components/OrderPlaced/ClientProfileData"},{kind:"MdxPage",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced/OrderPlaced"},{kind:"MdxPage",name:"PaymentSummary",route:"/itg-mobile-framework/components/OrderPlaced/PaymentSummary"},{kind:"MdxPage",name:"ShippingInfo",route:"/itg-mobile-framework/components/OrderPlaced/ShippingInfo"},{kind:"MdxPage",name:"TitleSection",route:"/itg-mobile-framework/components/OrderPlaced/TitleSection"},{kind:"Meta",data:{ClientProfileData:"Client Profile Data",OrderPlaced:"Order Placed",PaymentSummary:"Payment Summary",ShippingInfo:"Shipping Info",TitleSection:"Title Section"}}]},{kind:"Folder",name:"Product",route:"/itg-mobile-framework/components/Product",children:[{kind:"MdxPage",name:"ProductAddToCartButton",route:"/itg-mobile-framework/components/Product/ProductAddToCartButton"},{kind:"MdxPage",name:"ProductAvailableQuatity",route:"/itg-mobile-framework/components/Product/ProductAvailableQuatity"},{kind:"MdxPage",name:"ProductBrand",route:"/itg-mobile-framework/components/Product/ProductBrand"},{kind:"MdxPage",name:"ProductDescription",route:"/itg-mobile-framework/components/Product/ProductDescription"},{kind:"MdxPage",name:"ProductImages",route:"/itg-mobile-framework/components/Product/ProductImages"},{kind:"MdxPage",name:"ProductName",route:"/itg-mobile-framework/components/Product/ProductName"},{kind:"MdxPage",name:"ProductPrice",route:"/itg-mobile-framework/components/Product/ProductPrice"},{kind:"MdxPage",name:"ProductSkuSelector",route:"/itg-mobile-framework/components/Product/ProductSkuSelector"},{kind:"MdxPage",name:"ProductSpecifications",route:"/itg-mobile-framework/components/Product/ProductSpecifications"},{kind:"MdxPage",name:"README",route:"/itg-mobile-framework/components/Product/README"},{kind:"MdxPage",name:"SkuSelector",route:"/itg-mobile-framework/components/Product/SkuSelector"},{kind:"Meta",data:{ProductAddToCartButton:"Product Add To Cart Button",ProductAvailableQuatity:"Product Available Quantity",ProductBrand:"Product Brand",ProductDescription:"Product Description",productDetailSellers:"Product Detail Sellers",productDetailShareMedia:"Product Detail Share Media",ProductImages:"Product Images",ProductName:"Product Name",ProductPrice:"Product Price",ProductSkuSelector:"Product SKU Selector",ProductSpecifications:"Product Specifications",SkuSelector:"SKU Selector",README:"README"}},{kind:"MdxPage",name:"productDetailSellers",route:"/itg-mobile-framework/components/Product/productDetailSellers"},{kind:"MdxPage",name:"productDetailShareMedia",route:"/itg-mobile-framework/components/Product/productDetailShareMedia"}]},{kind:"MdxPage",name:"ProductList",route:"/itg-mobile-framework/components/ProductList"},{kind:"Folder",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary",children:[{kind:"MdxPage",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary/ProductSummary"},{kind:"MdxPage",name:"WishListButton",route:"/itg-mobile-framework/components/ProductSummary/WishListButton"},{kind:"Meta",data:{ProductSummary:"Product Summary",WishListButton:"Wish List Button"}}]},{kind:"Folder",name:"Profile",route:"/itg-mobile-framework/components/Profile",children:[{kind:"MdxPage",name:"DeleteAccountButton",route:"/itg-mobile-framework/components/Profile/DeleteAccountButton"},{kind:"MdxPage",name:"MyAccount",route:"/itg-mobile-framework/components/Profile/MyAccount"},{kind:"MdxPage",name:"PaymentMethods.d",route:"/itg-mobile-framework/components/Profile/PaymentMethods.d"},{kind:"MdxPage",name:"Profile",route:"/itg-mobile-framework/components/Profile/Profile"},{kind:"Meta",data:{DeleteAccountButton:"Delete Account Button",MyAccount:"My Account","PaymentMethods.d":"Payment Methods",Profile:"Profile"}}]},{kind:"Folder",name:"Search",route:"/itg-mobile-framework/components/Search",children:[{kind:"MdxPage",name:"BreadCrumb",route:"/itg-mobile-framework/components/Search/BreadCrumb"},{kind:"MdxPage",name:"SearchContent",route:"/itg-mobile-framework/components/Search/SearchContent"},{kind:"MdxPage",name:"SearchInfo",route:"/itg-mobile-framework/components/Search/SearchInfo"},{kind:"MdxPage",name:"SearchOrderBy",route:"/itg-mobile-framework/components/Search/SearchOrderBy"},{kind:"MdxPage",name:"SearchProductCount",route:"/itg-mobile-framework/components/Search/SearchProductCount"},{kind:"Meta",data:{BreadCrumb:"Breadcrumb",SearchContent:"Search Content",SearchInfo:"Search Info",SearchOrderBy:"Search Order By",SearchProductCount:"Search Product Count"}}]},{kind:"Folder",name:"ShippingData",route:"/itg-mobile-framework/components/ShippingData",children:[{kind:"MdxPage",name:"DeliveryMethod",route:"/itg-mobile-framework/components/ShippingData/DeliveryMethod"},{kind:"MdxPage",name:"ListItem",route:"/itg-mobile-framework/components/ShippingData/ListItem"},{kind:"MdxPage",name:"PickupMethod",route:"/itg-mobile-framework/components/ShippingData/PickupMethod"},{kind:"MdxPage",name:"ShippingOptions",route:"/itg-mobile-framework/components/ShippingData/ShippingOptions"},{kind:"Meta",data:{DeliveryMethod:"Delivery Method",ListItem:"List Item",PickupMethod:"Pickup Method",ShippingOptions:"Shipping Options"}}]},{kind:"Folder",name:"TabBar",route:"/itg-mobile-framework/components/TabBar",children:[{kind:"MdxPage",name:"TabBar",route:"/itg-mobile-framework/components/TabBar/TabBar"},{kind:"MdxPage",name:"TabItem",route:"/itg-mobile-framework/components/TabBar/TabItem"},{kind:"Meta",data:{TabBar:"Tab Bar",TabItem:"Tab Item"}}]},{kind:"MdxPage",name:"UpdateVersionModal",route:"/itg-mobile-framework/components/UpdateVersionModal"},{kind:"Folder",name:"Welcome",route:"/itg-mobile-framework/components/Welcome",children:[{kind:"MdxPage",name:"ImageBackground",route:"/itg-mobile-framework/components/Welcome/ImageBackground"},{kind:"MdxPage",name:"WelcomeComponent",route:"/itg-mobile-framework/components/Welcome/WelcomeComponent"},{kind:"Meta",data:{ImageBackground:"Image Background",WelcomeComponent:"Welcome Component"}}]},{kind:"Meta",data:{Autocomplete:"Autocomplete",Header:"Header",Login:"Login",OrderDetail:"Order Detail",OrderPlaced:"Order Placed",Product:"Product",ProductSummary:"Product Summary",Profile:"Profile",Search:"Search",ShippingData:"Shipping Data",TabBar:"Tab Bar",Welcome:"Welcome",AddToCartButton:"Add To Cart Button",CategoryMenu:"Category Menu",Checkout:"Checkout",ImageList:"Image List",ImageSlider:"Image Slider",InfoCard:"Info Card",MaintenanceScreen:"Maintenance Screen",ModalCustom:"Modal Custom",NewsLetter:"Newsletter",ProductList:"Product List",UpdateVersionModal:"Update Version Modal"}}]},{kind:"Folder",name:"core-set-up",route:"/itg-mobile-framework/core-set-up",children:[{kind:"Meta",data:{"what-is-core":"\xbfQu\xe9 es Core?","cms-plugin":"Configuraci\xf3n itg-cms-plugin","e-commerce-plugin":"Configuraci\xf3n itg-ecommerce-plugin",plugins:"Configuraci\xf3n de Plugins"}},{kind:"MdxPage",name:"cms-plugin",route:"/itg-mobile-framework/core-set-up/cms-plugin"},{kind:"MdxPage",name:"e-commerce-plugin",route:"/itg-mobile-framework/core-set-up/e-commerce-plugin"},{kind:"MdxPage",name:"plugins",route:"/itg-mobile-framework/core-set-up/plugins"},{kind:"MdxPage",name:"what-is-core",route:"/itg-mobile-framework/core-set-up/what-is-core"}]},{kind:"Folder",name:"implementation",route:"/itg-mobile-framework/implementation",children:[{kind:"MdxPage",name:"00-Previous_requirements",route:"/itg-mobile-framework/implementation/00-Previous_requirements"},{kind:"MdxPage",name:"01-Setting_up_environment",route:"/itg-mobile-framework/implementation/01-Setting_up_environment"},{kind:"MdxPage",name:"02-Configuring_store",route:"/itg-mobile-framework/implementation/02-Configuring_store"},{kind:"MdxPage",name:"03-Defining_styles",route:"/itg-mobile-framework/implementation/03-Defining_styles"},{kind:"MdxPage",name:"04-Customizing_components",route:"/itg-mobile-framework/implementation/04-Customizing_components"},{kind:"MdxPage",name:"05-Maintaining_component_architecture",route:"/itg-mobile-framework/implementation/05-Maintaining_component_architecture"},{kind:"MdxPage",name:"06-Following_good_practices",route:"/itg-mobile-framework/implementation/06-Following_good_practices"},{kind:"MdxPage",name:"07-Running_automated_tests",route:"/itg-mobile-framework/implementation/07-Running_automated_tests"},{kind:"MdxPage",name:"08-Debugging",route:"/itg-mobile-framework/implementation/08-Debugging"},{kind:"MdxPage",name:"09-Deploying",route:"/itg-mobile-framework/implementation/09-Deploying"},{kind:"Meta",data:{"00-Previous_requirements":"00 Previous Requirements","01-Setting_up_environment":"01 Setting up Environment","02-Configuring_store":"02 Configuring Store","03-Defining_styles":"03 Defining Styles","04-Customizing_components":"04 Customizing Components","05-Maintaining_component_architecture":"05 Maintaining Component Architecture","06-Following_good_practices":"06 following Good Practices","07-Running_automated_tests":"07 Running Automated Tests","08-Debugging":"08 Debugging","09-Deploying":"09 Deploying"}}]},{kind:"Folder",name:"initial-set-up",route:"/itg-mobile-framework/initial-set-up",children:[{kind:"Meta",data:{"store-set-up":"Store Template"}},{kind:"MdxPage",name:"store-set-up",route:"/itg-mobile-framework/initial-set-up/store-set-up"}]},{kind:"MdxPage",name:"introduction",route:"/itg-mobile-framework/introduction"},{kind:"Folder",name:"plugins",route:"/itg-mobile-framework/plugins",children:[{kind:"Meta",data:{plugin_development:"C\xf3mo desarrollar un plugin"}},{kind:"MdxPage",name:"plugin_development",route:"/itg-mobile-framework/plugins/plugin_development"}]},{kind:"Folder",name:"release-notes",route:"/itg-mobile-framework/release-notes",children:[{kind:"Folder",name:"2024",route:"/itg-mobile-framework/release-notes/2024",children:[{kind:"MdxPage",name:"Go_live",route:"/itg-mobile-framework/release-notes/2024/Go_live"},{kind:"Meta",data:{Go_live:"Go Live"}}]}]},{kind:"Folder",name:"set-up",route:"/itg-mobile-framework/set-up",children:[{kind:"MdxPage",name:"Enviroment_setup",route:"/itg-mobile-framework/set-up/Enviroment_setup"},{kind:"MdxPage",name:"Previous_requirements",route:"/itg-mobile-framework/set-up/Previous_requirements"},{kind:"MdxPage",name:"Project_structure",route:"/itg-mobile-framework/set-up/Project_structure"},{kind:"Meta",data:{Previous_requirements:"Requisitos previos",Enviroment_setup:"Configuraci\xf3n de ambiente",Project_structure:"\xbfQu\xe9 incluye el proyecto?"}}]}]}],flexsearch:{codeblocks:!0},title:"Registro de componentes personalizados",headings:m},pageNextRoute:"/itg-mobile-framework/component_development/render_your_components",nextraLayout:i.ZP,themeConfig:a.Z};var l=(0,r.j)(c)},8426:function(e,o,n){"use strict";var t=n(5893);n(7294);let r={logo:(0,t.jsx)("img",{src:"https://www.itglobers.com/hubfs/ITG-2.svg",height:"101",width:"200"}),primaryHue:{light:268,dark:27},primarySaturation:{light:48,dark:100},project:{link:"https://github.com/ITGlobers/itg-mobile-framework"},docsRepositoryBase:"https://github.com/ITGlobers/itg-mobile-framework-libraries/tree/develop/docs",footer:{text:"ITG CORE Framework"},sidebar:{toggleButton:!0}};o.Z=r},5789:function(){}},function(e){e.O(0,[9774,3873,4543,2888,179],function(){return e(e.s=1411)}),_N_E=e.O()}]);