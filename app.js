module.exports = function(){
    return 'hello';
  }
   // if we have a file which exports multiple functions:
   module.exports = {
    //crete a fn sayHello
    sayHello: function(){
      return 'hello'
  
  
    },
  
  
    addNums: function(value1, value2){
      return value1+value2
  
  
    }
   }
  
  
  
  
  
  
  
  
  
  