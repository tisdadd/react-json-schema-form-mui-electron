# react-json-schema-form-mui-electron

This is an example repository demonstrating an issue with compiled react-json-schema form in the default electron engine.


## To Run
```
npm install
npm run start
```

## To see error

Go to [src/ui/BaseView.tsx](src/ui/BaseView.tsx) and uncomment the line `{/* <Broken /> */}` to get the error

```
react-dom-client.development.js:5020 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

Check the render method of `FieldTemplate`.
    at createFiberFromTypeAndProps (react-dom-client.development.js:5020:28)
    at createFiberFromElement (react-dom-client.development.js:5034:14)
    at reconcileChildFibersImpl (react-dom-client.development.js:6919:31)
    at eval (react-dom-client.development.js:7097:33)
    at reconcileChildren (react-dom-client.development.js:9700:13)
    at beginWork (react-dom-client.development.js:12048:13)
    at runWithFiberInDEV (react-dom-client.development.js:871:30)
    at performUnitOfWork (react-dom-client.development.js:17640:22)
    at workLoopSync (react-dom-client.development.js:17468:41)
    at renderRootSync (react-dom-client.development.js:17449:11)
```

inside of the window console.