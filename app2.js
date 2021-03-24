const hello = "안녕";
const introduce = "나는 그랩이야!";
const age = 5;

const text = hello + "! " + introduce + " 그리고 " + age + "살이야.";

const newText = `${hello}! ${introudce} 그리고 ${age}살이야`;

const grab = {
  name: "그랩",
  age: 27,
};
const people = ["민수", "철수"];

var name = grab.name;
var age = grab.age;
var minsoo = people[0];
var chulsoo = people[1];

var { name, age } = grab;
console.log(name);

const [minsoo, chulsoo] = people;

products.forEach(function (product, index) {
  console.log(index + 1 + "번째 호출");
  console.log(product);
});

products.map(function (product, index) {
  console.log(index + 1 + "번째 호출");
  console.log(product);
});

var productNames = products.map((product, index) => {
  return product.name;
});

var productElements = products.map((product, index) => {
  return (
    <div>
      <span>{product.name}</span>
      ...
    </div>
  );
});


import axios from 'axios'; 
import App from './App.js' 
import Potato from "./main" 

function App(){
	return <h1>hello</h1>
}

export default App;

function funcA(){
	//...
}
function funcB(){
	//...
}
const varC = 'hello';
export {
		a : funcA,
	b : funcB,
	c : varC
}


import {a, b, c} from './App.js'


