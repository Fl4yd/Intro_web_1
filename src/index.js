import { tokenToString } from "typescript";
import "./styles.css";

const myButton = document.getElementById('my-button');
const myButton2 = document.getElementById('add-data'); 
const hello = document.getElementById('hello');
const lista = document.getElementById('lista');
const teksti = document.getElementById('teksti');


myButton.onclick = function() {
  console.log('Hello world')
  hello.innerHTML='My notebook'
};
myButton2.onclick = function() {
  lista.innerHTML = "<li>jotain</li><li>" + teksti.value + "</li>"
  //lista.innerHTML = "<li>" + teksti.value + "</li>";
}

