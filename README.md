# 🛠️ domUtils

domUtils is a utility library for DOM manipulation in JavaScript.

## 🚀 Features

- Select single or multiple elements (`selector`, `selectorAll`)
- Create and manipulate elements (`createElement`, `appendChild`, `removeElement`, etc.)
- Class manipulation (`addClass`, `removeClass`, `hasClass`, `toggleClass`)
- Event handling (`addEventListener`, `removeEventListener`)
- HTML and text content manipulation (`setInnerHTML`, `getInnerHTML`, `setTextContent`, `getTextContent`)
- Attribute manipulation (`setAttribute`, `getAttribute`, `removeAttribute`)
- Style manipulation (`setStyle`, `getStyle`)
- Visibility control (`hideElement`, `showElement`, `toggleVisibility`)
- Element cloning and traversal (`cloneElement`, `getParent`, `getChildren`, etc.)
- CSS class and style operations (`addClasses`, `removeClasses`, `setStyles`)
- Form element value manipulation (`getValue`, `setValue`)
- Utility functions (`isVisible`, `scrollIntoView`)
- Animation effects (`fadeIn`, `fadeOut`)

## 📚 Usage

```javascript
const element = domUtils.selector('#myElement');
domUtils.addClass(element, 'active');
domUtils.addEventListener(element, 'click', function() {
  console.log('Element clicked!');
});
