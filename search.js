const btn = document.getElementById('btn');
const icon = document.getElementById('icon')
const icon2 = document.getElementById('icon2')
const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const line2 = document.getElementById('line2');
const search2 = document.getElementById('search2')
const line1 = document.getElementById('line1');


btn.addEventListener("click", () => {
    if (input.classList.length === 2) {
      input.classList.remove("active");
      icon.style.display = 'block'
      icon2.style.display = 'none'
    } else {
      input.classList.add("active");
      input.focus();
      icon.style.display = 'none'
      icon2.style.display = 'block'
    }
  });
  input2.addEventListener('click',()=>{
    input2.style.width = '250px'
    line1.classList.add ('line1_1')
    console.log('hlo');
  })
  line2.addEventListener('click',() =>{
    if(input2.style.width == '250px'){
      line1.classList.remove ('line1_1')
      input2.style.width = '30px'
    }
  })
 

  