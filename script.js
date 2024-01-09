let userInput ;
const container = document.querySelector(".container")
// const inputSlider = document.querySelector('input')
const divDelegation =  document.querySelector('.userInput')

// ?  Function to a have grid stucture based on user Input;

divDelegation.addEventListener('click',(e)=>{
    // reloadPage()
    // subContainerCreation(0);
    const inputVal  = e.target.value;
    subContainerCreation(inputVal)
    
// ! Event listerners for the divs
    const subContainer = document.querySelectorAll(".subContainer")
const boxes = document.querySelectorAll(".boxes");
const realBoxes = [...boxes];
console.log(realBoxes);

realBoxes.map(item =>{
item.addEventListener('mousemove',(e)=>{
    console.log(e);
    item.classList.add("boxBG");
})
})

     
 })

function reset(){
    location.reload()
}

function subContainerCreation(n){
    const x = n
    let subContainer = [];
    let boxes = [];
   
    for(let i = 0 ; i<n;i++){
      subContainer.push(document.createElement('div'))
      container.appendChild(subContainer[i])
      subContainer[i].classList.add('subContainer')
      
      for( let k = 0 ; k<n ; k++){
        boxes.push(document.createElement('div'));
        boxes[x*i+k].classList.add('boxes');
        subContainer[i].appendChild(boxes[x*i+k])

      }
    }
     console.log(subContainer);
}
// BigInt.addEventListeners



