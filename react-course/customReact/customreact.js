function mainContainer(reactElement, Container){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    Container.appendChild(domElement);
    */
   const domElement = document.createElement(reactElement.type);    
    domElement.innerHTML = reactElement.children;
    Container.appendChild(domElement);

}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click for google",
};
const Container = document.querySelector("#root");
// method 
customRender(reactElement, Container);