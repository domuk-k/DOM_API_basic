// DOM PICKER
const $counter = document.querySelector('.counter');
const $led = document.querySelector('.led');
const $catCount = document.querySelector('.catCount');

// STATE CONTROL DECLARATION
const countHandlers = (function () {
  //IIFE
  let _state = 0;

  return {
    increase() {
      $counter.textContent = ++_state;
    },
    decrease() {
      if (_state) $counter.textContent = --_state
    },
    isStateMultiplyOf(n) {
      if (_state % n) {
        $led.style.backgroundColor = 'springgreen';
      } else {
        $led.style.backgroundColor = 'red';
      }
    },
    catCreation() {
      const $cat = document.createElement('li');
      $cat.className = 'cat';
      $catCount.append($cat);

      $cat.innerHTML = `<img src="https://img.danawa.com/images/descFiles/4/936/3935859_1559964493920.jpeg"
      style="width:130px"></img>`;
      $cat.style.display = 'inline-block';
    },
    catDeletion() {
      const $catsOnDisplay = document.querySelectorAll('.cat');
      const $cat = $catsOnDisplay[0];
      if (_state >= 0) {
        $catCount.removeChild($cat);
      }
    },
  };
})();

// EVENT LISTENER ATTACHED
document.querySelector('.increase').addEventListener('click', () => {
  countHandlers.increase();
  countHandlers.isStateMultiplyOf(3);
  countHandlers.catCreation();
});
document.querySelector('.decrease').addEventListener('click', () => {
  countHandlers.decrease();
  countHandlers.isStateMultiplyOf(3);
  countHandlers.catDeletion();
});