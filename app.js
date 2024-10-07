/*
Name: Muhammad Hazmin Firdaus bin Chik
Programme: BSc (Hons) Computing
Semester: 2201
Module: Web Design and Development
Lecturer: David Petryca
Assignment Title: Petr Bakla Web Redesign
Student Declaration: I declare that the work contained in this assignment was
researched and prepared by me, except where acknowledgement of sources is made.
I understand that the college can and will test any work submitted by me for
plagiarism. The attachment of this statement on any electronically submitted
assignments will be deemed to have the same authority as a signed statement.
*/

var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        } else {
        document.getElementById("nav").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }

setTimeout(() => {   
        document.getElementById("page").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }, 4000);


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
            exited(direction)  {
                if (direction == 'up') {
                    item.classList.remove('up');
                }
            }
        });
    }
    
})();