
document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector("header p");
    const text = "Social Media Portfolio";
    let index = 0;

   
    subtitle.textContent = text;

    
    subtitle.textContent = "";
    function typeEffect() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }
    typeEffect();
});


const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll(); // Run on load


window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelector("header").style.backgroundPositionY = `${scrollY * 0.4}px`;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


const profilePic = document.querySelector("header img");

window.addEventListener("scroll", () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const scrollY = window.scrollY;
    if (scrollY < headerHeight / 2) {
        const scale = 1 + scrollY / 1000; 
        const glow = scrollY * 0.5; 
        profilePic.style.transform = `scale(${scale})`;
        profilePic.style.boxShadow = `0 0 ${glow}px rgba(255,255,255,0.8)`;
    }
});
