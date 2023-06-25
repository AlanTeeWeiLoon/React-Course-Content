# React Course Content

---

## Introduction to React 
<p>React is an open-source JavaScript framework and library. It's uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.</p>

### JSX

Background: When Facebook created React, the main concept introduced into React was that we had to write a lot of HTML in JavaScript because JS was very performant.

- JSX is not "HTML inside JavaScript", but it has "HTML-like" syntax
- Browser cannot understand JSX, so need **Babel** to convert it.
- Advantages:
    - Developer experience
    - Readability
    - Less code
    - Maintainability
    - No repetition

### DOM
#### Traditional Way of Development
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/371676a2-33d8-41b0-ba37-b5efdb73fd0c)
<p>Everytime when any of the element update, will re-render the entire DOM again, this causes a lot of unnecessary workload!</p>

#### React Virtual DOM 
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/5c032f71-38e2-4298-be06-c0e3ad9dfcee)

<p>We need Virtual DOM for <b>Reconcilation</b>. Reconcilation is an algorithum that React used to different one component tree from others. It do compare and determine what needs to change and what does not in UI. <b>To find out DIFFERENT between one <i>tree</i> (ACTUAL DOM) and other (VIRTUAL DOM)</b>.</p>

### Component
  
- Smallest Unit of Interface
- Everything is a component in React
- Two types:
    - Functional component - NEW
    - Class based component - OLD

![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/fa82e43c-6722-452a-807d-b4a2a2d4b61c)
<p>Every part of the webpage can spread into small components, and all the component is reuseable.</p>

### Controlled component and Uncontrolled Component
#### Controlled Component
<p>Controlled Components are those in which forms' data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new value as props to the controlled component.</p>

#### Uncontrolled Component
<p>Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM. So in order to access any value that has been entered we take help of refs
</p>

### What is Babel?

<p>To know Babel, we have to know what is <b>Pollyfill</b>. To make older browers understand our new code, the new code is converted into a older code, which browser can understand called Pollyfill. Babel do this conversion automatically.</p>

<p>E.g. - ES6 is the newer version of JavaScript, if I'm working on 1999's browser, my browser will not understand what is `const`, `new Promise`, etc. So, there is a replacement code for these functionalities which is compatible with older version of browsers.</p>

<p>Babel is a combination of compiler and also transpiles. Therefore it is known as Transpiler. Babel is a library for transpiling different js or ts code into browser compatible code.
</p>

### How React Work
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/d4c370a7-2975-4393-838d-fe71f85b6153)

---

# Hooks
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/d79a1aee-091b-4c17-8c36-b8be47b8ace7)

## UseState

![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/78373073-0ae6-417f-80ce-900c5a7e49ff)

<p>To create local variables in React</p>

## UseEffect
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/658586d6-828f-4955-94f7-0d74afeb3678)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/d26ee541-d9bf-4890-b06b-3a3b39e47f6f)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/a5c6d5e3-851c-40e5-a9c6-bbf8adf41c8b)

## UseRef
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/2db1e036-d426-43f7-b65a-7327eace94eb)

## UseContext
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/24e43c30-4d45-4319-b024-99860b351c9e)

## UseReducer
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/053c7e71-7a40-4220-883b-5495b4bab2a4)

---

# AXIOS
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/faecd7f5-0001-4988-b430-280c5ba4c2ec)

---

# Higher Order Components (HOC)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/4f5049f9-afb7-4b90-ab17-38cad74b0465)

---

# MVC (MODAL, VIEW, CONTROLLER)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/c43f9e4e-c072-41d3-b10d-bb1cfa2b2583)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/b0aa4bad-0c44-48f7-8c8d-8f1a7b93bd1e)


---

# FLUX
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/fd54d6cc-3a9b-4020-8378-6366d1ed5125)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/8fe69d57-477f-42e2-860a-15783b345fb5)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/609921ba-79ca-400b-8f42-51548c4a107e)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/6e00835e-4245-45c9-ae99-fd8327fd743f)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/bf34b382-e714-476d-8491-a66eb6c25086)

---

# REDUX
State Mangement Library
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/72488795-976b-4dfb-9d78-b68955398456)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/06596943-4aab-4346-8282-7366a1357f3f)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/5a5e5932-ab09-40b9-bc79-8dad59a3e80b)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/ad6e6cf3-6159-4083-aba1-87069307b1cc)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/214f8e15-e692-43cf-93a7-0f2c0b1692ee)

#### Lifecycle of Redux 
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/8ab4d8a4-c6cc-4791-8c77-6b6fa2c5eca1)

---

# Router
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/08567fa7-7326-401f-98cd-1581f0f2402f)

### Nested Routing
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/912fc314-e638-4210-a5ef-cc47f06e0813)

---

# LocalStorage & SessionStorage
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/c212468e-5999-4027-9996-2877939b6362)
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/c6fbee6e-18d4-4e7b-bfb5-7e22566f0fcb)

---



# Appedixes
## Required Installations 

### Node js
https://nodejs.org/en

### VS Code
https://code.visualstudio.com/download

### VS Code Extensions
ES7+ React/Redux/React-Native snippets
![image](https://github.com/AlanTeeWeiLoon/React-Course-Content/assets/104622787/4fc57f61-351a-460a-942c-78f0d56a5008)


### Command to create a react project : 
`npx create-react-app projectName`

### Command to start the development server : 
`npm start`

### Install the AXIOS library : 
`npm install axios` 

### Install JSON server :
`npm install -g json-server`

### Start JSON server :
`json-server db.json  - -port 4000`

### Installation of redux :
`npm install redux`

### Installation of react-redux :
`npm install react-redux`

### Install Router : 
`npm install react-router-dom`





