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