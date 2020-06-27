var x = document.querySelectorAll('.trigger-input')

x.forEach(e => {
   e.addEventListener("keyup",() => {
      e.value ? e.classList.add('not-empty') : e.classList.remove('not-empty')
   })
})

var my_label = document.getElementById('message');
const auto_grow = (element) => {
   element.style.height = "5px";
   element.style.height = (element.scrollHeight+2)+"px";
   my_label.style.transform = "0px";
   my_label.style.transform = `translate(${element.scrollHeight > 28  && screen.width <= 580 ? (screen.width/2 - 45) : element.scrollHeight > 28 && screen.width > 581 ? 290-65 : 0}px, -${element.scrollHeight-10}px)`;
   my_label.style.transition = element.scrollHeight > 56 ? "transform 0s" : "transform 0.2s ease-in-out";
}

var slideIndex = 0;
slideProduct();

function slideProduct() {
  var i;
  var x = document.getElementsByClassName("fadeMe");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex+=1;
  slideIndex > x.length ? slideIndex = 1 : null    
  x[slideIndex-1].style.display = "block";  
  setTimeout(slideProduct, 2000);    
}

var logoChange = document.getElementById("myLogo")
const colorPicker = () => {
   let myColor = document.querySelectorAll('.color-item');
   myColor.forEach(e => {
      e.addEventListener("click", () => {
         if(e.className.split(' ')[1] == "blossom"){
            document.documentElement.style.setProperty('--main-color-1', 'rgba(242, 150, 187, 1)');
            document.documentElement.style.setProperty('--main-color-2', 'rgb(230, 230, 230)');
            document.documentElement.style.setProperty('--main-color-3', 'rgb(53, 53, 53)');
            logoChange.src = "assets/img/logowhite.png"
         }else if(e.className.split(' ')[1] == "dark") {
            document.documentElement.style.setProperty('--main-color-1', 'rgb(53, 53, 53)');
            document.documentElement.style.setProperty('--main-color-2', 'rgb(230, 230, 230)');
            document.documentElement.style.setProperty('--main-color-3', 'rgba(242, 150, 187, 1)');
            logoChange.src = "assets/img/logowhite.png"
         }else if(e.className.split(' ')[1] == "light") {
            document.documentElement.style.setProperty('--main-color-1', 'rgb(230, 230, 230)');
            document.documentElement.style.setProperty('--main-color-2', 'rgb(53, 53, 53)');
            document.documentElement.style.setProperty('--main-color-3', 'rgba(242, 150, 187, 1)');
            logoChange.src = "assets/img/logoblack.png"
         }
      })
   })
}
colorPicker();

