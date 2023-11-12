/**
 * Decreases the counter by 1.
 *
 * @format
 */

function decreaseScore() {
  const display = document.querySelector(".display");
  display.textContent = Number(display.textContent) - 1;
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

document.addEventListener("DOMContentLoaded", () => {
  const decrease = document.querySelector(".decrease");
  decrease.addEventListener("click", decreaseScore);

  const increase = document.querySelector(".increase");
  increase.addEventListener("click", increaseScore);

  const reset = document.querySelector(".reset");
  reset.addEventListener("click", resetScore);
});
