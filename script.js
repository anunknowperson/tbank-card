document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-toogle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});