class Person {
  constructor(name){
    this.name = name;
  }
  
  hello(){
    if (typeof this.name === 'string'){
      return `Hello, I am ${this.name}!`;
    } else {
      return 'Hello!';
    }
  }
}

var rich = new Person('Rich');

document.write(rich.hello());

 
