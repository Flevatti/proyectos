
# Proyectos Frontend
## Calculadora
### Archivos compartidos
```js title="utils/getOperation.js"
const getOperation = (result, operatorList) => {
  let subtraction = result.indexOf("-");
  let addition = result.indexOf("+");
  let division = result.indexOf("/");
  let multiplication = result.indexOf("*");
  let numberOne;
  let numberTwo;
  let operation;
  let index = "";
  if (division != -1 && multiplication != -1) {
    if (division < multiplication) {
      index = division;
      operation = "/";
    } else {
      index = multiplication;
      operation = "*";
    }
  } else if (division != -1) {
    index = division;
    operation = "/";
  } else if (multiplication != -1) {
    index = multiplication;
    operation = "*";
  }
  if (index === "") {
    if (subtraction != -1 && addition != -1) {
      if (subtraction < addition) {
        index = subtraction;
        operation = "-";
      } else {
        index = addition;
        operation = "+";
      }
    } else if (subtraction != -1) {
      index = subtraction;
      operation = "-";
    } else if (addition != -1) {
      index = addition;
      operation = "+";
    }
  }

  if (index != "") {
    numberOne = getNumberOne(index, result, operatorList);

    numberTwo = getNumberTwo(index, result, operatorList);
  }

  return { numberOne, numberTwo, operation };
};
const getNumberOne = (index, result, operatorList) => {
  let findNumberOne = false;
  let numberOne = "";
  for (let i = index - 1; !findNumberOne; i--) {
    if (i <= -1 || operatorList.includes(result[i])) {
      findNumberOne = true;
    } else {
      numberOne += String(result[i]);
    }
  }
  numberOne = numberOne.split("").reverse().join("");
  return numberOne;
};

const getNumberTwo = (index, result, operatorList) => {
  let findNumberTwo = false;
  let numberTwo = "";
  for (let i = index + 1; !findNumberTwo; i++) {
    if (i >= result.split("").length || operatorList.includes(result[i])) {
      findNumberTwo = true;
    } else {
      numberTwo += String(result[i]);
    }
  }
  return numberTwo;
};
export default getOperation;
```
```js title="utils/perfomCalculation"
import performOperation from "./performOperation";
import getOperation from "./getOperation";

const perfomCalculation = (result, availableOperators) => {
  let modifiedResult = String(result);

  let calculation = getOperation(result, availableOperators);

  if (
    !calculation.numberOne ||
    !calculation.numberTwo ||
    !calculation.operation
  ) {
    return { modifiedResult, last: true };
  }

  modifiedResult = result.replace(
    calculation.numberOne + calculation.operation + calculation.numberTwo,
    performOperation(
      calculation.operation,
      calculation.numberOne + calculation.operation + calculation.numberTwo
    )
  );

  return { modifiedResult, last: null };
};

export default perfomCalculation;

```

```js title="utils/perfomOperation"
const performOperation = (operator, result) => {
  const numbers = result.split(operator);
  switch (operator) {
    case "+":
      return numbers.reduce((accumulator, currentValue) => {
        return parseInt(accumulator) + parseInt(currentValue);
      });

    case "-":
      return numbers.reduce((accumulator, currentValue) => {
        return parseInt(accumulator) - parseInt(currentValue);
      });

    case "*":
      return numbers.reduce((accumulator, currentValue) => {
        return parseInt(accumulator) * parseInt(currentValue);
      });

    case "/":
      return numbers.reduce((accumulator, currentValue) => {
        return parseInt(accumulator) / parseInt(currentValue);
      });
  }
};

export default performOperation;
```
### React
```json title="package.json"
{
  "name": "react-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "framer-motion": "^10.18.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.8"
  }
}
```

```jsx title="src/main.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Estilo CSS Global
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ChakraProvider>
       <App />
       </ChakraProvider>
   
  </React.StrictMode>,
)
```
```css title="src/index.css"


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
```jsx title="src/App.jsx"
import {   Center} from '@chakra-ui/react'
import './app.css'
import Calculator from './components/calculator'
function App() {
  return (
    <>
        <Center >
     <Calculator/>
     </Center>
    </>
  )
}

export default App
```

```css title="src/app.css"
.calculadora {
    background:red;
    width:800px;
    height:800px;
}
```

```jsx title="src/components/Calculator.jsx"

import {       Flex , Button } from '@chakra-ui/react'
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import perfomCalculation from '../utils/perfomCalculation';
import Result from './Result';
import CalculatorButton from './CalculatorButtons';
const Calculator = () => {
  const toast = useToast();
  
   
 
  
    const  [result , setResult] = useState('');
      const handleButton = (value ,  availableOperators) => {
         
          if (availableOperators.includes(result[result.length - 1]) && availableOperators.includes(value)) {
                   toast({
                title: `Ya añadiste el operador  "${ result[result.length - 1]}" `,
                description: "",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
              return;
          }
          if (value === '=') {
            let finalResult = perfomCalculation(String(result) , availableOperators);
          while (!finalResult.last) {
            finalResult = perfomCalculation(String(finalResult.modifiedResult) , availableOperators);
          }
          setResult(String(finalResult.modifiedResult));
            return;
        }
          setResult( String(result) + value);

      }

  return (
    <>
    <Flex flexDirection="column" border="1px solid #dddddd" padding="10px" mt="100px" backgroundColor={"#1F3B4D"}>
    <Result result={result}/>
    <CalculatorButton handleButton={handleButton}/>
<Button  colorScheme='red' mt="5"  onClick={() => {
   setResult('')
}}>
  Resetear
</Button> 
</Flex>
    </>
  );
};

export default Calculator;
```

```jsx title="src/components/CalculatorButton.jsx"
import { Box ,   Grid, GridItem   , Button } from '@chakra-ui/react'
import PropTypes from 'prop-types';
const CalculatorButton = ( {handleButton}) => {
    const availableOperators = ["+" , "*" , "-" , "/"];
    const buttons = [
        {number: "0" , value : 0} , 
        {number: "1" , value : 1} , 
        {number: "2" , value : 2} , 
        {number: "3" , value : 3} , 
        {number: "4" , value : 4} , 
        {number: "5" , value : 5} , 
        {number: "6" , value : 6} , 
        {number: "7" , value : 7} , 
        {number: "8" , value : 8} , 
        {number: "9" , value : 9} , 
       ];
    return (<>  <Box w="200px"    borderRadius="5px" padding="5px" border="1px solid #1F3B4D">
  
    <Grid templateColumns='repeat(3, 40px)' gap={2} justifyContent="space-evenly" padding="10px">
     {
       buttons.map((item) => (
     <GridItem key={item.number}>
   <Button   _hover={{
      backgroundColor:"#1B1A17"
   }}  backgroundColor={"#040D12"} color={"#fff"} onClick={() => {
    handleButton(item.value , availableOperators)
   }}>
     {item.number}
   </Button> 
   </GridItem>  
       ))
     }

     {
        availableOperators.map(item =>  (
            <GridItem  key={item}>
            <Button    _hover={{
               backgroundColor:"#1B1A17"
            }}   backgroundColor={"#040D12"} color={"#fff"}  onClick={() => {
             handleButton(String(item) , availableOperators)
            }}>
              {item}
            </Button> 
            </GridItem>  
        ))
     }
   <GridItem >
   <Button  _hover={{
      backgroundColor:"#19ad9f"
   }}   backgroundColor={"#00A495"}  color={"#fff"}   onClick={()=> {
    handleButton("=" , availableOperators)
   }
   }>
     = 
   </Button> 
   </GridItem>  
   </Grid>
   </Box></>)
   
}
CalculatorButton.propTypes  = {
    handleButton: PropTypes.func
  }

export default CalculatorButton;
```

```jsx title="src/components/Result.jsx"
import { Box ,   Text  } from '@chakra-ui/react'
import PropTypes from 'prop-types';
const Result = ({result}) => {
  
   return (<>
   <Box w="200px"  mb="20px" height="30" border="1px solid #dddddd" borderRadius="5px" paddingBottom="2px" backgroundColor={"#F3F8FF"}>
<Text fontSize='20px' ml="5px" lineHeight="30px" >{result}</Text>
</Box>
   </>)
}

Result.propTypes  = {
  result: PropTypes.string
}
export default Result;
```
### Vue

```json title="package.json"
{
  "name": "vue-project",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "primevue": "^3.46.0",
    "vue": "^3.3.11"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.5.2",
    "vite": "^5.0.10"
  }
}
```

```js title="src/main.js"
import "./assets/main.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import ToastService from "primevue/toastservice";
createApp(App).use(PrimeVue).use(ToastService).mount("#app");
```

```jsx title="src/App.vue"
<script setup>
  import Calculator from "../src/components/Calculator.vue"
</script>

<template>
  <div class="container">
     <Calculator/>
  </div>

</template>

<style scoped>
    .container {
      margin:auto;
      text-align: center;
      width:80%;
   
    }
</style>
```


```jsx title="src/components/Calculator.vue"
<template>
    <Toast position="bottom-center"/>
   <div class="calculator">
       <Result :result="result"></Result>
       <CalculatorButtons @valueChange="valueChange"></CalculatorButtons>
       <Button label="Resetear" severity="danger" size="small" class="btnDanger" @click="resetValues"/>
   </div>
  
</template>

<script setup>

import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { ref } from 'vue';
import Result from './Result.vue'
import CalculatorButtons from './CalculatorButtons.vue'
import { useToast } from 'primevue/usetoast';
import perfomCalculation from '../utils/perfomCalculation';
const toast = useToast();
let result = ref('');
const valueChange = (e) => {
    const {value , availableOperators  } = e;
    if (availableOperators.includes(result.value[result.value.length - 1]) && availableOperators.includes(value)) {
            toast.add({ severity: 'warn', summary: `Ya añadiste el operador  "${ result.value[result.value.length - 1]}" `,  life: 3000 });
              return;
          }
    if (value === '=') {
        let finalResult = perfomCalculation(String(result.value) , availableOperators);
      while (!finalResult.last) {
        finalResult = perfomCalculation(String(finalResult.modifiedResult) , availableOperators);
      }
    result.value = String(finalResult.modifiedResult)
        return;
    }
    result.value =  String(result.value) + value;
}
const resetValues = () => {
    result.value = '';
}
</script>
<style>
  .calculator {
        flex-direction: column;
        border:1px solid #4548;
        padding:10px;
        margin:auto;
        background:#1F3B4D;
        margin-top:100px;
        width:200px;
    }
    .btnDanger {
        width:100%;
        margin-top:10px;
    }
</style>
```

```jsx title="src/components/CalculatorButtons.vue"
<template>
    <div class="buttonContainer">
    <Button  size="small" class="buttonContainer__button" v-for="button in  buttons"  :key="button.value" :label="button.number" severity="secondary"  @click="handleButton(button.value)" />   
    <Button size="small" class="buttonContainer__button" v-for="button in  availableOperators"  :key="button" :label="button"  severity="secondary"  @click="handleButton(button)"  /> 
    <Button  sevetery="success" class="buttonContainer__button" :label="'='"  severity="secondary" size="small"  @click="handleButton('=')" />
    </div>
</template>
<script setup>
  const emit = defineEmits(['valueChange'])
 const handleButton = (value) => {
    emit('valueChange' , {value , availableOperators  });
 }
import Button from 'primevue/button';
const buttons = [
    {number: "0" , value : 0} , 
    {number: "1" , value : 1} , 
    {number: "2" , value : 2} , 
    {number: "3" , value : 3} , 
    {number: "4" , value : 4} , 
    {number: "5" , value : 5} , 
    {number: "6" , value : 6} , 
    {number: "7" , value : 7} , 
    {number: "8" , value : 8} , 
    {number: "9" , value : 9} , 
   ];

   const availableOperators = ["+" , "*" , "-" , "/"];
</script>
<style>
*:focus {
  box-shadow: none !important;
}
  .buttonContainer {
    width:100%;
    margin-top:10px;
     border-radius:5px;
  }

  .buttonContainer__button {

 
    background:#040D12;
    color:#fff;
    width:50px;
    margin:2px;

  }

 

</style>
```

```jsx title="src/components/Result"
<template>
   <div class="result">
      <p class="result__text">{{result}}</p>
   </div>   
</template>

<script setup>

   const props = defineProps({
      result: String
   })
</script>

<style>
  .result {
    width:180px;
    background:#F3F8FF;
    height:30px;
    border-radius:5px;
    
  }

  .result__text {
    line-height:30px;
    font-size:20px;
  text-align: left;
   margin-left:10px;
  }
</style>
```


```css title="src/assets/main.css"

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```