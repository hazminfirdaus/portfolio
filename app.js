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

// Contact Form Submission
// Ensure the form has the correct action URL for your server-side processing
// Example: <form id="contact-form" action="/submit-form" method="POST">
// Ensure the form has inputs with IDs: email-input and msg-input
// Ensure the form has a response element with ID: form-response
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseEl = document.getElementById("form-response");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email-input").value.trim();
        const message = document.getElementById("msg-input").value.trim();

        if (!email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (result.status === "success") {
                responseEl.textContent = "Thanks! Your message has been sent :)";
                responseEl.style.color = "#28a745";
                responseEl.classList.add("visible");
                form.reset();

                // Fade out after 4 seconds
                setTimeout(() => {
                    responseEl.classList.remove("visible");
                }, 4000);
            } else {
                responseEl.textContent = "Sorry, there was a problem sending your message. Please try again later :(";
                responseEl.style.color = "red";
                responseEl.classList.add("visible");

                setTimeout(() => {
                    responseEl.classList.remove("visible");
                }, 4000);
            }
        } catch (error) {
            responseEl.textContent = "Error: Unable to send message.";
            responseEl.style.color = "red";
        }
    });
});