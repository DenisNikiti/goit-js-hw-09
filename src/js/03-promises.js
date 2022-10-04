
 const formEl = document.querySelector(".form")

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


formEl.addEventListener("submit",onformSubmit)

function onformSubmit(evt) {
  evt.preventDefault()
  const formdata = new FormData(evt.currentTarget)
  }