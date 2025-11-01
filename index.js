let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function increaseHomeScoreOne() {
  homeScore += 1;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScoretwo() {
  homeScore += 2;
  homeStoreEl.textContent = homeScore;
}

function increaseHomeScorethree() {
  homeScore += 3;
  homeStoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
  guestScore += 1;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScoretwo() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}

function increaseGuestScorethree() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}

function reset1() {
  homeScore = 0;
  guestScore = 0;
  homeStoreEl.textContent = homeScore;
  guestStoreEl.textContent = guestScore;

  // Flash animation for reset
  homeStoreEl.style.color = "#ff4040";
  guestStoreEl.style.color = "#3da9fc";
  setTimeout(() => {
    homeStoreEl.style.color = "#f5f5f5";
    guestStoreEl.style.color = "#f5f5f5";
  }, 300);
}
