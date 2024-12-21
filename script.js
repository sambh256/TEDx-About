// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Create falling snowflakes
const snowflakeContainer = document.querySelector('.snowflakes');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 15 + 'px';
    snowflakeContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

setInterval(createSnowflake, 200);
