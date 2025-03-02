document.getElementById('discover-container').addEventListener('click', function (){
    window.location.href = "main.html";
});
document.addEventListener('DOMContentLoaded',function(){
    let button =document.getElementById('complete button1');
button.addEventListener('click', function (){
    alert('Board Upated Successfully');
     
    let text = document.getElementById('text');
    text.innerHTML = " <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> "

   let  btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
    if (num2 - 1 <= 0){
        button.disabled = true ;
    }

  
})
})


document.getElementById('complete button2').addEventListener('click', function (){
    alert('Board Upated Successfully');

    let btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
     
    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> 
     <p> You have completed the task Add Dark Mode at 2:3:45 AM </p> 
 `
})


document.getElementById('complete button3').addEventListener('click', function (){
    alert('Board Upated Successfully');

    let btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
     
    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> 
     <p> You have completed the task Add Dark Mode at 2:3:45 AM </p> 
          <p> You have completed the task Optimize Home page at 2:3:45 AM </p> 
 `
})


document.getElementById('complete button4').addEventListener('click', function (){
    alert('Board Upated Successfully');
    let btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
     
    let text = document.getElementById('text');
    text.innerHTML =  `      
    <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> 
    <p> You have completed the task Add Dark Mode at 2:3:45 AM </p> 
    <p> You have completed the task Optimize Home page at 2:3:45 AM </p> 
    <p> You have completed the task Add new emoji 🤲 at 2:3:45 AM </p> 
    `
})

document.getElementById('complete button5').addEventListener('click', function (){
    alert('Board Upated Successfully');

    let btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn6');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
     
    let text = document.getElementById('text');
    text.innerHTML = `      
    <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> 
    <p> You have completed the task Add Dark Mode at 2:3:45 AM </p> 
    <p> You have completed the task Optimize Home page at 2:3:45 AM </p> 
    <p> You have completed the task Add new emoji 🤲 at 2:3:45 AM </p> 
    <p> You have completed the task Integrate OpenAI API at 2:3:45 AM </p> 
    `
})



document.getElementById('complete button6').addEventListener('click', function (){
    alert('Board Upated Successfully');
    alert ('Congrates!! You have the completed all the current task');
    let btn1= document.getElementById('btn1');
    let num1 = parseInt ('btn1.innerText');

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt('btn2.innerText');
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;
     
    let text = document.getElementById('text');
    text.innerHTML = `      
    <p> You have completed the task Fix Mobile Button at 1:32:34 AM </p> 
    <p> You have completed the task Add Dark Mode at 2:3:45 AM </p> 
    <p> You have completed the task Optimize Home page at 2:3:45 AM </p> 
    <p> You have completed the task Add new emoji 🤲 at 2:3:45 AM </p> 
    <p> You have completed the task Integrate OpenAI API at 2:3:45 AM </p> 
       <p> You have completed the task Improve Job searching at 2:3:45 AM </p> 
    `
})

 
 document.getElementById('clearbtn').addEventListener('click', function (){
    document.getElementById('text').innerText ='';
 })