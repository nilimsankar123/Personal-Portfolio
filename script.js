// Selectors for menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight active navigation link based on scroll position
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Collapse navbar on scroll for mobile view
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }

    // Change header background on scroll
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Toggle navbar visibility on mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight and collapse menu on click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active')); // Remove active from all links
        link.classList.add('active'); // Add active to the clicked link

        // Collapse menu after clicking
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});

// Dynamic typing text effect
const dynamicText = document.getElementById('dynamic-text');
const roles = [
    "Frontend Designer",
    "Web Designer",
    "UI/UX Designer",
    "Web Developer",
    "Software Tester"
];

let index = 0;
let charIndex = 0;
let currentRole = roles[index];
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            currentRole = roles[index];
        }
    } else {
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
        }
    }
    dynamicText.textContent = currentRole.substring(0, charIndex);
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();

// Function to add active class based on scroll position
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar a');
    let currentPosition = window.scrollY;

    sections.forEach((section, index) => {
        // Check if the section is in the viewport
        if (section.offsetTop <= currentPosition + 100 && section.offsetTop + section.offsetHeight > currentPosition + 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Display the Education section by default
document.getElementById('education').style.display = 'block';  // Education is visible by default
document.getElementById('experience').style.display = 'none'; // Experience is hidden by default

// Toggle between Education and Experience sections
function toggleSection(section) {
    // Hide both sections
    document.getElementById('education').style.display = 'none';
    document.getElementById('experience').style.display = 'none';

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

// Fix for header highlight on scroll for section
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 100; // Offset for better alignment

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    });
});
