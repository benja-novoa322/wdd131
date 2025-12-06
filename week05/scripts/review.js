document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCounter");

    if (!count) {
    count = 0;
    }

    count = parseInt(count) + 1;

    localStorage.setItem("reviewCounter", count);

    const counterElement = document.getElementById("reviewCount");
    if (counterElement) {
    counterElement.textContent = `You have completed ${count} review(s).`;
    }
});
