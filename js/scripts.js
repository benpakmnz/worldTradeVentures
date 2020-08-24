$( document ).ready(function(){
    new Glide('.glide').mount({})
    var portfolioGlide = new Glide('#glide-portfolio', {
    type: 'carousel',
    perView: 4,
    gap: 0
    })
    
    portfolioGlide.on('mount.before', function(){
      var slider = companies.filter(el => el.slidePic)
      slider.forEach(el => {
              var compSlide = `<li class="glide__slide">
                      <a href="${el.link}" target="_blank" class="companie-item">
                          <img class="companie-logo" src="images/logos/${el.logo}"/>
                          <img class="companie-pic" src="images/${el.slidePic}"/>
                      </a>
                  </li>`
                  $(compSlide).appendTo("ul.glide__slides")
          
      })
    });
    
    portfolioGlide.mount();
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

aboutItems.forEach(el=> {
    var item = `<div class="section-item">
                <h3>${el.title}</h3>
                <p>${el.body}</p>
                </div>`
    $(item).appendTo(".section-content")
})  

companies.forEach(el=> {
    var comp = `<li>
                <a href="${el.link}"" target="_blank"><img src="images/logos/${el.logo}"/>
                <div class="tooltiptext">
                        <h3>${el.name}</h3>
                        <p>${el.description}</p> 
                </div>
            </a></li>`
            $(comp).appendTo(".companies-desc ul")
})

articles.forEach((el, index)=> {
    var article = ""
    if(el.title){
        article = `<a href= "${el.link}" target="blank" id="art-${index}" class="news-item ${el.size} ${el.background}">
        <div class="item-content">
            <h4>${el.title}</h4>
            <p>${el.body}</p>
        </div>
        <div class="item-info">
           <span>${el.date}</span>
           <span>${el.company}</span>
        </div>
       </a>`
    } else{
        article = `<div class="news-item ${el.size} ${el.background}"><img src="${el.img}"></div>`
    }
     $(article).appendTo(".news-wraper")

     if(el.title && el.img){
        document.getElementById(`art-${index}`).style.backgroundImage=`url('${el.img}')`
     }

})


$(".companies-desc a").hover(function() {
var el_pos = $(this).offset().left;
var screen_width = $(".companies-desc").width()
var offset_width = screen_width - el_pos
  if(offset_width < 320 ){
  $(this).find('.tooltiptext').addClass('right');
  }else if(offset_width > 1000){
  $(this).find('.tooltiptext').addClass('left');
  }
  });