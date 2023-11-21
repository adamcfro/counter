/**
 * Decreases the counter by 1, stopping when it reaches 0.
 *
 * @format
 */

function decreaseScore() {
  const display = document.querySelector(".display");
  let num = Number(display.textContent) - 1;
  num = num >= 0 ? num : 0;
  display.textContent = num;
}

/**
 * Increases the counter by 1.
 */
function increaseScore() {
  const display = document.querySelector(".display");
  display.textContent = Number(display.textContent) + 1;
}

/**
 * Resets the counter to 0.
 */
function resetScore() {
  const display = document.querySelector(".display");
  display.textContent = 0;
}

/**
 * Starts the counter app that allows users to keep track of small values and
 * adds event listeners for user input.
 */
function startApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const decrease = document.querySelector(".decrease");
    decrease.addEventListener("click", decreaseScore);

    const increase = document.querySelector(".increase");
    increase.addEventListener("click", increaseScore);

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", resetScore);
  });
}

startApp();
