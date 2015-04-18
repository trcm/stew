describe('angularjs homepage', function() {
  
  it('should have a title', function() {
    browser.get('/#/stewdents');
    expect(browser.getTitle()).toEqual('Stew');
  });

  it('should create a stewdent object 1', function() {
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
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('tom@stew.com');
    // element(by.model('stewdent.address')).sendKeys('1 Queen St ');
    element(by.model('stewdent.city')).sendKeys('Brisbane');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('4000');
    element(by.model('stewdent.country')).sendKeys('Australia');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.languages_coding')).sendKeys('C python bs');
    element(by.model('skills.personal')).sendKeys('personal');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    // element(by.model('skills.smartphone')).sendKeys('smartphone');
    // element(by.model('skills.tablet')).sendKeys('tablet');
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();

  });
  
  it('should create a long stewdent object 1', function() {
    browser.get('/#/stewdents');
    // browser.get('http://www.tommidson.com/#/stewdents');
    // element(by.id('createButton')).click();
    element(by.model('stewdent.first_name')).sendKeys('Long');
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
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('long@stew.com');
    // element(by.model('stewdent.address')).sendKeys('1 Queen St ');
    element(by.model('stewdent.city')).sendKeys('Brisbane');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.post_code')).sendKeys('4000');
    element(by.model('stewdent.country')).sendKeys('Australia');
    
    element(by.model('skills.computer_based')).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie convallis erat. Suspendisse sed mauris quis neque posuere congue consequat in turpis. Phasellus iaculis tortor at ex semper viverra. Quisque rutrum urna ut pulvinar porttitor. Curabitur dapibus porta aliquam. Duis ac odio imperdiet, tincidunt leo eu, dictum tellus. Phasellus ac eros rutrum leo pharetra ultricies sit amet vel ipsum. Sed erat mi, faucibus sed nisl at, tristique tincidunt sapien. Maecenas et arcu et erat dignissim molestie. Quisque tincidunt turpis at efficitur tincidunt. Donec sit amet lacus eget sem tincidunt commodo. Donec ac lacus eu neque interdum luctus sed at purus. In dignissim tellus nec enim ornare, sed hendrerit lorem blandit. Praesent urna velit, pulvinar id velit nec, molestie luctus nulla. Pellentesque et mollis diam. Maecenas non metus turpis.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Suspendisse molestie lectus ac eros vestibulum placerat. Cras eleifend quis sem a cursus. Nullam pretium facilisis elementum. Donec tellus massa, ultrices nec feugiat vel, tempus eu ex. Proin porta, urna laoreet tincidunt iaculis, odio urna porttitor lectus, ac vestibulum enim lorem vel nulla. Donec a mollis mec tempus laoreet interdum. Nam luctus et justo at porta. Ut dictum mi in ante dignissim dapibus. Aenean pretium felis quis ante scelerisque pulvinar. Aenean lacinia lectus eu lorem euismod, ac tempus libero placerat. Curabitur iaculis ex ut magna sagittis, cursus commodo nibh varius. Donec malesuada mi id erat venenatis, ac consectetur dolor maximus. Quisque sollicitudin vitae nunc nec rhoncus. Ut condimentum ex nisi, ut sollicitudin quam pellentesque eu.Duis et fringilla nulla, eget fermentum nisl. Cras bibendum ligula a justo malesuada, eget tempus sem ultrices. Suspendisse eget lorem non nunc sagittis consectetur. Cras lorem leo, tincidunt a libero nec, consectetur fermentum quam. Nunc vehicula lacus efficitur augue pellentesque rutrum. Donec eu libero vitae leo vehicula efficitur. Aliquam dignissim odio eu interdum maximus. In dui felis, pellentesque quis metus sed, euismod pellentesque nulla. Cras porta est et euismod ");
    element(by.model('skills.languages_coding')).sendKeys('programming languaes');
    element(by.model('skills.personal')).sendKeys('personaLorem ipsum dolor sit amet, consectnas non metus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Suspendisse molestie lectus ac eros vestibulum placerat. Cras eleifend quis sem a cursus. Nullam pretium facilisis elementum. Donec tellus massa, ultrices nec feugiat vel, tempus eu ex. Proin porta, urna laoreet tincidunt iaculis, odio urna porttitor lectus, ac vestibulum enim lorem vel nulla. Donec a mollis metus, facilisis lobortis lorem. Integer faucibus pulvinar urna, eget pharetra velit laoreet eget. Nunc tempus laoreet interdum. Nam luctus et justo at porta. Ut dictum mi in ante dignissim dapibus. Aenean pretium felis quis ante scelerisque pulvinar. Aenean lacinia lectus eu lorem euismod, ac tempus libero placerat. Curabitur iaculis ex ut magna sagittis, cursus commodo nibh varius. Donec malesuada mi id erat venenatis, ac consectetur dolor maximus. Quisque sollicitudin vitae nunc nec rhoncus. Ut condimentum ex nisi, ut sollicitudin quam pellentesque eu. Duis et fringilla nulla, eget fermentum nisl. Cras bibendum ligula a justo malesuada, eget tempus sem ultrices. Suspendisse eget lorem non nunc sagittis consectetur. Cras lorem leo, tincidunt a libero nec, consectetur fermentum quam. Nunctesque nulla. Cras porta est et euismod ultrices. In nec enim ex. Vivamus malesuada ante eget leo fringilla, sit amet luctus enim auctor. Phasellus sagittis consequat maximus. Integer sed quam quam. Aenean quis nulla luctus, condimentum neque non, malesuada erat. Sed est enim, placerat et sem ac, feugiat accumsan dolor. Cras faucibus convallis orci in pretium. Sid egestas nisl tincidunt quis. Donec ex nisi, cursus ut magna vel, volutpat ultricies justo. Praesent pellentesque sed diam tempor sollicitudin. Vestibulum faucibus faucibus sapien, vitae luctus risus accumsan dapibus. Mauris condimentum elit a metus maximus, facilisis sagittis ipsum malesuada. Suspendisse mattis egestas leo sed feugiat. Proin at iaculis ipsum. Donec commodo facilisis magna sed sollicitudin. Donec porta ipsum purus, ut consectetur nibh vestibulum at. Nullam tempor vitae nibh ac bibendum. Fusce tempus metus urna, et pharetra augue consectetur a. Fusce et mauris urna. Nunc finibus quam vitae nibh dapibus, quis egestas nunc consectetur. Pellentesque id.l');
    element(by.model('skills.software_skills')).sendKeys('languagesLorem ipsum dolor sit ametlandit. Praesent urna velit, pulvinar id velit nec, molestie luctus nulla. Pellentesque et mollis diam. Maecenas non metus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Suspendisse molestie lectus ac eros vestibulum placerat. Cras eleifend quis sem a cursus. Nullam pretium facilisis elementum. Donec tellus massa, ultrices nec feugiat vel, tempus eu ex. Proin porta, urna laoreet tincidunt iaculis, odio urna porttitor lectus, ac vestibulum enim lorem vel nulla. Donec a mollis metus, facilisis lobortis lorem. Integer faucibus pulvinar urna, eget pharetra velit laoreet eget. Nunc tempus laoreet interdum. Nam luctus et justo at porta. Ut dictum mi in ante dignissim dapibus. Aenean pretium felis quis ante scelerisque pulvinar. Aenean lacinia lectus eu lorem euismod, ac tempus libero placerat. Curabitur iaculis ex ut magna sagittis, cursus commodo nibh varius. Donec malesuada mi id erat venenatis, ac consectetur dolor maximus. Quisque sollicitudin vitae nunc nec rhoncus. Ut condimentum ex nisi, ut sollicitudin quam pellentesque eu. Duis et fringilla nulla, eget fermentum nisl. Cras bibendum ligula a justo malesuada, eget tempus sem ultrices. Suspendisse eget icitur. Aliquam dignissim odio eu interdum maximus. In dui felis, pellentesque quis metus sed, euismod pellentesque nulla. Cras porta est et euismod ultrices. In nec enim ex. Vivamus malesuada ante eget leo fringilla, sit amet luctus enim auctor. Phasellus sagittis consequat maximus. Integer sed quam quam. Aenean quis nulla luctus, condimentum neque non, malesuaretium. Sed vulputate enim a mauris pharetra, condimentum dignissim nibh ornare. Sed rhoncus vulputate orci, id egestas nisl tincidunt quis. Donec ex nisi, cursus ut magna vel, volutpat ultricies justo. Praesent pellentesque sed diam tempor sollicitudin. Vestibulum faucibus faucibus sapien, vitae luctus risus accumsan dapibus. Mauris condimentum elit a metus maximus, facilisis sagittis ipsum malesuada. Suspendisse mattis egestas leo sed feugiat. Proin at iaculis ipsum. Donec commodo facilisis magna sed sollicitudin. Donec porta ipsum purus, ut consectetur nibh vestibulum at. Nullam tempor vitae nibh ac bibendum. Fusce tempus metus urna, et pharetra augue consectetur a. Fusce et mauris urna. Nunc finibus quam vitae nibh dapibus, quis egestas nunc consectetur. Pellentesque id.');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    // element(by.model('skills.smartphone')).sendKeys('smartphone');
    // element(by.model('skills.tablet')).sendKeys('tablet');
    
    element(by.model('agreeCheck')).click();
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
    element(by.model('stewdent.phone_num')).sendKeys('4321');
    // element(by.model('stewdent.student_num')).sendKeys('sutdent num');
    element(by.model('stewdent.email')).sendKeys('sam@stew.com');
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
    // element(by.model('skills.smartphone')).sendKeys('smartphone');
    // element(by.model('skills.tablet')).sendKeys('tablet');

    // element(by.model('work.industry_one')).sendKeys('computer skillz');
    // element(by.model('work.industry_two')).sendKeys('coding');
    // element(by.model('work.company_one')).sendKeys('personal');
    // element(by.model('work.company_two')).sendKeys('languages');
    // element(by.model('work.other_goals')).sendKeys('languages');
    
    element(by.model('agreeCheck')).click();
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
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('iasdfsaftest.com');
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
    // element(by.model('skills.smartphone')).sendKeys('smartphone');
    // element(by.model('skills.tablet')).sendKeys('tablet');

    // element(by.model('work.industry_one')).sendKeys('computer skillz');
    // element(by.model('work.industry_two')).sendKeys('coding');
    // element(by.model('work.company_one')).sendKeys('personal');
    // element(by.model('work.company_two')).sendKeys('languages');
    // element(by.model('work.other_goals')).sendKeys('languages');
    
    element(by.model('agreeCheck')).click();
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
  
  it("should cause the form to be invalid with alphanumeric cheracters", function() {
    browser.get('/#/stewdents');
    // element(by.id('createButton')).click();
    element(by.model('stewdent.first_name')).sendKeys('ƒ∂ƒ∂ß˚¬∆');
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
    element(by.model('stewdent.phone_num')).sendKeys('1234');
    element(by.model('stewdent.email')).sendKeys('iasdfsaftest.com');
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
    // element(by.model('skills.smartphone')).sendKeys('smartphone');
    // element(by.model('skills.tablet')).sendKeys('tablet');

    // element(by.model('work.industry_one')).sendKeys('computer skillz');
    // element(by.model('work.industry_two')).sendKeys('coding');
    // element(by.model('work.company_one')).sendKeys('personal');
    // element(by.model('work.company_two')).sendKeys('languages');
    // element(by.model('work.other_goals')).sendKeys('languages');
    
    element(by.model('agreeCheck')).click();
    var clickable = false;
    var submit = element(by.id('stewdentSubmit'));
    expect(submit.isEnabled()).toBe(false);
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
    element(by.model('stewdent.email')).sendKeys('test@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
    element(by.model('agreeCheck')).click();
    element(by.id('stewdentSubmit')).click();
  });
  
  it("Should not accent a grad date before a date year", function() {
    // browser.get('http://www.tommidson.com/#/stewdents');
    browser.get('/#/stewdents');
    
    element(by.model('stewdent.first_name')).sendKeys('tom');
    element(by.model('stewdent.last_name')).sendKeys('tom');
    element(by.model('stewdent.dob')).click();
    element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[1]/td[4]/a[@class='ui-state-default']")).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.university')).sendKeys('university');
    element(by.model('stewdent.degree')).sendKeys('degree');
    element(by.model('stewdent.start_year')).sendKeys("2015");
    element(by.model('stewdent.end_year')).sendKeys("2013");
    // element(by.model('stewdent.start_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    // element(by.model('stewdent.end_year')).click();
    // element(by.xpath("//div[@id='ui-datepicker-div']/table[@class='ui-datepicker-calendar']/tbody/tr[2]/td[3]/a[@class='ui-state-default']")).click();
    element(by.model('stewdent.email')).sendKeys('test@required.com');
    element(by.model('stewdent.city')).sendKeys('city');
    element(by.model('stewdent.state')).click();
    element(by.model('stewdent.country')).sendKeys('country');
    
    element(by.model('skills.computer_based')).sendKeys('computer skillz');
    element(by.model('skills.software_skills')).sendKeys('languages');
    element(by.model('skills.languages_spoken')).sendKeys('languages');
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

  // it("should delete all the users in the database made by testing", function() {
  //   browser.get('/#/admin');
  //   element(by.model('username')).sendKeys('admin');
  //   element(by.model('password')).sendKeys('admin');
    
  //   element(by.id('loginBtn')).click();
    
  //   var users = element.all(by.id("deleteBtn"));
  //   expect(users.count()).toEqual(3);

  //   element.all(by.id("deleteBtn")).each(function(element) {
  //     console.log('del');
  //     element.click();
  //   });
    
  // });
  
});
