# cowryProtocolWidget

Based on some stringent needs for vendor wallets to easily connect with CowryProtocol, the withdraw and deposit modal as designed and obtainable in the Cowry Protocol application were extracted and converted into individual widgets.

# Example Widget

A demo was created on Replt here

[View the demo](https://widget.todak2000.repl.co/)

You can test on your lcoal machine by copying the code here [test-widget-code](https://github.com/todak2000/cowryProtocolWidget/blob/main/TestWidget/index.html)

## Requirements

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [vite](https://vitejs.dev/)

## Getting started

1. clone the repo

```
git clone https://github.com/todak2000/cowryProtocolWidget.git
```

2. Intall dependencies and associated libraries

```
cd cowryProtocolWidget
yarn install
```

3. Run Test if you wish. Unit test for each component was written and component tested [Here](https://github.com/todak2000/cowryProtocolWidget/tree/main/src/__tests__)

```
yarn test
```

4. Run the Start the Widget App locally

```
yarn start
```

### Continuous Integration

Testing and deployment scripts available inside this example repository using [GitHub Actions](https://github.com/features/actions).

## Usage

For ease of accessibility, the widget was connected to a Content Delivery Network. Thus a sharable CDN link is available below:

```
<!-- js file -->
https://cdn.jsdelivr.net/gh/todak2000/cowryProtocolWidget@main/src/js/assets/index-v1.0.2.js

<!-- css file -->
https://cdn.jsdelivr.net/gh/todak2000/cowryProtocolWidget@main/src/js/assets/index-v1.0.2.css
```

Add them to your html file as shown below

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CowryProtocol Widget</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/todak2000/cowryProtocolWidget@main/src/js/assets/index-v1.0.2.css">
  </head>
  <body>

    <script type="module" src="https://cdn.jsdelivr.net/gh/todak2000/cowryProtocolWidget@main/src/js/assets/index-v1.0.2.js"></script>

  </body>
</html>

```

### methods

To display either the Withdrawal or Deposit Widget. call

1. Withdrawal Widget Button : `withdrawWidget.show()`
2. Deposit Widget Button: `depositWidget.show()`

## Author

- [Daniel Olagunju](https://github.com/todak2000)
