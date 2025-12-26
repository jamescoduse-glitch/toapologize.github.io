const clarity = document.getElementById("clarity");
const words = document.querySelectorAll(".title span, .step span");

function update() {
  const rect = clarity.getBoundingClientRect();
  const total = window.innerHeight * 3;
  const progress = Math.min(
    Math.max(-rect.top / total, 0),
    1
  );

  document.documentElement.style.setProperty("--progress", progress);

  const visibleCount = Math.floor(progress * words.length);
  words.forEach((word, i) => {
    word.classList.toggle("show", i <= visibleCount);
  });

  requestAnimationFrame(update);
}

update();
