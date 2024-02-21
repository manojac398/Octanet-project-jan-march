document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            checkbox.parentElement.classList.toggle('completed');
        });
    });
});
