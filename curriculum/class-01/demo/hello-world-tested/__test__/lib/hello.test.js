'use strict';

// Require the module under test
const hello = require('../../lib/hello.js');

describe('Hello function', () => {

  // Tests are documentation.  Is there any need to comment what these are doing?  NOT.
  it('requires one param', () => {
    let message = hello.sayHello();
    expect(message).toBeNull();
  });

  it('only allows one param', () => {
    let message = hello.sayHello('john','cathy');
    expect(message).toBeNull();
  });

  it('does not allow numeric values', () => {
    let message = hello.sayHello(1);
    expect(message).toBeNull();
  });

  it('does not allow arrays as a param', () => {
    let message = hello.sayHello([]);
    expect(message).toBeNull();
  });

  it('does not allow objects as a param', () => {
    let message = hello.sayHello({});
    expect(message).toBeNull();
  });

  it('works when given a word', () => {
    var message = hello.sayHello('John');
    var expectedOutput = 'Hello, John';
    expect(message).toEqual(expectedOutput);
  });
});

describe('Goodbye function', () => {
  it('expected goodbye message', () => {
    let message = hello.sayGoodbye();
    let expectedOutput = 'Goodbye';
    expect(message).toEqual(expectedOutput);
  });
});
