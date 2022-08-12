$(function () {
    $('.header-slider').slick({
        dots: true,
        appendDots: '.dots',
        appendArrows: '.qator',
        prevArrow: "<img src='img/Vector.svg'class='prev' alt='prevArrow'>",
        nextArrow: "<img src='img/Vector.svg' class='next' alt='nextArrow'>"
    });
    const toper = document.getElementById("rich");
    toper.addEventListener(
        "click",
        function () {
            window.scrollTo(0, 0)
        }
    )

    window.addEventListener(
        "scroll",
        function () {
            if (this.window.scrollY > 1000) {
                this.document.getElementById("rich").setAttribute("class", "active")
            }
            else {
                this.document.getElementById("rich").classList.remove("active")
            }

        }
    )
});