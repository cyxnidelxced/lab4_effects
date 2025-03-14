// Create stars in the background
document.addEventListener('DOMContentLoaded', function() {
    // Create twinkling stars
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
    
    // Create multiple shooting stars with different trajectories
    const shootingStarContainer = document.querySelector('.shooting-star-container');
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 50 - 100}px`;
        shootingStar.style.transform = `rotate(${-45 + (Math.random() * 10 - 5)}deg)`;
        shootingStar.style.animationDelay = `${Math.random() * 10}s`;
        shootingStarContainer.appendChild(shootingStar);
    }
});