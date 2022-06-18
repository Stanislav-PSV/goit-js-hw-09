import { Notify } from 'notiflix/build/notiflix-notify-aio';
const stepEl = document.querySelector('input[name = "step"]');

const amount = document.querySelector('input[name = "amount"]');
const delayEl = document.querySelector('input[name = "delay"]');
const submit = document.querySelector('.form');
submit.addEventListener('submit', startFunction);

let timeId = 0;

function startFunction(event) {
  event.preventDefault();

  let amountValue = Number(amount.value);

  let i;

  for (i = 1; i <= amountValue; i += 1) {
    const firstDelay = Number(delayEl.value);

    const position = i;
    const delay =
      Number(delayEl.value) + i * Number(stepEl.value) - Number(stepEl.value);

    timeId = setTimeout(() => {
      createPromise(position, delay);
    }, delay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
    }
  });

  promise
    .then(result => {
      Notify.success(result);
      console.log(result);
    })

    .catch(error => {
      Notify.failure(error);
      console.log(error);
    });
}
