// Function to animate the numbers
function animateNumbers() {
    const stats = [
        { id: 'customers', endValue: 100 },
        { id: 'projects', endValue: 200 },
        { id: 'rates', endValue: 80 },
        { id: 'experience', endValue: 5 }
    ];

    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        const startValue = 0;
        const duration = 2; // Duration of the animation in seconds
        const stepTime = 50; // Time interval between steps

        let currentValue = startValue;
        const increment = Math.ceil(stat.endValue / (duration * 1000 / stepTime)); // Calculate increment per step

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= stat.endValue) {
                clearInterval(interval);
                currentValue = stat.endValue;
            }
            // Append '+' to the value
            element.textContent = currentValue + '+';
        }, stepTime);
    });
}

// Start the animation when the page is loaded or when the section is visible
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
});
