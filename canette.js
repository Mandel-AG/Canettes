const divCan = document.querySelector('.can');
const divCanEl = document.querySelector('.canElement');
const divCanEls = document.querySelectorAll('.canElement');
const divCanElTxt = document.querySelectorAll('.canElementText');
const divTextScroll = document.querySelector('.youCanScroll');

let initialDiv = divCanElTxt[0].children[0];
let divToAdd = initialDiv.cloneNode(true);




// function replaceVerticalScrollByHorizontal(event) {
//   if (event.deltaY != 0) {
//     // manually scroll horizonally instead
//     window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
    
//     // prevent vertical scroll
//     event.preventDefault();
//     console.log('delta Y',event.deltaY)
//     console.log('scrool Y',window.scrollY)
//     console.log('scrool X',window.scrollX)
//   }
//   return;
// }

// /* Listener on window once we start scrolling, we run our function 💨 */
// window.addEventListener('wheel', replaceVerticalScrollByHorizontal, {passive: false});






 /* We define our function 🕹 */
 function replaceVerticalScrollByHorizontal(event) {
  if (event.deltaY != 0) {
    // manually scroll horizonally instead
    divCan.scroll(window.scrollY + event.deltaY * 5, window.scrollX);
    
    // prevent vertical scroll
    event.preventDefault();

    console.log('delta Y',event.deltaY)
    console.log('scrool Y',window.scrollY)
    console.log('scrool X',window.scrollX)
  }
  return;
}

/* Listener on window once we start scrolling, we run our function 💨 */
window.addEventListener('wheel', replaceVerticalScrollByHorizontal,{passive:false});



divCan.addEventListener("scroll", function(e){
  divCanEl.scrollLeft = divCan.scrollLeft;
  // divCan.scrollTop = divCan.scrollLeft
  // console.log(divCan.scrollLeft)

  divCanEls.forEach(element => {
      element.scrollLeft = divCanEl.scrollLeft;
  });


  if(divCan.scrollLeft >= 100){
    divTextScroll.classList.add("disapear");
  }
  else{
    divTextScroll.classList.remove("disapear");
  }
});



Array.from(divCanElTxt).map(el => {

  for (i =0; i<20; i++){
  let new_1 = el.children[0].cloneNode(true);
  let new_2 = el.children[1].cloneNode(true);

    el.appendChild(new_1);
    el.appendChild(new_2);
  }
})





