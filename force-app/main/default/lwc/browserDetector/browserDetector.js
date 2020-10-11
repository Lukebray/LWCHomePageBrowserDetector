import { LightningElement } from "lwc";

export default class BrowserDetector extends LightningElement {
  browser;
  browserVersion;

  connectedCallback() {
    var N = navigator.appName;
    var ua = navigator.userAgent;
    var tem;
    var M = ua.match(
      /(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i
    );
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
      M[2] = tem[1];
    }
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, "-?"];
    this.browser = M[0];
    this.browserVersion = M[1];
    if (this.browser != "Chrome") {
      alert("Please use either Google Chrome or Microsoft Edge web browsers for full Salesforce functionality");
    }
  }
}
