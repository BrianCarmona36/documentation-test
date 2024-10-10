(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4696],{8375:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/itg-mobile-framework/core-set-up/plugins",function(){return n(6546)}])},6546:function(e,o,n){"use strict";n.r(o),n.d(o,{__toc:function(){return l}});var r=n(5893),t=n(2673),i=n(7913),a=n(8426);n(9128);var s=n(2643);let l=[{depth:2,value:"Tipos de plugins",id:"tipos-de-plugins"},{depth:3,value:"Consideraci\xf3n del tipo de plugin",id:"consideraci\xf3n-del-tipo-de-plugin"},{depth:2,value:"A\xf1adir Plugins a tu proyecto",id:"a\xf1adir-plugins-a-tu-proyecto"},{depth:3,value:"GlobalPlugins",id:"globalplugins"},{depth:4,value:"provider",id:"provider"},{depth:4,value:"props",id:"props"},{depth:3,value:"RoutePlugins",id:"routeplugins"},{depth:4,value:"provider",id:"provider-1"},{depth:4,value:"props",id:"props-1"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",ul:"ul",li:"li",h2:"h2",h3:"h3",code:"code",pre:"pre",span:"span",h4:"h4"},(0,s.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{children:"Configuraci\xf3n de Plugins"}),"\n",(0,r.jsxs)(o.p,{children:["Un plugin es una extensi\xf3n modular que a\xf1ade funcionalidades espec\xedficas a una aplicaci\xf3n sin alterar el n\xfacleo de la misma. Antes de usarla en tu aplicaci\xf3n deber\xe1s configurarla para que funcione correctamente con ",(0,r.jsx)(o.em,{children:"CORE"}),"."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Aprender\xe1s"})}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Tipos de Plugin"}),"\n",(0,r.jsx)(o.li,{children:"C\xf3mo configurar Plugins para toda tu aplicaci\xf3n"}),"\n",(0,r.jsx)(o.li,{children:"C\xf3mo configurar Plugins para rutas especificas de tu aplicaci\xf3n"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"tipos-de-plugins",children:"Tipos de plugins"}),"\n",(0,r.jsx)(o.p,{children:"Una vez hayas desarrollado un plugin para tu aplicaci\xf3n, podr\xe1s definir si sus contextos estar\xe1n disponibles para toda la aplicaci\xf3n o solo para rutas especificas. Por ejemplo, si tu aplicaci\xf3n usa un sistmea de puntos que se usa en toda la aplicaci\xf3n, convertir tu contexto en global para la aplicaci\xf3n es la mejor alternativa, ya que le permitir\xe1 a todos los componentes acceder a la informaci\xf3n que almacene. Ahora, si est\xe1s desarrollando una pagina de detalle de producto, quiz\xe1 quieras limitar el contexto de informaci\xf3n del producto solo a una ruta ya que no ser\xe1 usado por componentes por fuera de esa ruta."}),"\n",(0,r.jsx)(o.h3,{id:"consideraci\xf3n-del-tipo-de-plugin",children:"Consideraci\xf3n del tipo de plugin"}),"\n",(0,r.jsx)(o.p,{children:"Los plugins para rutas especificas est\xe1n limitados a usarse en una sola ruta. Si deseas usar un plugin, por ejemplo, solo en dos rutas deber\xe1s convertirlo en global a pesar de que no se vaya a usar en toda la aplicaci\xf3n."}),"\n",(0,r.jsxs)(o.p,{children:["Este comportamiento surge de la forma en que ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"CORE"})})," construye aplicaciones. Una vez tu aplicaci\xf3n se conecta a tu CMS obtendr\xe1 un ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"Array"})})," de rutas, sobre el que se iterar\xe1 para construir la navegaci\xf3n y el contenido de las mismas. Ya que es una iteraci\xf3n, cada ruta se construye de forma independiente a las dem\xe1s."]}),"\n",(0,r.jsxs)(o.p,{children:["Si tu aplicaci\xf3n tiene 2 rutas, que deseas envolver en un ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"MyPlugin"})}),", el resultado final de la construccion de rutas se ver\xeda as\xed"]}),"\n",(0,r.jsx)(o.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Stack.Screen"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"name"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ruta-uno'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"MyPlugin"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"SomeComponents"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"MyPlugin"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Stack.Screen"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Stack.Screen"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"name"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ruta-dos'"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"MyPlugin"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"SomeComponents"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"MyPlugin"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"Stack.Screen"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsxs)(o.p,{children:["Si bien los componentes de ambas rutas est\xe1n envueltos en ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.code,{children:"MyPlugin"})}),", se trata en realidad de dos contextos separados. Tal como indica React, “si renderizamos un mismo componente, uno al lado del otro, cada uno de ellos obtendr\xe1 sus propios e independientes estados”."]}),"\n",(0,r.jsx)(o.h2,{id:"a\xf1adir-plugins-a-tu-proyecto",children:"A\xf1adir Plugins a tu proyecto"}),"\n",(0,r.jsx)(o.p,{children:"En el repositorio de tu proyecto existe una carpeta llamada plugins con la siguiente estructura de archivos"}),"\n",(0,r.jsx)(o.h3,{id:"globalplugins",children:"GlobalPlugins"}),"\n",(0,r.jsx)(o.p,{children:"Encontrar\xe1s un arreglo de objetos. El orden de los plugins en el arreglo refleja el orden que mantendr\xe1n al momento de crear el arbol de contextos. Dado el siguiente arreglo de providers"}),"\n",(0,r.jsx)(o.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"globalPlugins"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"GlobalProviderConfig"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"[] "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    provider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ConfigProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    props"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { data"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { config } }"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    provider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" OrderFormProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    props"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    provider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" GlobalStylesProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    props"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" { data"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" GlobalStyles }"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"]"})})]})}),"\n",(0,r.jsx)(o.p,{children:"el arbol de contextos resultante es"}),"\n",(0,r.jsx)(o.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"ConfigProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"OrderFormProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"GlobalStylesProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"GlobalStylesProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"OrderFormProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"ConfigProvider"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsx)(o.p,{children:"Cada Plugin se representa a traves de un objeto con dos propiedades"}),"\n",(0,r.jsx)(o.h4,{id:"provider",children:"provider"}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1 el componente provider"}),"\n",(0,r.jsx)(o.h4,{id:"props",children:"props"}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1n las props que tu provider. Puedes pasar aqu\xed estados por defecto o funciones que sean necesarias para el funcionamiento de tu provider. Si no las necesita ser\xe1 un objeto vacio."}),"\n",(0,r.jsx)(o.h3,{id:"routeplugins",children:"RoutePlugins"}),"\n",(0,r.jsx)(o.p,{children:"Es un objeto, en el que la llave representar\xe1 la ruta a la que deseas asignar el plugin. El nombre de tu ruta deber\xe1 coincidir tanto en este archivo como en tu CMS. El valor, consistir\xe1 de"}),"\n",(0,r.jsx)(o.h4,{id:"provider-1",children:"provider"}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1 el componente provider"}),"\n",(0,r.jsx)(o.h4,{id:"props-1",children:"props"}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1n las props que tu provider. Puedes pasar aqu\xed estados por defecto o funciones que sean necesarias para el funcionamiento de tu provider. Si no las necesita ser\xe1 un objeto vacio."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,s.a)(),e.components);return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/itg-mobile-framework/core-set-up/plugins.mdx",route:"/itg-mobile-framework/core-set-up/plugins",timestamp:1724170831e3,pageMap:[{kind:"Meta",data:{"itg-mobile-framework":"ITG Mobile Framework"}},{kind:"Folder",name:"itg-mobile-framework",route:"/itg-mobile-framework",children:[{kind:"Meta",data:{introduction:"Introducci\xf3n","set-up":"Configuraci\xf3n de Ambiente","core-set-up":"Configuraci\xf3n CORE","initial-set-up":"Configuraci\xf3n Store Template",component_development:"C\xf3mo desarrollar tus componentes",components:"Componentes",plugins:"Desarrolla tu propio Plugin","release-notes":"Release Notes",implementation:"[EXPERIMENTAL] Implementaci\xf3n"}},{kind:"Folder",name:"component_development",route:"/itg-mobile-framework/component_development",children:[{kind:"Meta",data:{intro_to_component_development:"Introducci\xf3n al desarrollo de componentes",your_first_component:"Tu primer componente",render_your_components:"Renderiza tus componentes",style_your_components:"Estiliza tus componentes"}},{kind:"MdxPage",name:"intro_to_component_development",route:"/itg-mobile-framework/component_development/intro_to_component_development"},{kind:"MdxPage",name:"render_your_components",route:"/itg-mobile-framework/component_development/render_your_components"},{kind:"MdxPage",name:"style_your_components",route:"/itg-mobile-framework/component_development/style_your_components"},{kind:"MdxPage",name:"your_first_component",route:"/itg-mobile-framework/component_development/your_first_component"}]},{kind:"Folder",name:"components",route:"/itg-mobile-framework/components",children:[{kind:"MdxPage",name:"AddToCartButton",route:"/itg-mobile-framework/components/AddToCartButton"},{kind:"Folder",name:"Autocomplete",route:"/itg-mobile-framework/components/Autocomplete",children:[{kind:"MdxPage",name:"ProductSuggestions",route:"/itg-mobile-framework/components/Autocomplete/ProductSuggestions"},{kind:"MdxPage",name:"SearchSuggestions",route:"/itg-mobile-framework/components/Autocomplete/SearchSuggestions"},{kind:"MdxPage",name:"TopSearches",route:"/itg-mobile-framework/components/Autocomplete/TopSearches"},{kind:"Meta",data:{ProductSuggestions:"Product Suggestions",SearchSuggestions:"Search Suggestions",TopSearches:"Top Searches"}}]},{kind:"MdxPage",name:"CategoryMenu",route:"/itg-mobile-framework/components/CategoryMenu"},{kind:"MdxPage",name:"Checkout",route:"/itg-mobile-framework/components/Checkout"},{kind:"MdxPage",name:"EmptyState",route:"/itg-mobile-framework/components/EmptyState"},{kind:"Folder",name:"Header",route:"/itg-mobile-framework/components/Header",children:[{kind:"MdxPage",name:"DeliveryInfo",route:"/itg-mobile-framework/components/Header/DeliveryInfo"},{kind:"MdxPage",name:"GoBack",route:"/itg-mobile-framework/components/Header/GoBack"},{kind:"MdxPage",name:"GoCart",route:"/itg-mobile-framework/components/Header/GoCart"},{kind:"MdxPage",name:"Header",route:"/itg-mobile-framework/components/Header/Header"},{kind:"MdxPage",name:"SearchBar",route:"/itg-mobile-framework/components/Header/SearchBar"},{kind:"Meta",data:{DeliveryInfo:"Delivery Info",GoBack:"Go Back",GoCart:"Go Cart",Header:"Header",SearchBar:"Search Bar",headerImplementation:"Personaliza el Header de tu App"}},{kind:"MdxPage",name:"headerImplementation",route:"/itg-mobile-framework/components/Header/headerImplementation"}]},{kind:"MdxPage",name:"ImageList",route:"/itg-mobile-framework/components/ImageList"},{kind:"MdxPage",name:"ImageSlider",route:"/itg-mobile-framework/components/ImageSlider"},{kind:"MdxPage",name:"InfoCard",route:"/itg-mobile-framework/components/InfoCard"},{kind:"Folder",name:"Login",route:"/itg-mobile-framework/components/Login",children:[{kind:"MdxPage",name:"EmailInput",route:"/itg-mobile-framework/components/Login/EmailInput"},{kind:"MdxPage",name:"Login",route:"/itg-mobile-framework/components/Login/Login"},{kind:"MdxPage",name:"OtpAndPasswordScreen",route:"/itg-mobile-framework/components/Login/OtpAndPasswordScreen"},{kind:"MdxPage",name:"OtpInput",route:"/itg-mobile-framework/components/Login/OtpInput"},{kind:"MdxPage",name:"PasswordInput",route:"/itg-mobile-framework/components/Login/PasswordInput"},{kind:"Meta",data:{EmailInput:"Email Input",Login:"Login",OtpAndPasswordScreen:"OTP And Password Screen",OtpInput:"OTP Input",PasswordInput:"Password Input"}}]},{kind:"MdxPage",name:"MaintenanceScreen",route:"/itg-mobile-framework/components/MaintenanceScreen"},{kind:"MdxPage",name:"ModalCustom",route:"/itg-mobile-framework/components/ModalCustom"},{kind:"MdxPage",name:"NewsLetter",route:"/itg-mobile-framework/components/NewsLetter"},{kind:"Folder",name:"OrderDetail",route:"/itg-mobile-framework/components/OrderDetail",children:[{kind:"MdxPage",name:"OrderEstimatedDate",route:"/itg-mobile-framework/components/OrderDetail/OrderEstimatedDate"},{kind:"MdxPage",name:"OrderIdStatus",route:"/itg-mobile-framework/components/OrderDetail/OrderIdStatus"},{kind:"MdxPage",name:"OrderItemsInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderItemsInfo"},{kind:"MdxPage",name:"OrderPaymentMethod",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentMethod"},{kind:"MdxPage",name:"OrderPaymentSummary",route:"/itg-mobile-framework/components/OrderDetail/OrderPaymentSummary"},{kind:"MdxPage",name:"OrderShippingInfo",route:"/itg-mobile-framework/components/OrderDetail/OrderShippingInfo"},{kind:"Meta",data:{OrderEstimatedDate:"Order Estimated Date",OrderIdStatus:"Order ID Status",OrderItemsInfo:"Order Items Info",OrderPaymentMethod:"Order Payment Method",OrderPaymentSummary:"Order Payment Summary",OrderShippingInfo:"Order Shipping Info"}}]},{kind:"Folder",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced",children:[{kind:"MdxPage",name:"ClientProfileData",route:"/itg-mobile-framework/components/OrderPlaced/ClientProfileData"},{kind:"MdxPage",name:"OrderPlaced",route:"/itg-mobile-framework/components/OrderPlaced/OrderPlaced"},{kind:"MdxPage",name:"OrdersButton",route:"/itg-mobile-framework/components/OrderPlaced/OrdersButton"},{kind:"MdxPage",name:"OrdersGroupInfo",route:"/itg-mobile-framework/components/OrderPlaced/OrdersGroupInfo"},{kind:"MdxPage",name:"PaymentSummary",route:"/itg-mobile-framework/components/OrderPlaced/PaymentSummary"},{kind:"MdxPage",name:"ShippingInfo",route:"/itg-mobile-framework/components/OrderPlaced/ShippingInfo"},{kind:"MdxPage",name:"ThankYouMessage",route:"/itg-mobile-framework/components/OrderPlaced/ThankYouMessage"},{kind:"MdxPage",name:"TitleSection",route:"/itg-mobile-framework/components/OrderPlaced/TitleSection"},{kind:"Meta",data:{ClientProfileData:"Client Profile Data",OrderPlaced:"Order Placed",OrdersButton:"Orders Button",OrdersGroupInfo:"Orders Group Info",PaymentSummary:"Payment Summary",ShippingInfo:"Shipping Info",ThankYouMessage:" Thank You Message",TitleSection:"Title Section"}}]},{kind:"Folder",name:"Product",route:"/itg-mobile-framework/components/Product",children:[{kind:"MdxPage",name:"ProductAddToCartButton",route:"/itg-mobile-framework/components/Product/ProductAddToCartButton"},{kind:"MdxPage",name:"ProductAvailableQuatity",route:"/itg-mobile-framework/components/Product/ProductAvailableQuatity"},{kind:"MdxPage",name:"ProductBrand",route:"/itg-mobile-framework/components/Product/ProductBrand"},{kind:"MdxPage",name:"ProductDescription",route:"/itg-mobile-framework/components/Product/ProductDescription"},{kind:"MdxPage",name:"ProductDetailQuantitySelector",route:"/itg-mobile-framework/components/Product/ProductDetailQuantitySelector"},{kind:"MdxPage",name:"ProductImages",route:"/itg-mobile-framework/components/Product/ProductImages"},{kind:"MdxPage",name:"ProductName",route:"/itg-mobile-framework/components/Product/ProductName"},{kind:"MdxPage",name:"ProductPrice",route:"/itg-mobile-framework/components/Product/ProductPrice"},{kind:"MdxPage",name:"ProductSkuSelector",route:"/itg-mobile-framework/components/Product/ProductSkuSelector"},{kind:"MdxPage",name:"ProductSpecifications",route:"/itg-mobile-framework/components/Product/ProductSpecifications"},{kind:"MdxPage",name:"README",route:"/itg-mobile-framework/components/Product/README"},{kind:"MdxPage",name:"SkuSelector",route:"/itg-mobile-framework/components/Product/SkuSelector"},{kind:"Meta",data:{ProductAddToCartButton:"Product Add To Cart Button",ProductAvailableQuatity:"Product Available Quantity",ProductBrand:"Product Brand",ProductDescription:"Product Description",productDetailSellers:"Product Detail Sellers",productDetailShareMedia:"Product Detail Share Media",ProductImages:"Product Images",ProductName:"Product Name",ProductPrice:"Product Price",ProductSkuSelector:"Product SKU Selector",ProductSpecifications:"Product Specifications",SkuSelector:"SKU Selector",ProductDetailQuantitySelector:"Product Quantity Selector",README:"README"}},{kind:"MdxPage",name:"productDetailSellers",route:"/itg-mobile-framework/components/Product/productDetailSellers"},{kind:"MdxPage",name:"productDetailShareMedia",route:"/itg-mobile-framework/components/Product/productDetailShareMedia"}]},{kind:"MdxPage",name:"ProductList",route:"/itg-mobile-framework/components/ProductList"},{kind:"Folder",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary",children:[{kind:"MdxPage",name:"ProductSummary",route:"/itg-mobile-framework/components/ProductSummary/ProductSummary"},{kind:"MdxPage",name:"WishListButton",route:"/itg-mobile-framework/components/ProductSummary/WishListButton"},{kind:"Meta",data:{ProductSummary:"Product Summary",WishListButton:"Wish List Button"}}]},{kind:"Folder",name:"Profile",route:"/itg-mobile-framework/components/Profile",children:[{kind:"MdxPage",name:"DeleteAccountButton",route:"/itg-mobile-framework/components/Profile/DeleteAccountButton"},{kind:"MdxPage",name:"MyAccount",route:"/itg-mobile-framework/components/Profile/MyAccount"},{kind:"MdxPage",name:"OrdersList",route:"/itg-mobile-framework/components/Profile/OrdersList"},{kind:"MdxPage",name:"PaymentMethods",route:"/itg-mobile-framework/components/Profile/PaymentMethods"},{kind:"MdxPage",name:"Profile",route:"/itg-mobile-framework/components/Profile/Profile"},{kind:"MdxPage",name:"WishListPage",route:"/itg-mobile-framework/components/Profile/WishListPage"},{kind:"Meta",data:{DeleteAccountButton:"Delete Account Button",MyAccount:"My Account",OrdersList:"Orders List",PaymentMethods:"Payment Methods",Profile:"Profile",WishListPage:"Wish List Page"}}]},{kind:"Folder",name:"Search",route:"/itg-mobile-framework/components/Search",children:[{kind:"MdxPage",name:"BreadCrumb",route:"/itg-mobile-framework/components/Search/BreadCrumb"},{kind:"MdxPage",name:"SearchContent",route:"/itg-mobile-framework/components/Search/SearchContent"},{kind:"MdxPage",name:"SearchInfo",route:"/itg-mobile-framework/components/Search/SearchInfo"},{kind:"MdxPage",name:"SearchOrderBy",route:"/itg-mobile-framework/components/Search/SearchOrderBy"},{kind:"MdxPage",name:"SearchProductCount",route:"/itg-mobile-framework/components/Search/SearchProductCount"},{kind:"Meta",data:{BreadCrumb:"Breadcrumb",SearchContent:"Search Content",SearchInfo:"Search Info",SearchOrderBy:"Search Order By",SearchProductCount:"Search Product Count"}}]},{kind:"Folder",name:"ShippingData",route:"/itg-mobile-framework/components/ShippingData",children:[{kind:"MdxPage",name:"DeliveryMethod",route:"/itg-mobile-framework/components/ShippingData/DeliveryMethod"},{kind:"MdxPage",name:"ListItem",route:"/itg-mobile-framework/components/ShippingData/ListItem"},{kind:"MdxPage",name:"PickupMethod",route:"/itg-mobile-framework/components/ShippingData/PickupMethod"},{kind:"MdxPage",name:"ShippingOptions",route:"/itg-mobile-framework/components/ShippingData/ShippingOptions"},{kind:"Meta",data:{DeliveryMethod:"Delivery Method",ListItem:"List Item",PickupMethod:"Pickup Method",ShippingOptions:"Shipping Options"}}]},{kind:"Folder",name:"TabBar",route:"/itg-mobile-framework/components/TabBar",children:[{kind:"MdxPage",name:"TabBar",route:"/itg-mobile-framework/components/TabBar/TabBar"},{kind:"MdxPage",name:"TabItem",route:"/itg-mobile-framework/components/TabBar/TabItem"},{kind:"Meta",data:{TabBar:"Tab Bar",TabItem:"Tab Item",tabBarImplementation:"Personaliza el tabBar de tu App"}},{kind:"MdxPage",name:"tabBarImplementation",route:"/itg-mobile-framework/components/TabBar/tabBarImplementation"}]},{kind:"MdxPage",name:"UpdateVersionModal",route:"/itg-mobile-framework/components/UpdateVersionModal"},{kind:"Folder",name:"Welcome",route:"/itg-mobile-framework/components/Welcome",children:[{kind:"MdxPage",name:"ImageBackground",route:"/itg-mobile-framework/components/Welcome/ImageBackground"},{kind:"MdxPage",name:"WelcomeComponent",route:"/itg-mobile-framework/components/Welcome/WelcomeComponent"},{kind:"Meta",data:{ImageBackground:"Image Background",WelcomeComponent:"Welcome Component"}}]},{kind:"Meta",data:{Autocomplete:"Autocomplete",Header:"Header",Login:"Login",OrderDetail:"Order Detail",OrderPlaced:"Order Placed",Product:"Product",ProductSummary:"Product Summary",Profile:"Profile",Search:"Search",ShippingData:"Shipping Data",TabBar:"Tab Bar",Welcome:"Welcome",AddToCartButton:"Add To Cart Button",CategoryMenu:"Category Menu",Checkout:"Checkout",ImageList:"Image List",ImageSlider:"Image Slider",InfoCard:"Info Card",MaintenanceScreen:"Maintenance Screen",ModalCustom:"Modal Custom",NewsLetter:"Newsletter",ProductList:"Product List",UpdateVersionModal:"Update Version Modal",EmptyState:"Emptystate"}}]},{kind:"Folder",name:"core-set-up",route:"/itg-mobile-framework/core-set-up",children:[{kind:"Meta",data:{"what-is-core":"\xbfQu\xe9 es Core?","cms-plugin":"Configuraci\xf3n itg-cms-plugin","e-commerce-plugin":"Configuraci\xf3n itg-ecommerce-plugin",plugins:"Configuraci\xf3n de Plugins"}},{kind:"MdxPage",name:"cms-plugin",route:"/itg-mobile-framework/core-set-up/cms-plugin"},{kind:"MdxPage",name:"e-commerce-plugin",route:"/itg-mobile-framework/core-set-up/e-commerce-plugin"},{kind:"MdxPage",name:"plugins",route:"/itg-mobile-framework/core-set-up/plugins"},{kind:"MdxPage",name:"what-is-core",route:"/itg-mobile-framework/core-set-up/what-is-core"}]},{kind:"Folder",name:"implementation",route:"/itg-mobile-framework/implementation",children:[{kind:"MdxPage",name:"00-Previous_requirements",route:"/itg-mobile-framework/implementation/00-Previous_requirements"},{kind:"MdxPage",name:"01-Setting_up_environment",route:"/itg-mobile-framework/implementation/01-Setting_up_environment"},{kind:"MdxPage",name:"02-Configuring_store",route:"/itg-mobile-framework/implementation/02-Configuring_store"},{kind:"MdxPage",name:"03-Defining_styles",route:"/itg-mobile-framework/implementation/03-Defining_styles"},{kind:"MdxPage",name:"04-Customizing_components",route:"/itg-mobile-framework/implementation/04-Customizing_components"},{kind:"MdxPage",name:"05-Maintaining_component_architecture",route:"/itg-mobile-framework/implementation/05-Maintaining_component_architecture"},{kind:"MdxPage",name:"06-Following_good_practices",route:"/itg-mobile-framework/implementation/06-Following_good_practices"},{kind:"MdxPage",name:"07-Running_automated_tests",route:"/itg-mobile-framework/implementation/07-Running_automated_tests"},{kind:"MdxPage",name:"08-Debugging",route:"/itg-mobile-framework/implementation/08-Debugging"},{kind:"MdxPage",name:"09-Deploying",route:"/itg-mobile-framework/implementation/09-Deploying"},{kind:"Meta",data:{"00-Previous_requirements":"00 Previous Requirements","01-Setting_up_environment":"01 Setting up Environment","02-Configuring_store":"02 Configuring Store","03-Defining_styles":"03 Defining Styles","04-Customizing_components":"04 Customizing Components","05-Maintaining_component_architecture":"05 Maintaining Component Architecture","06-Following_good_practices":"06 following Good Practices","07-Running_automated_tests":"07 Running Automated Tests","08-Debugging":"08 Debugging","09-Deploying":"09 Deploying"}}]},{kind:"Folder",name:"initial-set-up",route:"/itg-mobile-framework/initial-set-up",children:[{kind:"Meta",data:{"store-set-up":"Store Template"}},{kind:"MdxPage",name:"store-set-up",route:"/itg-mobile-framework/initial-set-up/store-set-up"}]},{kind:"MdxPage",name:"introduction",route:"/itg-mobile-framework/introduction"},{kind:"Folder",name:"plugins",route:"/itg-mobile-framework/plugins",children:[{kind:"Meta",data:{plugin_development:"C\xf3mo desarrollar un plugin"}},{kind:"MdxPage",name:"plugin_development",route:"/itg-mobile-framework/plugins/plugin_development"}]},{kind:"Folder",name:"release-notes",route:"/itg-mobile-framework/release-notes",children:[{kind:"Folder",name:"2024",route:"/itg-mobile-framework/release-notes/2024",children:[{kind:"MdxPage",name:"Go_live",route:"/itg-mobile-framework/release-notes/2024/Go_live"},{kind:"Meta",data:{Go_live:"Go Live"}}]}]},{kind:"Folder",name:"set-up",route:"/itg-mobile-framework/set-up",children:[{kind:"MdxPage",name:"Enviroment_setup",route:"/itg-mobile-framework/set-up/Enviroment_setup"},{kind:"MdxPage",name:"Previous_requirements",route:"/itg-mobile-framework/set-up/Previous_requirements"},{kind:"MdxPage",name:"Project_structure",route:"/itg-mobile-framework/set-up/Project_structure"},{kind:"Meta",data:{Previous_requirements:"Requisitos previos",Enviroment_setup:"Configuraci\xf3n de ambiente",Project_structure:"\xbfQu\xe9 incluye el proyecto?"}}]}]}],flexsearch:{codeblocks:!0},title:"Configuraci\xf3n de Plugins",headings:l},pageNextRoute:"/itg-mobile-framework/core-set-up/plugins",nextraLayout:i.ZP,themeConfig:a.Z};o.default=(0,t.j)(d)},8426:function(e,o,n){"use strict";var r=n(5893);n(7294);let t={logo:(0,r.jsx)("img",{src:"https://www.itglobers.com/hubfs/ITG-2.svg",height:"101",width:"200"}),primaryHue:{light:268,dark:27},primarySaturation:{light:48,dark:100},project:{link:"https://github.com/ITGlobers/itg-mobile-framework"},docsRepositoryBase:"https://github.com/ITGlobers/itg-mobile-framework-libraries/tree/develop/docs",footer:{text:"ITG CORE Framework"},sidebar:{toggleButton:!0}};o.Z=t},5789:function(){}},function(e){e.O(0,[9774,3873,4543,2888,179],function(){return e(e.s=8375)}),_N_E=e.O()}]);