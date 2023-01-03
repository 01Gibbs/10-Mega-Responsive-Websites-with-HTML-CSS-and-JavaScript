const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector("section-1-icons.change");

  icon.classList.remove("change");

  if (i > i.length) {
    icons[0].classlist.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList("change");
  }
}, 4000);
