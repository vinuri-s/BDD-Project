$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/UGVLE/year_3/sem_1/IS3103 Software Quality Assurance/Assignments/BDD/src/test/resources/features/LoginProfile.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Smoke#Regression"
    }
  ],
  "line": 2,
  "name": "User Login",
  "description": "",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sucessful Login",
  "description": "",
  "id": "user-login;sucessful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/login.do\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fill in \"Username\" with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User fill in \"Password\" with \"manager\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be on the \"Time Entry\" page on URL \"https://demo.actitime.com/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/login.do",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 26383022300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 257701000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "manager",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 306239700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 225041200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Time Entry",
      "offset": 23
    },
    {
      "val": "https://demo.actitime.com/user/submit_tt.do",
      "offset": 48
    }
  ],
  "location": "Login.user_should_be_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 5276000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 9876146300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 464029600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/login.do\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be on the \"Time Entry\" page on URL \"https://demo.actitime.com/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "user-login;multiple-user-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "user-login;multiple-user-login;;1"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 22,
      "id": "user-login;multiple-user-login;;2"
    },
    {
      "cells": [
        "admin",
        "manager"
      ],
      "line": 23,
      "id": "user-login;multiple-user-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/login.do\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be on the \"Time Entry\" page on URL \"https://demo.actitime.com/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/login.do",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 22027579400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 385289801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 214097301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Time Entry",
      "offset": 23
    },
    {
      "val": "https://demo.actitime.com/user/submit_tt.do",
      "offset": 48
    }
  ],
  "location": "Login.user_should_be_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 198200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 9755286600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 266721500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Multiple User Login",
  "description": "",
  "id": "user-login;multiple-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/login.do\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User fill in login credentials with \"admin\" and \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be on the \"Time Entry\" page on URL \"https://demo.actitime.com/user/submit_tt.do\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should see the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/login.do",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 22880103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 37
    },
    {
      "val": "manager",
      "offset": 49
    }
  ],
  "location": "Login.user_fill_in_login_credentials_with_and(String,String)"
});
formatter.result({
  "duration": 528653300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 363854900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Time Entry",
      "offset": 23
    },
    {
      "val": "https://demo.actitime.com/user/submit_tt.do",
      "offset": 48
    }
  ],
  "location": "Login.user_should_be_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 286899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 21
    }
  ],
  "location": "Login.user_should_see_the_button(String)"
});
formatter.result({
  "duration": 8952703701,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 347431099,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Login",
  "description": "",
  "id": "user-login;invalid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User is on the \"Home\" page on URL \"https://demo.actitime.com/login.do\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User fill in \"Username\" with \"xyz\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User fill in \"Password\" with \"xyz\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should see \"Error Message\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 16
    },
    {
      "val": "https://demo.actitime.com/login.do",
      "offset": 35
    }
  ],
  "location": "Login.user_is_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 25845677200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 14
    },
    {
      "val": "xyz",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 198068500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 14
    },
    {
      "val": "xyz",
      "offset": 30
    }
  ],
  "location": "Login.user_fill_in_with(String,String)"
});
formatter.result({
  "duration": 381083900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 19
    }
  ],
  "location": "Login.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 307610501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error Message",
      "offset": 17
    }
  ],
  "location": "Login.user_should_see_message(String)"
});
formatter.result({
  "duration": 141368100,
  "status": "passed"
});
});