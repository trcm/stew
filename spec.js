describe('angularjs homepage', function() {
  
  it('should have a title', function() {
    browser.get('/#/stewdents');
    expect(browser.getTitle()).toEqual('Stew');
  });
  
  it("Should only need the required fields to create the objects", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.email')).sendKeys('test@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();

    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });
  
  it("Should only need the required fields to create the objects", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.email')).sendKeys('test1@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });
  
  it("Should only need the required fields to create the objects", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.email')).sendKeys('test2@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });

  it("Should only need the required fields to create the objects", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.email')).sendKeys('test3@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });

  it('should create a stewdent with one skill field', function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('stew');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('UQ');
    element(by.model('stewdent.degree')).sendKeys('IT');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('tom@stew.com');
    element(by.model('stewdent.city')).sendKeys('Brisbane');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('4000');
    element(by.model('stewdent.country')).sendKeys('Australia');

    element(by.model('creativeCheck')).click();
    element(by.model('skills.creativeDesignSkill')).sendKeys("creative design skillz");
    element(by.model('skills.creativeDesignSoft')).sendKeys("creative design softz");
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });
  
  it('should create a stewdent object with all skill fields', function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('sam');
    element(by.model('stewdent.last_name')).sendKeys('stew');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.phone_num')).sendKeys('4321');
    element(by.model('stewdent.email')).sendKeys('sam@stew.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('city');
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('creativeCheck')).click();
    element(by.model('skills.creativeDesignSkill')).sendKeys("creative design skillz");
    element(by.model('skills.creativeDesignSoft')).sendKeys("creative design softz");
    
    element(by.model('techCheck')).click();
    element(by.model('skills.techDesignSkill')).sendKeys("tech design skillz");
    element(by.model('skills.techDesignSoft')).sendKeys("tech design softz");
    
    element(by.model('progCheck')).click();
    element(by.model('skills.itSkill')).sendKeys("prog skills");
    element(by.model('skills.itSoft')).sendKeys("prog softs");
    
    element(by.model('marketCheck')).click();
    element(by.model('skills.marketSkill')).sendKeys("market skills");
    element(by.model('skills.marketSoft')).sendKeys("market softs");
    
    element(by.model('writeCheck')).click();
    element(by.model('skills.writingSkill')).sendKeys("write skills");
    element(by.model('skills.writingSoft')).sendKeys("write softs");
    
    element(by.model('mediaCheck')).click();
    element(by.model('skills.mediaSkill')).sendKeys("media skills");
    element(by.model('skills.mediaSoft')).sendKeys("media softs");
    
    element(by.model('financeCheck')).click();
    element(by.model('skills.financeSkill')).sendKeys("finance skills");
    element(by.model('skills.financeSoft')).sendKeys("finance softs");
    
    element(by.model('researchCheck')).click();
    element(by.model('skills.researchSkill')).sendKeys("research skills");
    element(by.model('skills.researchSoft')).sendKeys("finance softs");
    
    element(by.model('personCheck')).click();
    element(by.model('skills.personalSkill')).sendKeys("person skills");
    element(by.model('skills.personalSoft')).sendKeys("person softs");
    
    element(by.model('otherCheck')).click();
    element(by.model('skills.otherSkill')).sendKeys("other skills");
    element(by.model('skills.otherSoft')).sendKeys("other softs");
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    element(by.model('skills.languages_coding')).sendKeys("Programming languages");
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });
  
  it('should create a long stewdent object 1', function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('Long');
    element(by.model('stewdent.last_name')).sendKeys('stew');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('UQ');
    element(by.model('stewdent.degree')).sendKeys('IT');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('long@stew.com');
    element(by.model('stewdent.city')).sendKeys('Brisbane');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('4000');
    element(by.model('stewdent.country')).sendKeys('Australia');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
    var confirmed = element(by.id('confirmYes'));
    browser.wait(EC.visibilityOf(confirmed), 5000);
    confirmed.click();
  });

  it("should cause the form to be invalid with an invalid email adress", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('iasdfsaftest.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('city');
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    var clickable = false;
    var submit = element(by.id('stewdentSubmit'));
    expect(submit.isEnabled()).toBe(false);
    
  });
  
  it("should cause the form to be invalid with alphanumeric cheracters", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('ƒ∂ƒ∂ß˚¬∆');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('iasdfsaftest.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('city');
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    var clickable = false;
    var submit = element(by.id('stewdentSubmit'));
    expect(submit.isEnabled()).toBe(false);
  });
  
  it("Should not accent a grad date before a date year", function() {
    browser.get('/#/stewdents');
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.css(".ui-state-default")).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2015");
    element(by.model('stewdent.end_year')).sendKeys("2013");
    element(by.model('stewdent.email')).sendKeys('test@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.languages_spoken')).sendKeys("English");
    
    element(by.model('agreeCheck')).click();
    var clickable = false;
    var submit = element(by.id('stewdentSubmit'));
    expect(submit.isEnabled()).toBe(false);
  });

  it("should log in the admin user", function() {
    browser.get('/#/admin');
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('admin');
    element(by.id('loginBtn')).click();
    var url = browser.getCurrentUrl().then(function(data) {
      console.log(data);
      return data;
    });
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/admin');
    element(by.id('logoutBtn')).click();
  });
  
});
