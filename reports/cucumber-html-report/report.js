$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basket.feature");
formatter.feature({
  "line": 3,
  "name": "basket",
  "description": "",
  "id": "basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#shopping basket features"
    }
  ],
  "line": 6,
  "name": "add to basket",
  "description": "",
  "id": "basket;add-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i add an item to the basket",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i can view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.that_i_am_on_the_shopping_website()"
});
formatter.result({
  "duration": 17065290600,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 4527624400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" name\u003d\"add-to-cart\" value\u003d\"29\" class\u003d\"single_add_to_cart_button button alt\"\u003e...\u003c/button\u003e is not clickable at point (654, 560). Other element would receive the click: \u003cp class\u003d\"woocommerce-store-notice demo_store\"\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CLQL001142\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\aNegrete\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61354}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6ab5966a06df25262cb078b05a88fbd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat bindings.Basket.i_add_an_item_to_the_basket(Basket.java:38)\r\n\tat ✽.When i add an item to the basket(basket.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Basket.i_can_view_the_item_in_my_basket()"
});
formatter.result({
  "status": "skipped"
});
});