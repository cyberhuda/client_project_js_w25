// Update all footers with current year using tutorial from codexworld.com provided by
// teaching team.
// https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/

function updateFooterYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

document.addEventListener('DOMContentLoaded', updateFooterYear);