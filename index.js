var Mouse=require('./Mouse');
var Cat =require('./Cat');
var Dog=require('./Dog')

var mouse=new Mouse('Mickey');
var cat=new Cat();
var dog=new Dog();
try{
	cat.eat(dog);
}catch(err){
	console.log('Error while cat eating a dog')
}

console.log(cat)