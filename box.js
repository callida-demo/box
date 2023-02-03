(function() { 
 let template = document.createElement("template");
 template.innerHTML = `
 <style>
 :host {
 border-radius: 5px;
 border-width: 2px;
 border-color: black;
 border-style: solid;
 display: block;
 }
 body {
   background: #fff;
   }
 </style> 
<body>
<div class="container">
<div class="row">

<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>  

</div>
</div>
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
  return ["One", "Two", "Three"];
 }
 onCustomWidgetBeforeUpdate(changedProperties) {
 console.log(`${this._props["widgetName"]}`);
  console.log('onCustomWidgetBeforeUpdate');
 this._props = { ...this._props, ...changedProperties };
 }
 onCustomWidgetAfterUpdate(changedProperties) {
 if ("color" in changedProperties) {
  console.log(changedProperties["color"]);
// this.style["background-color"] = changedProperties["color"];
  }
 if ("opacity" in changedProperties) {
 this.style["opacity"] = changedProperties["opacity"];
  }
 }
 }
 customElements.define("goverp-sample-box", Box);
})();
