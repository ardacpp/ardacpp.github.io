// Create a button element
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.position = 'absolute';
button.style.top = '50px';
button.style.left = '50px';

// Append the button to the body
document.body.appendChild(button);

// Add click event listener to the button
button.addEventListener('click', () => {
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    // Generate random positions within the visible area
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Update button position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});