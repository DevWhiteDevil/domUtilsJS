const domUtils = {
    // Select single element
    selector: function(query) {
      return document.querySelector(query);
    },
  
    // Select multiple elements
    selectorAll: function(query) {
      return document.querySelectorAll(query);
    },
  
    // Create an element
    createElement: function(tagName) {
      return document.createElement(tagName);
    },
  
    // Append a child element to a parent
    appendChild: function(parent, child) {
      parent.appendChild(child);
    },
  
    // Remove an element
    removeElement: function(element) {
      return element.parentNode.removeChild(element);
    },
  
    // Add a class to an element
    addClass: function(element, className) {
      element.classList.add(className);
    },
  
    // Remove a class from an element
    removeClass: function(element, className) {
      element.classList.remove(className);
    },
  
    // Check if an element has a class
    hasClass: function(element, className) {
      return element.classList.contains(className);
    },
  
    // Toggle a class on an element
    toggleClass: function(element, className) {
      element.classList.toggle(className);
    },
  
    // Add an event listener to an element
    addEventListener: function(element, event, handler) {
      element.addEventListener(event, handler);
    },
  
    // Remove an event listener from an element
    removeEventListener: function(element, event, handler) {
      element.removeEventListener(event, handler);
    },
  
    // Set innerHTML of an element
    setInnerHTML: function(element, html) {
      element.innerHTML = html;
    },
  
    // Get innerHTML of an element
    getInnerHTML: function(element) {
      return element.innerHTML;
    },
  
    // Set textContent of an element
    setTextContent: function(element, text) {
      element.textContent = text;
    },
  
    // Get textContent of an element
    getTextContent: function(element) {
      return element.textContent;
    },
  
    // Set an attribute of an element
    setAttribute: function(element, attr, value) {
      element.setAttribute(attr, value);
    },
  
    // Get an attribute of an element
    getAttribute: function(element, attr) {
      return element.getAttribute(attr);
    },
  
    // Remove an attribute from an element
    removeAttribute: function(element, attr) {
      element.removeAttribute(attr);
    },
  
    // Set a style property of an element
    setStyle: function(element, property, value) {
      element.style[property] = value;
    },
  
    // Get a style property of an element
    getStyle: function(element, property) {
      return getComputedStyle(element)[property];
    },
  
    // Hide an element
    hideElement: function(element) {
      element.style.display = 'none';
    },
  
    // Show an element
    showElement: function(element, displayStyle = 'block') {
      element.style.display = displayStyle;
    },
  
    // Clone an element
    cloneElement: function(element, deep = true) {
      return element.cloneNode(deep);
    },
  
    // Insert an element before another element
    insertBefore: function(newElement, referenceElement) {
      referenceElement.parentNode.insertBefore(newElement, referenceElement);
    },
  
    // Insert an element after another element
    insertAfter: function(newElement, referenceElement) {
      referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
    },
  
    // Replace an element with another element
    replaceElement: function(newElement, oldElement) {
      oldElement.parentNode.replaceChild(newElement, oldElement);
    },
  
    // Get parent element
    getParent: function(element) {
      return element.parentNode;
    },
  
    // Get child elements
    getChildren: function(element) {
      return element.children;
    },
  
    // Get next sibling
    getNextSibling: function(element) {
      return element.nextElementSibling;
    },
  
    // Get previous sibling
    getPreviousSibling: function(element) {
      return element.previousElementSibling;
    },
  
    // Check if an element matches a selector
    matchesSelector: function(element, selector) {
      return element.matches(selector);
    },
  
    // Find closest ancestor matching a selector
    closest: function(element, selector) {
      return element.closest(selector);
    },
  
    // Get all descendants matching a selector
    findDescendants: function(element, selector) {
      return element.querySelectorAll(selector);
    },
  
    // Set multiple attributes
    setAttributes: function(element, attrs) {
      for (let key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          element.setAttribute(key, attrs[key]);
        }
      }
    },
  
    // Get the value of a form element
    getValue: function(element) {
      return element.value;
    },
  
    // Set the value of a form element
    setValue: function(element, value) {
      element.value = value;
    },
  
    // Check if an element is visible
    isVisible: function(element) {
      return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    },
  
    // Scroll an element into view
    scrollIntoView: function(element, options) {
      element.scrollIntoView(options);
    },
  
    // Add multiple classes
    addClasses: function(element, classes) {
      classes.forEach(cls => element.classList.add(cls));
    },
  
    // Remove multiple classes
    removeClasses: function(element, classes) {
      classes.forEach(cls => element.classList.remove(cls));
    },
  
    // Set multiple styles
    setStyles: function(element, styles) {
      for (let property in styles) {
        if (styles.hasOwnProperty(property)) {
          element.style[property] = styles[property];
        }
      }
    },
  
    // Get the computed style of an element
    getComputedStyle: function(element, property) {
      return window.getComputedStyle(element).getPropertyValue(property);
    },
  
    // Fade in an element
    fadeIn: function(element, duration = 400) {
      element.style.opacity = 0;
      element.style.display = 'block';
  
      let last = +new Date();
      let tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
  
        if (+element.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
      };
      tick();
    },
    // Fade out an element
    fadeOut: function(element, duration = 400) {
      element.style.opacity = 1;
  
      let last = +new Date();
      let tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
        last = +new Date();
  
        if (+element.style.opacity > 0) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
          element.style.display = 'none';
        }
      };
      tick();
    },
    // Toggle visibility
    toggleVisibility: function(element) {
      if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  };
