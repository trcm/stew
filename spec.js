describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('/#/stewdents');

    expect(browser.getTitle()).toEqual('Stew');
  });

  it('should create a stewdent object 1', function() {
    console.log('start');
    browser.get('/#/stewdents');
    // browser.get('http://www.tommidson.com/#/stewdents');
    // element(by.id('createButton')).click();
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('stew');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.university')).sendKeys('UQ');
    // element(by.model('stewdent.student_num')).sendKeys('1234567890');
    element(by.model('stewdent.degree')).sendKeys('IT');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    // element(by.model('stewdent.start_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.end_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.occupation')).sendKeys('Student');
    element(by.model('stewdent.phone_num')).sendKeys('Phone');
    element(by.model('stewdent.student_email')).sendKeys('tom@stew.com');
    // element(by.model('stewdent.address')).sendKeys('1 Queen St ');
    element(by.model('stewdent.city')).sendKeys('Brisbane');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('4000');
    element(by.model('stewdent.country')).sendKeys('Australia');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.languages_coding')).sendKeys('coding');
    element(by.model('skills.personal')).sendKeys('personal');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    element(by.model('skills.smartphone')).sendKeys('smartphone');
    element(by.model('skills.tablet')).sendKeys('tablet');
    
    element(by.id('stewdentSubmit')).click();

  });

  it('should create a stewdent object', function() {
    // browser.get('http://www.tommidson.com/#/stewdents');
    browser.get('/#/stewdents');
    // element(by.id('createButton')).click();
    element(by.model('stewdent.first_name')).sendKeys('sam');
    element(by.model('stewdent.last_name')).sendKeys('stew');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.university')).sendKeys('university');
    // element(by.model('stewdent.student_num')).sendKeys('sutdent num');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    // element(by.model('stewdent.start_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.end_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.occupation')).sendKeys('occupation');
    element(by.model('stewdent.phone_num')).sendKeys('phone num');
    // element(by.model('stewdent.student_num')).sendKeys('sutdent num');
    element(by.model('stewdent.student_email')).sendKeys('sam@stew.com');
    // element(by.model('stewdent.address')).sendKeys('address');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('city');
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.languages_coding')).sendKeys('coding');
    element(by.model('skills.personal')).sendKeys('personal');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    element(by.model('skills.smartphone')).sendKeys('smartphone');
    element(by.model('skills.tablet')).sendKeys('tablet');

    // element(by.model('work.industry_one')).sendKeys('computer skillz');
    // element(by.model('work.industry_two')).sendKeys('coding');
    // element(by.model('work.company_one')).sendKeys('personal');
    // element(by.model('work.company_two')).sendKeys('languages');
    // element(by.model('work.other_goals')).sendKeys('languages');

    element(by.id('stewdentSubmit')).click();
  });

  it("should cause the form to be invalid with an invalid email adress", function() {
    
    // browser.get('http://www.tommidson.com/#/stewdents');
    browser.get('/#/stewdents');
    // element(by.id('createButton')).click();
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.gender')).click();
    element(by.model('stewdent.dob')).click();
    element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.university')).sendKeys('university');
    // element(by.model('stewdent.student_num')).sendKeys('sutdent num');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    // element(by.model('stewdent.start_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.end_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.occupation')).sendKeys('occupation');
    element(by.model('stewdent.phone_num')).sendKeys('phone num');
    element(by.model('stewdent.student_email')).sendKeys('iasdfsaftest.com');
    // element(by.model('stewdent.address')).sendKeys('address');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('city');
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.languages_coding')).sendKeys('coding');
    element(by.model('skills.personal')).sendKeys('personal');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    element(by.model('skills.smartphone')).sendKeys('smartphone');
    element(by.model('skills.tablet')).sendKeys('tablet');

    // element(by.model('work.industry_one')).sendKeys('computer skillz');
    // element(by.model('work.industry_two')).sendKeys('coding');
    // element(by.model('work.company_one')).sendKeys('personal');
    // element(by.model('work.company_two')).sendKeys('languages');
    // element(by.model('work.other_goals')).sendKeys('languages');

    var clickable = false;
    var submit = element(by.id('stewdentSubmit'));
    expect(submit.isEnabled()).toBe(false);
    // this.shouldSeeDisabledFunds()
    //   .then(function() {
    //     element(by.id('stewdentSubmit')).first().click()
    //       .then(
    //         function() {
    //           throw "Can click Funds element that should be disabled";
    // 	      clickable = true;
    //         },
    //         function() {
	      
    // 	    }
    //       )
    //     ;
    //   });

    
  });

  it("Should only need the required fields to create the objects", function() {
    // browser.get('http://www.tommidson.com/#/stewdents');
    browser.get('/#/stewdents');
    
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2013");
    element(by.model('stewdent.end_year')).sendKeys("2015");
    // element(by.model('stewdent.start_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.end_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.student_email')).sendKeys('test@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    element(by.id('stewdentSubmit')).click();
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
  });
});
