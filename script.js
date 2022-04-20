let activeRate;

function chosen(rate) {
  activeRate = rate;

  ratings = document.querySelectorAll(".ratings > button");
  ratings.forEach((element) => {
    element.classList.remove("active");
  });
  ratings[activeRate - 1].classList.add("active");
}

function submit() {
  if (activeRate) {
    let ratingCard = document.getElementById("rating-card");
    let thanksCard = document.getElementById("thanks-card");

    ratingCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");

    thanksCard.querySelector("#rate-chosen").innerHTML = activeRate;
  }
}
