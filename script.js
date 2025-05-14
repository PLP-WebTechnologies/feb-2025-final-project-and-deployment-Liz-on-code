// JavaScript for interactive dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});
