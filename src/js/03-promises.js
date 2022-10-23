
 const formEl = document.querySelector(".form")
const inputsEl = document.querySelectorAll("input")
  
 let delay = 0;
  let step =  0;
  let amount = 0;
  
     
  
function createPromise(time) {
      
  return new Promise((resovle, reject) => {
    const shouldResolve = Math.random() > 0.3; 
             
            setTimeout(() => {
                  if (shouldResolve) {
                resovle(time)
             }
               reject(time)
            }, time);
    delay += step
    
  })



  }


  







formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  delay = Number(inputsEl[0].value)
  step = Number(inputsEl[1].value)
  amount = Number(inputsEl[2].value)
  evt.preventDefault()
  // const formdata = new FormData(evt.currentTarget)

  
   

  // formdata.forEach((value, name) => {
  //   if (name === "delay") {
  //     delay = value;
  //   }
  //   if (name === "step") {
  //     step = value;
  //   }
  //   if (name === "amount") {
  //     amount = value;
  //   }


  // })

      
  
  
    for (let index = 1; index <= amount; index += 1) {
      
  
createPromise(delay)
    .then((r ) => {
      console.log(`✅ Fulfilled promise ${index} in ${r}ms`);
      delay = delay + step
      console.log(r)
    })
    .catch((r ) => {
      console.log(`❌ Rejected promise ${index} in ${r}ms`);

      delay = delay + step
      console.log(r)
      

    });

      
      
    }


 
 
 

}






 