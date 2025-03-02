
document.getElementById('theme-btn').addEventListener('click',function(){
     let colors = ['red','blue','green','yellow','purple'];
     let randomColor = Math.floor(Math.random() * colors.length);
     document.body.style.backgroundColor = colors[randomColor] ;
})

const dateElement = document.getElementById('date');
const currentDate = new Date().toDateString();

dateElement.innerHTML = `<p>${currentDate}</p>`;
