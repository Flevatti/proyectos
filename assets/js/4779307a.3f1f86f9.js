"use strict";(self.webpackChunklenguaje=self.webpackChunklenguaje||[]).push([[862],{8160:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=e(5893),a=e(1151);const o={},l="Proyectos Frontend",i={id:"frontend/README",title:"Proyectos Frontend",description:"Calculadora",source:"@site/docs/frontend/README.md",sourceDirName:"frontend",slug:"/frontend/",permalink:"/proyectos/docs/frontend/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/README.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Calculadora",id:"calculadora",level:2},{value:"Archivos compartidos",id:"archivos-compartidos",level:3},{value:"React",id:"react",level:3},{value:"Vue",id:"vue",level:3}];function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,a.a)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"proyectos-frontend",children:"Proyectos Frontend"}),"\n",(0,t.jsx)(n.h2,{id:"calculadora",children:"Calculadora"}),"\n",(0,t.jsx)(n.h3,{id:"archivos-compartidos",children:"Archivos compartidos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="utils/getOperation.js"',children:'const getOperation = (result, operatorList) => {\r\n  let subtraction = result.indexOf("-");\r\n  let addition = result.indexOf("+");\r\n  let division = result.indexOf("/");\r\n  let multiplication = result.indexOf("*");\r\n  let numberOne;\r\n  let numberTwo;\r\n  let operation;\r\n  let index = "";\r\n  if (division != -1 && multiplication != -1) {\r\n    if (division < multiplication) {\r\n      index = division;\r\n      operation = "/";\r\n    } else {\r\n      index = multiplication;\r\n      operation = "*";\r\n    }\r\n  } else if (division != -1) {\r\n    index = division;\r\n    operation = "/";\r\n  } else if (multiplication != -1) {\r\n    index = multiplication;\r\n    operation = "*";\r\n  }\r\n  if (index === "") {\r\n    if (subtraction != -1 && addition != -1) {\r\n      if (subtraction < addition) {\r\n        index = subtraction;\r\n        operation = "-";\r\n      } else {\r\n        index = addition;\r\n        operation = "+";\r\n      }\r\n    } else if (subtraction != -1) {\r\n      index = subtraction;\r\n      operation = "-";\r\n    } else if (addition != -1) {\r\n      index = addition;\r\n      operation = "+";\r\n    }\r\n  }\r\n\r\n  if (index != "") {\r\n    numberOne = getNumberOne(index, result, operatorList);\r\n\r\n    numberTwo = getNumberTwo(index, result, operatorList);\r\n  }\r\n\r\n  return { numberOne, numberTwo, operation };\r\n};\r\nconst getNumberOne = (index, result, operatorList) => {\r\n  let findNumberOne = false;\r\n  let numberOne = "";\r\n  for (let i = index - 1; !findNumberOne; i--) {\r\n    if (i <= -1 || operatorList.includes(result[i])) {\r\n      findNumberOne = true;\r\n    } else {\r\n      numberOne += String(result[i]);\r\n    }\r\n  }\r\n  numberOne = numberOne.split("").reverse().join("");\r\n  return numberOne;\r\n};\r\n\r\nconst getNumberTwo = (index, result, operatorList) => {\r\n  let findNumberTwo = false;\r\n  let numberTwo = "";\r\n  for (let i = index + 1; !findNumberTwo; i++) {\r\n    if (i >= result.split("").length || operatorList.includes(result[i])) {\r\n      findNumberTwo = true;\r\n    } else {\r\n      numberTwo += String(result[i]);\r\n    }\r\n  }\r\n  return numberTwo;\r\n};\r\nexport default getOperation;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="utils/perfomCalculation"',children:'import performOperation from "./performOperation";\r\nimport getOperation from "./getOperation";\r\n\r\nconst perfomCalculation = (result, availableOperators) => {\r\n  let modifiedResult = String(result);\r\n\r\n  let calculation = getOperation(result, availableOperators);\r\n\r\n  if (\r\n    !calculation.numberOne ||\r\n    !calculation.numberTwo ||\r\n    !calculation.operation\r\n  ) {\r\n    return { modifiedResult, last: true };\r\n  }\r\n\r\n  modifiedResult = result.replace(\r\n    calculation.numberOne + calculation.operation + calculation.numberTwo,\r\n    performOperation(\r\n      calculation.operation,\r\n      calculation.numberOne + calculation.operation + calculation.numberTwo\r\n    )\r\n  );\r\n\r\n  return { modifiedResult, last: null };\r\n};\r\n\r\nexport default perfomCalculation;\r\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="utils/perfomOperation"',children:'const performOperation = (operator, result) => {\r\n  const numbers = result.split(operator);\r\n  switch (operator) {\r\n    case "+":\r\n      return numbers.reduce((accumulator, currentValue) => {\r\n        return parseInt(accumulator) + parseInt(currentValue);\r\n      });\r\n\r\n    case "-":\r\n      return numbers.reduce((accumulator, currentValue) => {\r\n        return parseInt(accumulator) - parseInt(currentValue);\r\n      });\r\n\r\n    case "*":\r\n      return numbers.reduce((accumulator, currentValue) => {\r\n        return parseInt(accumulator) * parseInt(currentValue);\r\n      });\r\n\r\n    case "/":\r\n      return numbers.reduce((accumulator, currentValue) => {\r\n        return parseInt(accumulator) / parseInt(currentValue);\r\n      });\r\n  }\r\n};\r\n\r\nexport default performOperation;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"react",children:"React"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\r\n  "name": "react-project",\r\n  "private": true,\r\n  "version": "0.0.0",\r\n  "type": "module",\r\n  "scripts": {\r\n    "dev": "vite",\r\n    "build": "vite build",\r\n    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",\r\n    "preview": "vite preview"\r\n  },\r\n  "dependencies": {\r\n    "@chakra-ui/icons": "^2.1.1",\r\n    "@chakra-ui/react": "^2.8.2",\r\n    "@emotion/react": "^11.11.3",\r\n    "@emotion/styled": "^11.11.0",\r\n    "framer-motion": "^10.18.0",\r\n    "prop-types": "^15.8.1",\r\n    "react": "^18.2.0",\r\n    "react-dom": "^18.2.0"\r\n  },\r\n  "devDependencies": {\r\n    "@types/react": "^18.2.43",\r\n    "@types/react-dom": "^18.2.17",\r\n    "@vitejs/plugin-react": "^4.2.1",\r\n    "eslint": "^8.55.0",\r\n    "eslint-plugin-react": "^7.33.2",\r\n    "eslint-plugin-react-hooks": "^4.6.0",\r\n    "eslint-plugin-react-refresh": "^0.4.5",\r\n    "vite": "^5.0.8"\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/main.jsx"',children:"import React from 'react'\r\nimport ReactDOM from 'react-dom/client'\r\nimport App from './App.jsx'\r\n// Estilo CSS Global\r\nimport './index.css'\r\nimport { ChakraProvider } from '@chakra-ui/react'\r\nReactDOM.createRoot(document.getElementById('root')).render(\r\n  <React.StrictMode>\r\n       <ChakraProvider>\r\n       <App />\r\n       </ChakraProvider>\r\n   \r\n  </React.StrictMode>,\r\n)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="src/index.css"',children:"\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/App.jsx"',children:"import {   Center} from '@chakra-ui/react'\r\nimport './app.css'\r\nimport Calculator from './components/calculator'\r\nfunction App() {\r\n  return (\r\n    <>\r\n        <Center >\r\n     <Calculator/>\r\n     </Center>\r\n    </>\r\n  )\r\n}\r\n\r\nexport default App\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="src/app.css"',children:".calculadora {\r\n    background:red;\r\n    width:800px;\r\n    height:800px;\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Calculator.jsx"',children:"\r\nimport {       Flex , Button } from '@chakra-ui/react'\r\nimport { useState } from 'react';\r\nimport { useToast } from '@chakra-ui/react'\r\nimport perfomCalculation from '../utils/perfomCalculation';\r\nimport Result from './Result';\r\nimport CalculatorButton from './CalculatorButtons';\r\nconst Calculator = () => {\r\n  const toast = useToast();\r\n  \r\n   \r\n \r\n  \r\n    const  [result , setResult] = useState('');\r\n      const handleButton = (value ,  availableOperators) => {\r\n         \r\n          if (availableOperators.includes(result[result.length - 1]) && availableOperators.includes(value)) {\r\n                   toast({\r\n                title: `Ya a\xf1adiste el operador  \"${ result[result.length - 1]}\" `,\r\n                description: \"\",\r\n                status: 'warning',\r\n                duration: 2000,\r\n                isClosable: true,\r\n              })\r\n              return;\r\n          }\r\n          if (value === '=') {\r\n            let finalResult = perfomCalculation(String(result) , availableOperators);\r\n          while (!finalResult.last) {\r\n            finalResult = perfomCalculation(String(finalResult.modifiedResult) , availableOperators);\r\n          }\r\n          setResult(String(finalResult.modifiedResult));\r\n            return;\r\n        }\r\n          setResult( String(result) + value);\r\n\r\n      }\r\n\r\n  return (\r\n    <>\r\n    <Flex flexDirection=\"column\" border=\"1px solid #dddddd\" padding=\"10px\" mt=\"100px\" backgroundColor={\"#1F3B4D\"}>\r\n    <Result result={result}/>\r\n    <CalculatorButton handleButton={handleButton}/>\r\n<Button  colorScheme='red' mt=\"5\"  onClick={() => {\r\n   setResult('')\r\n}}>\r\n  Resetear\r\n</Button> \r\n</Flex>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Calculator;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/CalculatorButton.jsx"',children:'import { Box ,   Grid, GridItem   , Button } from \'@chakra-ui/react\'\r\nimport PropTypes from \'prop-types\';\r\nconst CalculatorButton = ( {handleButton}) => {\r\n    const availableOperators = ["+" , "*" , "-" , "/"];\r\n    const buttons = [\r\n        {number: "0" , value : 0} , \r\n        {number: "1" , value : 1} , \r\n        {number: "2" , value : 2} , \r\n        {number: "3" , value : 3} , \r\n        {number: "4" , value : 4} , \r\n        {number: "5" , value : 5} , \r\n        {number: "6" , value : 6} , \r\n        {number: "7" , value : 7} , \r\n        {number: "8" , value : 8} , \r\n        {number: "9" , value : 9} , \r\n       ];\r\n    return (<>  <Box w="200px"    borderRadius="5px" padding="5px" border="1px solid #1F3B4D">\r\n  \r\n    <Grid templateColumns=\'repeat(3, 40px)\' gap={2} justifyContent="space-evenly" padding="10px">\r\n     {\r\n       buttons.map((item) => (\r\n     <GridItem key={item.number}>\r\n   <Button   _hover={{\r\n      backgroundColor:"#1B1A17"\r\n   }}  backgroundColor={"#040D12"} color={"#fff"} onClick={() => {\r\n    handleButton(item.value , availableOperators)\r\n   }}>\r\n     {item.number}\r\n   </Button> \r\n   </GridItem>  \r\n       ))\r\n     }\r\n\r\n     {\r\n        availableOperators.map(item =>  (\r\n            <GridItem  key={item}>\r\n            <Button    _hover={{\r\n               backgroundColor:"#1B1A17"\r\n            }}   backgroundColor={"#040D12"} color={"#fff"}  onClick={() => {\r\n             handleButton(String(item) , availableOperators)\r\n            }}>\r\n              {item}\r\n            </Button> \r\n            </GridItem>  \r\n        ))\r\n     }\r\n   <GridItem >\r\n   <Button  _hover={{\r\n      backgroundColor:"#19ad9f"\r\n   }}   backgroundColor={"#00A495"}  color={"#fff"}   onClick={()=> {\r\n    handleButton("=" , availableOperators)\r\n   }\r\n   }>\r\n     = \r\n   </Button> \r\n   </GridItem>  \r\n   </Grid>\r\n   </Box></>)\r\n   \r\n}\r\nCalculatorButton.propTypes  = {\r\n    handleButton: PropTypes.func\r\n  }\r\n\r\nexport default CalculatorButton;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Result.jsx"',children:'import { Box ,   Text  } from \'@chakra-ui/react\'\r\nimport PropTypes from \'prop-types\';\r\nconst Result = ({result}) => {\r\n  \r\n   return (<>\r\n   <Box w="200px"  mb="20px" height="30" border="1px solid #dddddd" borderRadius="5px" paddingBottom="2px" backgroundColor={"#F3F8FF"}>\r\n<Text fontSize=\'20px\' ml="5px" lineHeight="30px" >{result}</Text>\r\n</Box>\r\n   </>)\r\n}\r\n\r\nResult.propTypes  = {\r\n  result: PropTypes.string\r\n}\r\nexport default Result;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"vue",children:"Vue"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\r\n  "name": "vue-project",\r\n  "version": "0.0.0",\r\n  "private": true,\r\n  "type": "module",\r\n  "scripts": {\r\n    "dev": "vite",\r\n    "build": "vite build",\r\n    "preview": "vite preview"\r\n  },\r\n  "dependencies": {\r\n    "primevue": "^3.46.0",\r\n    "vue": "^3.3.11"\r\n  },\r\n  "devDependencies": {\r\n    "@vitejs/plugin-vue": "^4.5.2",\r\n    "vite": "^5.0.10"\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/main.js"',children:'import "./assets/main.css";\r\nimport "primevue/resources/themes/lara-light-green/theme.css";\r\nimport PrimeVue from "primevue/config";\r\nimport { createApp } from "vue";\r\nimport App from "./App.vue";\r\nimport ToastService from "primevue/toastservice";\r\ncreateApp(App).use(PrimeVue).use(ToastService).mount("#app");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/App.vue"',children:'<script setup>\r\n  import Calculator from "../src/components/Calculator.vue"\r\n<\/script>\r\n\r\n<template>\r\n  <div class="container">\r\n     <Calculator/>\r\n  </div>\r\n\r\n</template>\r\n\r\n<style scoped>\r\n    .container {\r\n      margin:auto;\r\n      text-align: center;\r\n      width:80%;\r\n   \r\n    }\r\n</style>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Calculator.vue"',children:"<template>\r\n    <Toast position=\"bottom-center\"/>\r\n   <div class=\"calculator\">\r\n       <Result :result=\"result\"></Result>\r\n       <CalculatorButtons @valueChange=\"valueChange\"></CalculatorButtons>\r\n       <Button label=\"Resetear\" severity=\"danger\" size=\"small\" class=\"btnDanger\" @click=\"resetValues\"/>\r\n   </div>\r\n  \r\n</template>\r\n\r\n<script setup>\r\n\r\nimport Toast from 'primevue/toast';\r\nimport Button from 'primevue/button';\r\nimport { ref } from 'vue';\r\nimport Result from './Result.vue'\r\nimport CalculatorButtons from './CalculatorButtons.vue'\r\nimport { useToast } from 'primevue/usetoast';\r\nimport perfomCalculation from '../utils/perfomCalculation';\r\nconst toast = useToast();\r\nlet result = ref('');\r\nconst valueChange = (e) => {\r\n    const {value , availableOperators  } = e;\r\n    if (availableOperators.includes(result.value[result.value.length - 1]) && availableOperators.includes(value)) {\r\n            toast.add({ severity: 'warn', summary: `Ya a\xf1adiste el operador  \"${ result.value[result.value.length - 1]}\" `,  life: 3000 });\r\n              return;\r\n          }\r\n    if (value === '=') {\r\n        let finalResult = perfomCalculation(String(result.value) , availableOperators);\r\n      while (!finalResult.last) {\r\n        finalResult = perfomCalculation(String(finalResult.modifiedResult) , availableOperators);\r\n      }\r\n    result.value = String(finalResult.modifiedResult)\r\n        return;\r\n    }\r\n    result.value =  String(result.value) + value;\r\n}\r\nconst resetValues = () => {\r\n    result.value = '';\r\n}\r\n<\/script>\r\n<style>\r\n  .calculator {\r\n        flex-direction: column;\r\n        border:1px solid #4548;\r\n        padding:10px;\r\n        margin:auto;\r\n        background:#1F3B4D;\r\n        margin-top:100px;\r\n        width:200px;\r\n    }\r\n    .btnDanger {\r\n        width:100%;\r\n        margin-top:10px;\r\n    }\r\n</style>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/CalculatorButtons.vue"',children:'<template>\r\n    <div class="buttonContainer">\r\n    <Button  size="small" class="buttonContainer__button" v-for="button in  buttons"  :key="button.value" :label="button.number" severity="secondary"  @click="handleButton(button.value)" />   \r\n    <Button size="small" class="buttonContainer__button" v-for="button in  availableOperators"  :key="button" :label="button"  severity="secondary"  @click="handleButton(button)"  /> \r\n    <Button  sevetery="success" class="buttonContainer__button" :label="\'=\'"  severity="secondary" size="small"  @click="handleButton(\'=\')" />\r\n    </div>\r\n</template>\r\n<script setup>\r\n  const emit = defineEmits([\'valueChange\'])\r\n const handleButton = (value) => {\r\n    emit(\'valueChange\' , {value , availableOperators  });\r\n }\r\nimport Button from \'primevue/button\';\r\nconst buttons = [\r\n    {number: "0" , value : 0} , \r\n    {number: "1" , value : 1} , \r\n    {number: "2" , value : 2} , \r\n    {number: "3" , value : 3} , \r\n    {number: "4" , value : 4} , \r\n    {number: "5" , value : 5} , \r\n    {number: "6" , value : 6} , \r\n    {number: "7" , value : 7} , \r\n    {number: "8" , value : 8} , \r\n    {number: "9" , value : 9} , \r\n   ];\r\n\r\n   const availableOperators = ["+" , "*" , "-" , "/"];\r\n<\/script>\r\n<style>\r\n*:focus {\r\n  box-shadow: none !important;\r\n}\r\n  .buttonContainer {\r\n    width:100%;\r\n    margin-top:10px;\r\n     border-radius:5px;\r\n  }\r\n\r\n  .buttonContainer__button {\r\n\r\n \r\n    background:#040D12;\r\n    color:#fff;\r\n    width:50px;\r\n    margin:2px;\r\n\r\n  }\r\n\r\n \r\n\r\n</style>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/Result"',children:'<template>\r\n   <div class="result">\r\n      <p class="result__text">{{result}}</p>\r\n   </div>   \r\n</template>\r\n\r\n<script setup>\r\n\r\n   const props = defineProps({\r\n      result: String\r\n   })\r\n<\/script>\r\n\r\n<style>\r\n  .result {\r\n    width:180px;\r\n    background:#F3F8FF;\r\n    height:30px;\r\n    border-radius:5px;\r\n    \r\n  }\r\n\r\n  .result__text {\r\n    line-height:30px;\r\n    font-size:20px;\r\n  text-align: left;\r\n   margin-left:10px;\r\n  }\r\n</style>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="src/assets/main.css"',children:"\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\n"})})]})}function d(r={}){const{wrapper:n}={...(0,a.a)(),...r.components};return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(c,{...r})}):c(r)}},1151:(r,n,e)=>{e.d(n,{Z:()=>i,a:()=>l});var t=e(7294);const a={},o=t.createContext(a);function l(r){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function i(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:l(r.components),t.createElement(o.Provider,{value:n},r.children)}}}]);