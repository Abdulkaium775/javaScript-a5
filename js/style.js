document.getElementById('discover-container').addEventListener('click', function (){
    window.location.href = "main.html";
})


document.getElementById('complete-button1').addEventListener('click', function () {
    alert ('Board Upated Successfully');

    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at ${new Date().toLocaleTimeString()} </p> 
        
 `
 this.disabled = true;
});




document.getElementById('complete-button2').addEventListener('click', function () {
    alert ('Board Upated Successfully');

    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Add Dark Mode at  ${new Date().toLocaleTimeString()} </p> 
        
 `
 this.disabled = true;
});


document.getElementById('complete-button3').addEventListener('click', function () {
    alert ('Board Upated Successfully'); 
    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at  ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Add Dark Mode at ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Optimize Home page at  ${new Date().toLocaleTimeString()} </p> 
        
 `

 this.disabled = true;
});



document.getElementById('complete-button4').addEventListener('click', function () {
    alert ('Board Upated Successfully');  

    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at  ${new Date().toLocaleTimeString()}</p> 
     <p> You have completed the task Add Dark Mode at  ${new Date().toLocaleTimeString()}</p> 
     <p> You have completed the task Optimize Home page at  ${new Date().toLocaleTimeString()}</p>
    <p> You have completed the task Add new emoji 🤲 at  ${new Date().toLocaleTimeString()} </p> 
        
 `

    this.disabled = true;
});


document.getElementById('complete-button5').addEventListener('click', function () {
    alert ('Board Upated Successfully');
    
    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at  ${new Date().toLocaleTimeString()}</p> 
     <p> You have completed the task Add Dark Mode at  ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Optimize Home page at  ${new Date().toLocaleTimeString()} </p>
    <p> You have completed the task Add new emoji 🤲 at  ${new Date().toLocaleTimeString()}</p>
     <p> You have completed the task Integrate OpenAI API at  ${new Date().toLocaleTimeString()} </p>  
        
 `

 this.disabled = true;
});


document.getElementById('complete-button6').addEventListener('click', function () {
    alert ('Board Upated Successfully');
    alert ('Congrates!! all ok'); 
    let btn1 = document.getElementById('btn1');
    let num1 = parseInt(btn1.innerText);

    let btn2 = document.getElementById('btn2');
    let num2 = parseInt(btn2.innerText);

    // Correcting increment/decrement
    btn1.innerText = num1 + 1;
    btn2.innerText = num2 - 1;

    let text = document.getElementById('text');
    text.innerHTML =`
      <p> You have completed the task Fix Mobile Button at ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Add Dark Mode at  ${new Date().toLocaleTimeString()} </p> 
     <p> You have completed the task Optimize Home page at ${new Date().toLocaleTimeString()} </p>
    <p> You have completed the task Add new emoji 🤲 at  ${new Date().toLocaleTimeString()} </p>
     <p> You have completed the task Integrate OpenAI API at  ${new Date().toLocaleTimeString()} </p>  
     <p> You have completed the task Improve Job Searching at  ${new Date().toLocaleTimeString()} </p>
        
 `

 this.disabled = true;
});


 
 document.getElementById('clearbtn').addEventListener('click', function (){
    document.getElementById('text').innerText ='';
 })