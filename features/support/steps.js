// features/support/steps.js
const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout
} = require("cucumber");
const { expect } = require("chai");
const {
  openBrowser,
  $,
  goto,
  focus,
  click,
  write,
  into,
  contains,
  checkBox,
  textBox,
  text,
  toRightOf,
  toLeftOf,
  closeBrowser,
  waitFor,
  below
} = require("taiko");

setDefaultTimeout(30 * 1000); // 30s

BeforeAll(function() {
  return openBrowser({ headless: false });
});

AfterAll(function() {
  return closeBrowser();
});

Given("a variable set to {int}", function(number) {
  this.setTo(number);

  return goto("https://google.com");
});

When("I increment the variable by {int}", async function(number) {
  this.incrementBy(number);

  await write(`${this.variable} + ${number} =`);
  await click("Google Search");
});

Then("the variable should contain {int}", async function(number) {
  expect(this.variable).to.eql(number);

  const result = await text(`${number}`).exists();
  expect(result).to.eql(true);
});
