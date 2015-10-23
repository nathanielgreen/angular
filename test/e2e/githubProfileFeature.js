var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    mock(['githubUserSearch.js']);
    browser.get('http://localhost:8080');
  })

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {

    searchBox.sendKeys('spikezilla');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spikezilla');
  });

  it('finds the last Spike', function() { //this is a silly test, but roll with it
    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spikezilla');
  });

});
