/** Реализовать обертку $
    const $node = $('.js-node');
    $node
    .addClass('node')
    .toggleClass('item')
    .removeClass('node')
    .css({
        color: 'red',
        paddingTop: '10px',
    })
    .html('<li>hello</li>');
 */

// Approach 3 - using class
function $(node) {
  return new DOMManipulator(node);
}
class DOMManipulator {
  constructor(nodeProps) {
    this.nodes = document.querySelectorAll(nodeProps);
  }
  addClass(className) {
    this.nodes.forEach((node) => node.classList.add(className));
    return this;
  }
  toggleClass(className) {
    this.nodes.forEach((node) => node.classList.toggle(className));
    return this;
  }
  removeClass(className) {
    this.nodes.forEach((node) => node.classList.remove(className));
    return this;
  }
  css(styles) {
    for (let key in styles) {
      this.nodes.forEach((node) => (node.style[key] = styles[key]));
    }
    return this;
  }
  html(markup) {
    this.nodes.forEach((node) => (node.innerHTML = markup));
    return this;
  }
}

/* Approach 2 - all in one function
function $(node) {
  return new DOMManipulator(node);
}
function DOMManipulator(nodeProps) {
  this.nodes = document.querySelectorAll(nodeProps);
  this.addClass = function (className) {
    this.nodes.forEach((node) => node.classList.add(className));
    return this;
  };
  this.toggleClass = function (className) {
    this.nodes.forEach((node) => node.classList.toggle(className));
    return this;
  };
  this.removeClass = function (className) {
    this.nodes.forEach((node) => node.classList.remove(className));
    return this;
  };
  this.css = function (styles) {
    for (let key in styles) {
      this.nodes.forEach((node) => (node.style[key] = styles[key]));
    }
    return this;
  };
  this.html = function (markup) {
    this.nodes.forEach((node) => (node.innerHTML = markup));
    return this;
  };
}
*/

/* Approach 1 - using prototype
function $(node) {
  return new DOMManipulator(node);
}
function DOMManipulator(nodeProp) {
  this.nodes = document.querySelectorAll(nodeProp);
}

DOMManipulator.prototype.addClass = function (className) {
  this.nodes.forEach((node) => node.classList.add(className));
  return this;
};
DOMManipulator.prototype.toggleClass = function (className) {
  this.nodes.forEach((node) => node.classList.toggle(className));
  return this;
};
DOMManipulator.prototype.removeClass = function (className) {
  this.nodes.forEach((node) => node.classList.remove(className));
  return this;
};
DOMManipulator.prototype.css = function (styles) {
  for (let key in styles) {
    this.nodes.forEach((node) => (node.style[key] = styles[key]));
  }
  return this;
};
DOMManipulator.prototype.html = function (markup) {
  this.nodes.forEach((node) => (node.innerHTML = markup));
  return this;
};
*/
