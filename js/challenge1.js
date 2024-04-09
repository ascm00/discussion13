function setBlue(){
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h1").style.textAlign = "center"

}

document.addEventListener("dblclick", () =>{
    alert(Date.now());
});

const toggle = document.querySelector('#toggle');
const email = document.querySelector('#emailBox');
toggle.addEventListener('change', () => {
    if (this.checked) {
        email.style.display = '';
      } else {
        email.style.display = 'none';
      }
});

setBlue();


