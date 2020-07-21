package com.StepDefination;

import com.Base.Base;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;

import java.util.concurrent.TimeUnit;

public class BrowserStep extends Base {

    @Given("^I open the \"([^\"]*)\"$")
    public void openBrowser(String url)
        {
          Base.chromedriver.get(url);
          Base.chromedriver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
          Base.chromedriver.manage().window().maximize();
        }
    }

