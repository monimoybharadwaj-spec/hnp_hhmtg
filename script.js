const demandTabs = document.querySelectorAll(".demand-tab");
const demandCards = document.querySelectorAll(".demand-card");

demandTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    demandTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    demandCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.hidden = !shouldShow;
    });
  });
});

demandCards.forEach((card) => {
  const button = card.querySelector("button");

  button.addEventListener("click", () => {
    const expanded = card.classList.toggle("open");
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Hide action plan" : "Read action plan";
  });
});

const joinForm = document.querySelector(".join-form");
const statusLine = document.querySelector(".form-status");
const partyEmail = "holinessnationalparty@gmail.com";

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(joinForm);
  const name = form.get("name").trim();
  const city = form.get("city").trim();
  const issue = form.get("issue");

  if (!name || !city) {
    statusLine.textContent = "Please enter your name and city.";
    return;
  }

  const subject = `HNP join interest from ${name}`;
  const body = [
    "Hello Holiness National Party,",
    "",
    `Name: ${name}`,
    `City: ${city}`,
    `Main issue: ${issue}`,
    "",
    "I want to show my interest in HNP and share this issue from my area.",
  ].join("\n");

  window.location.href = `mailto:${partyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  statusLine.textContent = "Your email app should open with a ready message for HNP.";
});
