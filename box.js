(function() { 
 let template = document.createElement("template");
 template.innerHTML = `
 <style>
 :host {
 border-radius: 5px;
 border-width: 14px;
 border-color: black;
 border-style: solid;
 display: block;
 }
 </style> 
<body>
 <p>Click on the "Choose File" button to upload a file:</p>

 <form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>
</body>
 `;
 class Box extends HTMLElement {
 constructor() {
 super(); 
 let shadowRoot = this.attachShadow({mode: "open"});
 shadowRoot.appendChild(template.content.cloneNode(true));
 this.addEventListener("click", event => {
 var event = new Event("onClick");
 this.dispatchEvent(event);
 });
 this._props = {};
 }
 getFileData() {
  return ["Hello", "world"];
 }
 onCustomWidgetBeforeUpdate(changedProperties) {
 console.log(`${this._props["widgetName"]}`);
  console.log('onCustomWidgetBeforeUpdate');
 this._props = { ...this._props, ...changedProperties };
 }
 onCustomWidgetAfterUpdate(changedProperties) {
 if ("color" in changedProperties) {
 this.style["background-color"] = changedProperties["color"];
  }
 if ("opacity" in changedProperties) {
 this.style["opacity"] = changedProperties["opacity"];
  }
 }
 }
 customElements.define("goverp-sample-box", Box);
})();
