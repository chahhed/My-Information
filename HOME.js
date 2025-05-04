function updateClock() {
  const now = new Date();
  const second = now.getSeconds() * 6;
  const minute = now.getMinutes() * 6;
  const hour = (now.getHours() % 12) * 30 + now.getMinutes() / 2;

  document.getElementById('second-hand').style.transform = `rotate(${second}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minute}deg)`;
  document.getElementById('hour-hand').style.transform = `rotate(${hour}deg)`;
}
setInterval(updateClock, 1000);
updateClock();

const waveText = document.getElementById("waveText");
const originalText = waveText.textContent.trim();
waveText.innerHTML = "";
[...originalText].forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.1}s`;
  waveText.appendChild(span);
});
waveText.addEventListener("mouseenter", () => {
  waveText.querySelectorAll("span").forEach(span => {
    span.classList.add("animate");
  });
});
waveText.addEventListener("mouseleave", () => {
  waveText.querySelectorAll("span").forEach(span => {
    span.classList.remove("animate");
  });
});

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});