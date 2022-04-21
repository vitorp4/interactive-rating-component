document.querySelector('form').addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();

  let rate = document.querySelector('input[name="rate"]:checked')?.value;

  if (rate) {
    let ratingCard = document.getElementById("rating-card");
    let thanksCard = document.getElementById("thanks-card");

    ratingCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");

    thanksCard.querySelector("#rate-chosen").innerHTML = rate;
  }
}
