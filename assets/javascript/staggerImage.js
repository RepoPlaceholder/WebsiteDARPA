// this script constantly checks what the viewer can and cannot see
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) { //if the viewer can see the image, update its status
            entry.target.classList.add('show'); //change it to show
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//so when we look at a new image, it changes the class to show
//that class is connected to a fancy animation
//so scrolling animates it!