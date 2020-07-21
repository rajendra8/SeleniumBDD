$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChromeBrowserTest.feature");
formatter.feature({
  "line": 3,
  "name": "Doing BrowserTesting",
  "description": "",
  "id": "doing-browsertesting",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BeforeGetUrl"
    }
  ]
});
formatter.before({
  "duration": 513945,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I start the automation",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I executing the hookclass",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I wait for 20 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iStartTheAutomation()"
});
formatter.result({
  "duration": 320749205,
  "status": "passed"
});
formatter.match({
  "location": "Login.iExecutingTheHookclass()"
});
formatter.result({
  "duration": 118860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "GeneralStep.iWaitForMinites(int)"
});
formatter.result({
  "duration": 5373203,
  "error_message": "java.lang.NullPointerException\n\tat com.StepDefination.GeneralStep.iWaitForMinites(GeneralStep.java:27)\n\tat ✽.Then I wait for 20 seconds(ChromeBrowserTest.feature:9)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "cleartrip",
  "description": "",
  "id": "doing-browsertesting;cleartrip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@cleartrip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I open the \"https://www.cleartrip.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.cleartrip.com/",
      "offset": 12
    }
  ],
  "location": "BrowserStep.openBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
});