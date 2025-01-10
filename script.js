function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value.trim() !== "") {
    showPopup(true);
    const element = document.createElement("div");
    element.classList.add("recommendation");
    element.textContent = `"${recommendation.value}"`;
    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
  }
}

function showPopup(visible) {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.visibility = visible ? "visible" : "hidden";
    if (visible) {
      setTimeout(() => showPopup(false), 1000);
    }
  }
}
