
const cont = document.querySelector(".container");

cont.addEventListener("mousemove", function (dets) {
    // console.log(dets);
    var rectanglelocation = cont.getBoundingClientRect();
    // console.log(cont.getBoundingClientRect());
    var inside = dets.clientX - rectanglelocation.left;
    // console.log(inside)

    if (inside < rectanglelocation.width / 2) {

        var red = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, inside)
        gsap.to(cont, {
            backgroundColor: `rgb(${red}, 0, 0)`,
            ease: Power4,
        })
    } else {
        var blue = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, inside)
        gsap.to(cont, {
            backgroundColor: ` rgb(0, 0, ${blue})`,
            ease: Power4,
        })
    }
});

cont.addEventListener("mouseleave", function () {
    gsap.to(cont, {
        backgroundColor: "white"
    })
})