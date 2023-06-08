$("navbar a, .btn").on("click", function (event) {
    if (this.hash === ""){
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                screenTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

//sticky menu background
window.addEventListener("scroll", function(){
    if(window.scrollY > 150){
        this.document.querySelector("navbar").getElementsByClassName.opacity = 0.9;

    }else{
        this.document.querySelector("navbar").getElementsByClassName.opacity = 1;
    }
});