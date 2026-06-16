document.querySelectorAll(".nav a").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Navigation clicked");
  });
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Select all nav-items that have mega menus
const navItems = document.querySelectorAll(".nav-item.has-mega");

navItems.forEach(item => {
  let timeout;

  // Show menu on mouse enter
  item.addEventListener("mouseenter", () => {
    clearTimeout(timeout); // Cancel hide if mouse returns
    item.querySelector(".mega-menu").style.opacity = "1";
    item.querySelector(".mega-menu").style.visibility = "visible";
    item.querySelector(".mega-menu").style.transform = "translateY(0)";
  });

  // Hide menu on mouse leave, with delay
  item.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      item.querySelector(".mega-menu").style.opacity = "0";
      item.querySelector(".mega-menu").style.visibility = "hidden";
      item.querySelector(".mega-menu").style.transform = "translateY(10px)";
    }, 250); // 250ms delay
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// close when clicking a link
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
const mobileCloseBtn = document.querySelector(".mobile-close");

mobileCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

const seriesName = "سریال مورد علاقه‌ات";
const reminderTime = 1 * 60 * 1000;

setTimeout(() => {
  alert(`🎬 قسمت جدید ${seriesName} منتشر شد!\nالان می‌تونی تماشاش کنی 🍿`);
}, reminderTime);

