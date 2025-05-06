const button = document.getElementById('toggleButton');
const icon = button.querySelector('i');

button.addEventListener('click', () => {
    if (icon.classList.contains('bi-arrow-down-left-circle')) {
        icon.classList.remove('bi-arrow-down-left-circle');
        icon.classList.add('bi-arrow-down-left-circle-fill');
    } else {
        icon.classList.remove('bi-arrow-down-left-circle-fill');
        icon.classList.add('bi-arrow-down-left-circle');
    }
});
