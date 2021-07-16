const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    var coll = document.getElementsByClassName("collapsible");
    var i;
    if (window.innerWidth < 377) {
        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }
    } else {
        var content = document.getElementById("footer-list");
        content.style.maxHeight = content.scrollHeight + "px";
        var content2 = document.getElementById("footer-list2");
        content2.style.maxHeight = content.scrollHeight + "px";
        var content3 = document.getElementById("footer-list3");
        content3.style.maxHeight = content.scrollHeight + "px";
        var content4 = document.getElementById("footer-list4");
        content4.style.maxHeight = content.scrollHeight + "px";
    }

function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}


