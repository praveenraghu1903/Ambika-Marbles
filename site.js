// Shop details. Add your number below (digits only, with country code, e.g. "919876543210").
// While PHONE is empty, the WhatsApp button stays hidden and the main button points to the showrooms.
const CONFIG = {
  PHONE: "919755657287"
};

document.getElementById("year").textContent = new Date().getFullYear();

if (CONFIG.PHONE) {
  const call = document.querySelector("[data-call]");
  call.href = "tel:+" + CONFIG.PHONE;
  call.textContent = "Call Us";
  const wa = document.querySelector("[data-whatsapp]");
  wa.href = "https://wa.me/" + CONFIG.PHONE + "?text=" +
    encodeURIComponent("Hello Ambika Marbles and Tiles, I would like a quote.");
  wa.hidden = false;
}

const btn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  }
});
