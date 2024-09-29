(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2681],{6706:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/itg-mobile-framework/implementation/05-Maintaining_component_architecture",function(){return n(2824)}])},2824:function(e,o,n){"use strict";n.r(o),n.d(o,{__toc:function(){return l}});var t=n(5893),r=n(2673),i=n(7913),a=n(8426);n(9128);var s=n(2643);let l=[{depth:2,value:"Componente de texto",id:"componente-de-texto"},{depth:3,value:"RichTextContainer",id:"richtextcontainer"},{depth:3,value:"RichText",id:"richtext"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{children:"Arquitectura de componentes"}),"\n",(0,t.jsx)(o.p,{children:"Es importante seguir buenas pr\xe1cticas y mantener la mantenibilidad al desarrollar componentes personalizados en una aplicaci\xf3n. La arquitectura que adoptamos separa la capa de l\xf3gica de la capa de presentaci\xf3n. A continuaci\xf3n, se muestra un ejemplo de un componente de texto que sigue esta arquitectura:"}),"\n",(0,t.jsx)(o.h2,{id:"componente-de-texto",children:"Componente de texto"}),"\n",(0,t.jsx)(o.p,{children:"El componente de texto consta de tres partes principales: el contenedor (RichTextContainer), la representaci\xf3n visual (RichText) y la capa de l\xf3gica (useRichText). Veamos cada uno de ellos:"}),"\n",(0,t.jsx)(o.h3,{id:"richtextcontainer",children:"RichTextContainer"}),"\n",(0,t.jsx)(o.p,{children:"El contenedor (RichTextContainer) es responsable de unificar la capa de l\xf3gica con la capa de presentaci\xf3n. Se encarga de inicializar y compartir los datos necesarios al componente de presentaci\xf3n (RichText). Aqu\xed est\xe1 el c\xf3digo:"}),"\n",(0,t.jsx)(o.pre,{"data-language":"tsx","data-theme":"default",children:(0,t.jsxs)(o.code,{"data-language":"tsx","data-theme":"default",children:[(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { RichText } "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./RichText'"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { useRichText } "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./useRichText'"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Props"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  text"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"RichTextContainer"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ({ text }"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Props"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"richTextProps"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"useRichText"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"RichText"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"richTextProps} "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"text"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"{text} />"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" RichTextContainer"})]})]})}),"\n",(0,t.jsx)(o.p,{children:"En este componente, se utiliza un hook personalizado (useRichText) para obtener las propiedades y desarrollar cualquier tipo de l\xf3gica necesaria para el componente y luego se pasa al componente de presentaci\xf3n (RichText)."}),"\n",(0,t.jsx)(o.h3,{id:"richtext",children:"RichText"}),"\n",(0,t.jsx)(o.p,{children:"El componente de presentaci\xf3n (RichText) se encarga \xfanicamente de mostrar la informaci\xf3n. No tiene l\xf3gica de negocio y se centra \xfanicamente en la representaci\xf3n visual. Aqu\xed est\xe1 el c\xf3digo:"}),"\n",(0,t.jsx)(o.pre,{"data-language":"tsx","data-theme":"default",children:(0,t.jsxs)(o.code,{"data-language":"tsx","data-theme":"default",children:[(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { Text } "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-native'"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Props"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  text"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsx)(o.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"RichText"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ({ text }"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Props"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(o.span,{className:"line",children:[(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Text"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"testID"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"priority-custom-component"'}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">{text}</"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Text"}),(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,t.jsx)(o.span,{className:"line",children:(0,t.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(o.p,{children:"Este componente recibe los datos del contenedor y los renderiza visualmente utilizando un componente Text de React Native."}),"\n",(0,t.jsx)(o.p,{children:"Siguiendo esta arquitectura, mantenemos la separaci\xf3n de responsabilidades entre la l\xf3gica de negocio y la presentaci\xf3n, lo que facilita la mantenibilidad y la escalabilidad de la aplicaci\xf3n."}),"\n",(0,t.jsx)(o.p,{children:"Este enfoque de separaci\xf3n de l\xf3gica puede aplicarse a otros componentes de la aplicaci\xf3n, lo que ayuda a mantener un c\xf3digo limpio y modular."})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,s.a)(),e.components);return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/itg-mobile-framework/implementation/05-Maintaining_component_architecture.md",route:"/itg-mobile-framework/implementation/05-Maintaining_component_architecture",timestamp:1719937282e3,pageMap:[{kind:"Meta",data:{"itg-mobile-framework":"ITG Mobile Framework"}},{kind:"Folder",name:"itg-mobile-framework",route:"/itg-mobile-framework",children:[{kind:"Folder",name:"2024",route:"/itg-mobile-framework/2024",children:[{kind:"MdxPage",name:"Go_live",route:"/itg-mobile-framework/2024/Go_live"},{kind:"Meta",data:{Go_live:"Go Live"}}]},{kind:"Meta",data:{introduction:"Introducci\xf3n","set-up":"Configuraci\xf3n de Ambiente","core-set-up":"Configuraci\xf3n CORE","initial-set-up":"Configuraci\xf3n Store Template",component_development:"C\xf3mo desarrollar tus componentes",components:"Componentes",implementation:"Implementaci\xf3n",plugins:"Desarrolla tu propio Plugin","release-notes":"Release Notes"}},{kind:"Folder",name:"component_development",route:"/itg-mobile-framework/component_development",children:[{kind:"Meta",data:{intro_to_component_development:"Introducci\xf3n al desarrollo de componentes",your_first_component:"Tu primer componente",render_your_components:"Renderiza tus componentes",style_your_components:"Estiliza tus componentes"}},{kind:"MdxPage",name:"intro_to_component_development",route:"/itg-mobile-framework/component_development/intro_to_component_development"},{kind:"MdxPage",name:"render_your_components",route:"/itg-mobile-framework/component_development/render_your_components"},{kind:"MdxPage",name:"style_your_components",route:"/itg-mobile-framework/component_development/style_your_components"},{kind:"MdxPage",name:"your_first_component",route:"/itg-mobile-framework/component_development/your_first_component"}]},{kind:"Folder",name:"components",route:"/itg-mobile-framework/components",children:[{kind:"MdxPage",name:"AddToCartButton",route:"/itg-mobile-framework/components/AddToCartButton"},{kind:"Folder",name:"Autocomplete",route:"/itg-mobile-framework/components/Autocomplete",children:[{kind:"MdxPage",name:"ProductSuggestions",route:"/itg-mobile-framework/components/Autocomplete/ProductSuggestions"},{kind:"MdxPage",name:"SearchSuggestions",route:"/itg-mobile-framework/components/Autocomplete/SearchSuggestions"},{kind:"MdxPage",name:"TopSearches",route:"/itg-mobile-framework/components/Autocomplete/TopSearches"},{kind:"Meta",data:{ProductSuggestions:"Product Suggestions",SearchSuggestions:"Search Suggestions",TopSearches:"Top Searches"}}]},{kind:"MdxPage",name:"CategoryMenu",route:"/itg-mobile-framework/components/CategoryMenu"},{kind:"MdxPage",name:"Checkout",route:"/itg-mobile-framework/components/Checkout"},{kind:"Folder",name:"Header",route:"/itg-mobile-framework/components/Header",children:[{kind:"MdxPage",name:"DeliveryInfo",route:"/itg-mobile-framework/components/Header/DeliveryInfo"},{kind:"MdxPage",name:"GoBack",route:"/itg-mobile-framework/components/Header/GoBack"},{kind:"MdxPage",name:"GoCart",route:"/itg-mobile-framework/components/Header/GoCart"},{kind:"MdxPage",name:"Header",route:"/itg-mobile-framework/components/Header/Header"},{kind:"MdxPage",name:"SearchBar",route:"/itg-mobile-framework/components/Header/SearchBar"},{kind:"Meta",data:{DeliveryInfo:"Delivery Info",GoBack:"Go Back",GoCart:"Go Cart",Header:"Header",SearchBar:"Search Bar"}}]},{kind:"MdxPage",name:"ImageList",route:"/itg-mobile-framework/components/ImageList"},{kind:"MdxPage",name:"ImageSlider",route:"/itg-mobile-framework/components/ImageSlider"},{kind:"MdxPage",name:"InfoCard",route:"/itg-mobile-framework/components/InfoCard"},{kind:"Folder",name:"Login",route:"/itg-mobile-framework/components/Login",children:[{kind:"MdxPage",name:"EmailInput",route:"/itg-mobile-framework/components/Login/EmailInput"},{kind:"MdxPage",name:"Login",route:"/itg-mobile-framework/components/Login/Login"},{kind:"MdxPage",name:"OtpAndPasswordScreen",route:"/itg-mobile-framework/components/Login/OtpAndPasswordScreen"},{kind:"MdxPage",name:"OtpInput",route:"/itg-mobile-framework/components/Login/OtpInput"},{kind:"MdxPage",name:"PasswordInput",route:"/itg-mobile-framework/components/Login/PasswordInput"},{kind:"Meta",data:{EmailInput:"Email Input",Login:"Login",OtpAndPasswordScreen:"OTP And Password Screen",OtpInput:"OTP Input",PasswordInput:"Password Input"}}]},{kind:"MdxPage",name:"MaintenanceScreen",route:"/itg-mobile-framework/components/MaintenanceScreen"},{kind:"MdxPage",name:"ModalCustom",route:"/itg-mobile-framework/components/ModalCustom"},{kind:"MdxPage",name:"NewsLetter",route:"/itg-mobile-framework/components/NewsLetter"},{kind:"Folder",name:"OrderDetail",route:"/itg-mobile-framework/components/OrderDetail",children:[{kind:"MdxPage",name:"OrderEstimatedDate",route:"/itg-mobile-framework/components/OrderDetail/OrderEstimatedDate"},{kind:"MdxPage",name:"OrderIdStatus",route:"/itg-mobile-framework/components/OrderDetail/OrderIdStatus"},{kind:"MdxPage",name:"OrderItemsInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderItemsInfo"},{kind:"MdxPage",name:"OrderPaymentMethod",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentMethod"},{kind:"MdxPage",name:"OrderPaymentSummary",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentSummary"},{kind:"MdxPage",name:"OrderShippingInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderShippingInfo"},{kind:"Meta",data:{OrderEstimatedDate:"Order Estimated Date",OrderIdStatus:"Order ID Status",OrderItemsInfo:"Order Items Info",OrderPaymentMethod:"Order Payment Method",OrderPaymentSummary:"Order Payment Summary",OrderShippingInfo:"Order Shipping Info"}}]},{kind:"Folder",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced",children:[{kind:"MdxPage",name:"ClientProfileData",route:"/itg-mobile-framework/components/OrderPlaced/ClientProfileData"},{kind:"MdxPage",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced/OrderPlaced"},{kind:"MdxPage",name:"PaymentSummary",route:"/itg-mobile-framework/components/OrderPlaced/PaymentSummary"},{kind:"MdxPage",name:"ShippingInfo",route:"/itg-mobile-framework/components/OrderPlaced/ShippingInfo"},{kind:"MdxPage",name:"TitleSection",route:"/itg-mobile-framework/components/OrderPlaced/TitleSection"},{kind:"Meta",data:{ClientProfileData:"Client Profile Data",OrderPlaced:"Order Placed",PaymentSummary:"Payment Summary",ShippingInfo:"Shipping Info",TitleSection:"Title Section"}}]},{kind:"Folder",name:"Product",route:"/itg-mobile-framework/components/Product",children:[{kind:"MdxPage",name:"ProductAddToCartButton",route:"/itg-mobile-framework/components/Product/ProductAddToCartButton"},{kind:"MdxPage",name:"ProductAvailableQuatity",route:"/itg-mobile-framework/components/Product/ProductAvailableQuatity"},{kind:"MdxPage",name:"ProductBrand",route:"/itg-mobile-framework/components/Product/ProductBrand"},{kind:"MdxPage",name:"ProductDescription",route:"/itg-mobile-framework/components/Product/ProductDescription"},{kind:"MdxPage",name:"ProductImages",route:"/itg-mobile-framework/components/Product/ProductImages"},{kind:"MdxPage",name:"ProductName",route:"/itg-mobile-framework/components/Product/ProductName"},{kind:"MdxPage",name:"ProductPrice",route:"/itg-mobile-framework/components/Product/ProductPrice"},{kind:"MdxPage",name:"ProductSkuSelector",route:"/itg-mobile-framework/components/Product/ProductSkuSelector"},{kind:"MdxPage",name:"ProductSpecifications",route:"/itg-mobile-framework/components/Product/ProductSpecifications"},{kind:"MdxPage",name:"README",route:"/itg-mobile-framework/components/Product/README"},{kind:"MdxPage",name:"SkuSelector",route:"/itg-mobile-framework/components/Product/SkuSelector"},{kind:"Meta",data:{ProductAddToCartButton:"Product Add To Cart Button",ProductAvailableQuatity:"Product Available Quantity",ProductBrand:"Product Brand",ProductDescription:"Product Description",productDetailSellers:"Product Detail Sellers",productDetailShareMedia:"Product Detail Share Media",ProductImages:"Product Images",ProductName:"Product Name",ProductPrice:"Product Price",ProductSkuSelector:"Product SKU Selector",ProductSpecifications:"Product Specifications",SkuSelector:"SKU Selector",README:"README"}},{kind:"MdxPage",name:"productDetailSellers",route:"/itg-mobile-framework/components/Product/productDetailSellers"},{kind:"MdxPage",name:"productDetailShareMedia",route:"/itg-mobile-framework/components/Product/productDetailShareMedia"}]},{kind:"MdxPage",name:"ProductList",route:"/itg-mobile-framework/components/ProductList"},{kind:"Folder",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary",children:[{kind:"MdxPage",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary/ProductSummary"},{kind:"MdxPage",name:"WishListButton",route:"/itg-mobile-framework/components/ProductSummary/WishListButton"},{kind:"Meta",data:{ProductSummary:"Product Summary",WishListButton:"Wish List Button"}}]},{kind:"Folder",name:"Profile",route:"/itg-mobile-framework/components/Profile",children:[{kind:"MdxPage",name:"DeleteAccountButton",route:"/itg-mobile-framework/components/Profile/DeleteAccountButton"},{kind:"MdxPage",name:"MyAccount",route:"/itg-mobile-framework/components/Profile/MyAccount"},{kind:"MdxPage",name:"PaymentMethods.d",route:"/itg-mobile-framework/components/Profile/PaymentMethods.d"},{kind:"MdxPage",name:"Profile",route:"/itg-mobile-framework/components/Profile/Profile"},{kind:"Meta",data:{DeleteAccountButton:"Delete Account Button",MyAccount:"My Account","PaymentMethods.d":"Payment Methods",Profile:"Profile"}}]},{kind:"Folder",name:"Search",route:"/itg-mobile-framework/components/Search",children:[{kind:"MdxPage",name:"BreadCrumb",route:"/itg-mobile-framework/components/Search/BreadCrumb"},{kind:"MdxPage",name:"SearchContent",route:"/itg-mobile-framework/components/Search/SearchContent"},{kind:"MdxPage",name:"SearchInfo",route:"/itg-mobile-framework/components/Search/SearchInfo"},{kind:"MdxPage",name:"SearchOrderBy",route:"/itg-mobile-framework/components/Search/SearchOrderBy"},{kind:"MdxPage",name:"SearchProductCount",route:"/itg-mobile-framework/components/Search/SearchProductCount"},{kind:"Meta",data:{BreadCrumb:"Breadcrumb",SearchContent:"Search Content",SearchInfo:"Search Info",SearchOrderBy:"Search Order By",SearchProductCount:"Search Product Count"}}]},{kind:"Folder",name:"ShippingData",route:"/itg-mobile-framework/components/ShippingData",children:[{kind:"MdxPage",name:"DeliveryMethod",route:"/itg-mobile-framework/components/ShippingData/DeliveryMethod"},{kind:"MdxPage",name:"ListItem",route:"/itg-mobile-framework/components/ShippingData/ListItem"},{kind:"MdxPage",name:"PickupMethod",route:"/itg-mobile-framework/components/ShippingData/PickupMethod"},{kind:"MdxPage",name:"ShippingOptions",route:"/itg-mobile-framework/components/ShippingData/ShippingOptions"},{kind:"Meta",data:{DeliveryMethod:"Delivery Method",ListItem:"List Item",PickupMethod:"Pickup Method",ShippingOptions:"Shipping Options"}}]},{kind:"Folder",name:"TabBar",route:"/itg-mobile-framework/components/TabBar",children:[{kind:"MdxPage",name:"TabBar",route:"/itg-mobile-framework/components/TabBar/TabBar"},{kind:"MdxPage",name:"TabItem",route:"/itg-mobile-framework/components/TabBar/TabItem"},{kind:"Meta",data:{TabBar:"Tab Bar",TabItem:"Tab Item"}}]},{kind:"MdxPage",name:"UpdateVersionModal",route:"/itg-mobile-framework/components/UpdateVersionModal"},{kind:"Folder",name:"Welcome",route:"/itg-mobile-framework/components/Welcome",children:[{kind:"MdxPage",name:"ImageBackground",route:"/itg-mobile-framework/components/Welcome/ImageBackground"},{kind:"MdxPage",name:"WelcomeComponent",route:"/itg-mobile-framework/components/Welcome/WelcomeComponent"},{kind:"Meta",data:{ImageBackground:"Image Background",WelcomeComponent:"Welcome Component"}}]},{kind:"Meta",data:{Autocomplete:"Autocomplete",Header:"Header",Login:"Login",OrderDetail:"Order Detail",OrderPlaced:"Order Placed",Product:"Product",ProductSummary:"Product Summary",Profile:"Profile",Search:"Search",ShippingData:"Shipping Data",TabBar:"Tab Bar",Welcome:"Welcome",AddToCartButton:"Add To Cart Button",CategoryMenu:"Category Menu",Checkout:"Checkout",ImageList:"Image List",ImageSlider:"Image Slider",InfoCard:"Info Card",MaintenanceScreen:"Maintenance Screen",ModalCustom:"Modal Custom",NewsLetter:"Newsletter",ProductList:"Product List",UpdateVersionModal:"Update Version Modal"}}]},{kind:"Folder",name:"core-set-up",route:"/itg-mobile-framework/core-set-up",children:[{kind:"Meta",data:{"what-is-core":"\xbfQu\xe9 es Core?","cms-plugin":"Configuraci\xf3n itg-cms-plugin","e-commerce-plugin":"Configuraci\xf3n itg-ecommerce-plugin",plugins:"Configuraci\xf3n de Plugins"}},{kind:"MdxPage",name:"cms-plugin",route:"/itg-mobile-framework/core-set-up/cms-plugin"},{kind:"MdxPage",name:"e-commerce-plugin",route:"/itg-mobile-framework/core-set-up/e-commerce-plugin"},{kind:"MdxPage",name:"plugins",route:"/itg-mobile-framework/core-set-up/plugins"},{kind:"MdxPage",name:"what-is-core",route:"/itg-mobile-framework/core-set-up/what-is-core"}]},{kind:"Folder",name:"implementation",route:"/itg-mobile-framework/implementation",children:[{kind:"MdxPage",name:"00-Previous_requirements",route:"/itg-mobile-framework/implementation/00-Previous_requirements"},{kind:"MdxPage",name:"01-Setting_up_environment",route:"/itg-mobile-framework/implementation/01-Setting_up_environment"},{kind:"MdxPage",name:"02-Configuring_store",route:"/itg-mobile-framework/implementation/02-Configuring_store"},{kind:"MdxPage",name:"03-Defining_styles",route:"/itg-mobile-framework/implementation/03-Defining_styles"},{kind:"MdxPage",name:"04-Customizing_components",route:"/itg-mobile-framework/implementation/04-Customizing_components"},{kind:"MdxPage",name:"05-Maintaining_component_architecture",route:"/itg-mobile-framework/implementation/05-Maintaining_component_architecture"},{kind:"MdxPage",name:"06-Following_good_practices",route:"/itg-mobile-framework/implementation/06-Following_good_practices"},{kind:"MdxPage",name:"07-Running_automated_tests",route:"/itg-mobile-framework/implementation/07-Running_automated_tests"},{kind:"MdxPage",name:"08-Debugging",route:"/itg-mobile-framework/implementation/08-Debugging"},{kind:"MdxPage",name:"09-Deploying",route:"/itg-mobile-framework/implementation/09-Deploying"},{kind:"Meta",data:{"00-Previous_requirements":"00 Previous Requirements","01-Setting_up_environment":"01 Setting up Environment","02-Configuring_store":"02 Configuring Store","03-Defining_styles":"03 Defining Styles","04-Customizing_components":"04 Customizing Components","05-Maintaining_component_architecture":"05 Maintaining Component Architecture","06-Following_good_practices":"06 following Good Practices","07-Running_automated_tests":"07 Running Automated Tests","08-Debugging":"08 Debugging","09-Deploying":"09 Deploying"}}]},{kind:"Folder",name:"initial-set-up",route:"/itg-mobile-framework/initial-set-up",children:[{kind:"Meta",data:{"store-set-up":"Store Template"}},{kind:"MdxPage",name:"store-set-up",route:"/itg-mobile-framework/initial-set-up/store-set-up"}]},{kind:"MdxPage",name:"introduction",route:"/itg-mobile-framework/introduction"},{kind:"Folder",name:"plugins",route:"/itg-mobile-framework/plugins",children:[{kind:"Meta",data:{plugin_development:"C\xf3mo desarrollar un plugin"}},{kind:"MdxPage",name:"plugin_development",route:"/itg-mobile-framework/plugins/plugin_development"}]},{kind:"Folder",name:"release-notes",route:"/itg-mobile-framework/release-notes",children:[{kind:"Folder",name:"2024",route:"/itg-mobile-framework/release-notes/2024",children:[{kind:"MdxPage",name:"Go_live",route:"/itg-mobile-framework/release-notes/2024/Go_live"},{kind:"Meta",data:{Go_live:"Go Live"}}]}]},{kind:"Folder",name:"set-up",route:"/itg-mobile-framework/set-up",children:[{kind:"MdxPage",name:"Enviroment_setup",route:"/itg-mobile-framework/set-up/Enviroment_setup"},{kind:"MdxPage",name:"Previous_requirements",route:"/itg-mobile-framework/set-up/Previous_requirements"},{kind:"MdxPage",name:"Project_structure",route:"/itg-mobile-framework/set-up/Project_structure"},{kind:"Meta",data:{Previous_requirements:"Requisitos previos",Enviroment_setup:"Configuraci\xf3n de ambiente",Project_structure:"\xbfQu\xe9 incluye el proyecto?"}}]}]}],flexsearch:{codeblocks:!0},title:"Arquitectura de componentes",headings:l},pageNextRoute:"/itg-mobile-framework/implementation/05-Maintaining_component_architecture",nextraLayout:i.ZP,themeConfig:a.Z};o.default=(0,r.j)(c)},8426:function(e,o,n){"use strict";var t=n(5893);n(7294);let r={logo:(0,t.jsx)("img",{src:"https://www.itglobers.com/hubfs/ITG-2.svg",height:"101",width:"200"}),primaryHue:{light:268,dark:27},primarySaturation:{light:48,dark:100},project:{link:"https://github.com/ITGlobers/itg-mobile-framework"},docsRepositoryBase:"https://github.com/ITGlobers/itg-mobile-framework-libraries/tree/develop/docs",footer:{text:"ITG CORE Framework"},sidebar:{toggleButton:!0}};o.Z=r},5789:function(){}},function(e){e.O(0,[9774,3873,4543,2888,179],function(){return e(e.s=6706)}),_N_E=e.O()}]);