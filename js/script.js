/* =========================================
   GSAP
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   HERO ANIMATION
========================================= */

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".hero-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")

    .from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out"
    }, "-=0.4")

    .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")

    .from(".hero-actions", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.6");


/* =========================================
   CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.05
    });

});


function animateFollower() {

    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;

    gsap.set(follower, {
        x: followerX,
        y: followerY
    });

    requestAnimationFrame(animateFollower);
}

animateFollower();


/* =========================================
   CURSOR HOVER
========================================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .project, .skill-group"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        gsap.to(follower, {
            width: 60,
            height: 60,
            backgroundColor: "rgba(183,255,74,0.08)",
            borderColor: "#b7ff4a",
            duration: 0.25
        });

    });

    element.addEventListener("mouseleave", () => {

        gsap.to(follower, {
            width: 35,
            height: 35,
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,0.5)",
            duration: 0.25
        });

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   SECTION REVEALS
========================================= */

gsap.utils.toArray(".section-label").forEach((label) => {

    gsap.from(label, {

        scrollTrigger: {
            trigger: label,
            start: "top 85%"
        },

        x: -30,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out"

    });

});


/* =========================================
   PROJECT REVEALS
========================================= */

gsap.utils.toArray(".project").forEach((project) => {

    gsap.from(project, {

        scrollTrigger: {
            trigger: project,
            start: "top 80%"
        },

        y: 80,
        opacity: 0,

        duration: 1,

        ease: "power3.out"

    });

});


/* =========================================
   SKILLS REVEAL
========================================= */

gsap.utils.toArray(".skill-group").forEach((skill, index) => {

    gsap.from(skill, {

        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
        },

        y: 50,
        opacity: 0,

        duration: 0.7,

        delay: index * 0.1,

        ease: "power3.out"

    });

});


/* =========================================
   PARALLAX
========================================= */

gsap.to(".hero-grid", {

    yPercent: 20,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});


/* =========================================
   PROJECT IMAGE PARALLAX
========================================= */

gsap.utils.toArray(".project-placeholder").forEach((image) => {

    gsap.to(image, {

        yPercent: -5,

        scrollTrigger: {

            trigger: image,

            start: "top bottom",

            end: "bottom top",

            scrub: true

        }

    });

});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

console.log(
    "Ethan Grunewald Portfolio — 2026"
);