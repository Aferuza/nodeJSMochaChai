//bring in the assertions from chai
const assert = require('chai').assert;

// to bring in the sayHello function
const sayHello = require('../app').sayHello;

//to bring in addNums fn:
const addNums = require('../app').addNums;

//bring in app.js file
//const app = require('../app');
// start test suit with describe

describe('App I am testing', function(){
  it('app shd return hello', function(){

  //use assert module from chai
  //params- the function in app- actual and expected /"HELLO"
  //assert.equal(app(), 'hello');

  //its good practice to put fn sayHello into result var
  let result = sayHello();
 
 assert.equal(sayHello(), 'hello');
  //instad of fn name, use result var as actual assertion //value
  assert.equal(result, 'hello');


  })
 
//create another it()- verify return type is string
  it('sayHello shd return type string', function(){
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('Added nums shd be above 5' , function(){
    let result = addNums(5, 7);
    assert.isAbove(result, 9);
  })

  it('addNums shd return a num', function(){
    let result = addNums(6,5);
    assert.typeOf(result, 'number');
  })

  //

})

