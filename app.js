var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
};

setTimeout(() => {
    document.getElementById("page").style.display = "block";
    document.getElementById("loading").style.display = "none";
}, 2000);

(function () {
    hamburger.onclick = function () {
        this.classList.toggle('open');
        hamburgernav.classList.toggle('show');
        logo.classList.toggle('hide');
        headline.classList.toggle('hide');
        discoverbtn.classList.toggle('hide');
    };

    const items = document.querySelectorAll('#grid > div', '#biography > div');

    for (const item of items.values()) {
        new Waypoint.Inview({
            element: item,
            enter(direction) {
                if (direction == 'down') {
                    item.classList.add('up');
                }
            },
            exited(direction) {
                if (direction == 'up') {
                    item.classList.remove('up');
                }
            }
        });
    }
})();

// 🚀 Form validation to prevent empty submissions
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#mailing-list form");

    form.addEventListener("submit", function (e) {
        const email = document.querySelector("#email-input").value.trim();
        const message = document.querySelector("#msg-input").value.trim();

        if (!email || !message) {
            alert("Please fill in all required fields.");
            e.preventDefault(); // Stops form submission
        }
    });
});