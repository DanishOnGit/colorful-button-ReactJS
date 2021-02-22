import React, { useState } from "react";
import "./styles.css";

let username=prompt("Enter your name")
let counter=0;
 let textArray=[username,"You","Are","A","Nice","Person !","Never","Give","Up !","Keep","Working","Hard !","You","Will","Achieve","Your","Dreams !","Stay","Strong","Help","Others !","Keep","Learning","Keep","Hustling","Annndd","Have","A","Great","Day !",username]

 const colorArray=["#CCEC27","#6C63FF","#2ECE5D","#F15433","#D2D01B","#D21BB9","#FD076C","#FD070D","#07FDA7","#04BC67","#32BC04","#A69F13","#6C13A6","#A2EC27","#1FBB4A","#0E10CE","#26077D","#00712D","#CED609","#C71010","#C71026","#EA3095","#2210B9","#10B9AD","#3c5b7d","#0AA478","#E01221","#E09A12","#091E7B","#0D7B09","#851010"]


 

export default function App() {

  const [text,setText]=useState("")

  const [counter,setCounter]=useState(0)

  
  function clickHandler(){
    let newText=textArray[counter].toUpperCase()
    setText(newText)
    

    let newcounter=counter+1;
    setCounter(newcounter)

    if(newcounter>=colorArray.length){
      let newcounter=0;
     setCounter(newcounter)
    }


  }

  return (
    <div className="App">
      <h1>~A Colourful Button</h1>
<h3>{text}</h3>

      <button onClick={clickHandler}style={{backgroundColor:colorArray[counter]}}>Click me !</button> 
      
    </div>
  );
}
