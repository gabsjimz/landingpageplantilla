// Room data
const rooms = [
  {
    image: "/assets/Habitaciones Triples.JPG",
    name: "Habitaciones Triples",
    price: 60,
  },
  {
    image: "/assets/Habitaciones Matrimoniales.JPG",
    name: "Habitaciones Matrimoniales",
    price: 25,
  },
  {
    image: "/assets/Habitaciones Dobles.JPG",
    name: "Habitaciones Dobles",
    price: 35,
  },
];

// Populate rooms
function populateRooms() {
  const roomGrid = document.getElementById("roomGrid");

  rooms.forEach((room) => {
    const roomCard = document.createElement("div");
    roomCard.className = "room-card";

    roomCard.innerHTML = `
            <div class="room-image" onclick="irAVista()" style = "cursor:pointer">
                <img src="${room.image}" alt="${room.name}">
            </div>
            <h4 style="padding-top:0.5rem">${room.name}</h4>
            <p>Desde:</p>
            <p style="padding-bottom:1rem"; class="price">$${room.price}/por noche</p>
            <button style="padding-left:1.5rem" class="btn btn-outline">¡Reserva ya!</button>
        `;

    roomGrid.appendChild(roomCard);
  });
}

// Animate statistics
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");

  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateStat = () => {
      current += step;
      if (current < target) {
        stat.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateStat);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };

    updateStat();
  });
}

// Newsletter form submission
function handleNewsletterSubmit() {
  const form = document.getElementById("newsletterForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("input").value;

    // Here you would typically send this to your server
    alert(`Thank you for subscribing with: ${email}`);
    form.reset();
  });
}

// Smooth scroll for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          if (entry.target.classList.contains("stats")) {
            animateStats();
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe elements
  document.querySelectorAll(".featured, .stats, .newsletter").forEach((el) => {
    observer.observe(el);
  });
}

// Toggle menu for mobile
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// Cambiar color de la barra de menú al hacer scroll
function initScrollMenuColor() {
  const menuBar = document.querySelector(".menu-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      menuBar.style.backgroundColor = "rgb(34, 47, 30,0.425)";
    } else {
      menuBar.style.backgroundColor = "rgba(34, 47, 30)";
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateRooms();
  handleNewsletterSubmit();
  initSmoothScroll();
  initScrollAnimations();
  initMobileMenu();
  initScrollMenuColor();
});

// Add scroll event listener for header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".nav-section");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// cambiar vista

function irAVista() {
  window.location.href = "room.html";
}
