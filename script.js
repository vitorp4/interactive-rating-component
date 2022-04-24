const form = document.forms['rating-form'];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rate = form.rate.value;

  if (rate) {
    const ratingCard = document.getElementById("rating-card");
    const thanksCard = document.getElementById("thanks-card");

    ratingCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");

    thanksCard.querySelector("#rate-chosen").innerHTML = rate;
  }
});
