$( document ).ready(function(){
    var headerGlide = new Glide('.glide', {
      perView: 1,
      dragThreshold: false,
    })  

    var portfolioGlide = new Glide('#glide-portfolio', {
    perView: 4,
    gap: 0,
    dragThreshold: false,
    breakpoints: {
      414: {
        perView: 2
      },
      1024:{
        perView: 3
      }
    }
    })

    var aboutGlide = new Glide('#glide-about', {
      gap: 60,
      perView: 3,
      rewind: true,
      dragThreshold: false,
      breakpoints: {
        1024: {
          perView: 2
        },
        815:{
          perView: 1
        }
      }
    })

    var newsGlide = new Glide('#glide-news', {
      perView: 1,
      rewind: true,
    })

    newsGlide.on('mount.before', function(){
        var splitArticles = [];
          if(window.screen.width > 1024 ){
            splitArticles= articles.chunk_inefficient(8);
          }else if(window.screen.width > 425){
            splitArticles= articles.chunk_inefficient(5);
          }else{
            splitArticles= articles.chunk_inefficient(6);
          }    
      

        splitArticles.forEach((slide, slideIndex) =>{
        var slideItem = `<li class="glide__slide news-slide-warper num-${slideIndex}"></li>`
        $(slideItem).appendTo(".news")
      
        slide.forEach((el, index)=> {
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
             $(article).appendTo(`.num-${slideIndex}`)
          
             if(el.title && el.img){
                document.getElementById(`art-${index}`).style.backgroundImage=`url('${el.img}')`
                document.getElementById(`art-${index}`).classList.add('dark');
                document.getElementById(`art-${index}`).classList.add('light');
             }
          
          })
      })
    });

    aboutGlide.on('mount.before', function(){
      aboutItems.forEach(el=> {
        var item = `<li class="glide__slide">
                    <h3>${el.title}</h3>
                    <p>${el.body}</p>
                    </li>`
        $(item).appendTo("ul.about.glide__slides")
    });
  });

    portfolioGlide.on('mount.before', function(){
      var slider = companies.filter(el => el.slidePic)
      slider.forEach(el => {
              var compSlide = `<li class="glide__slide protfolio-item">
                      <a href="${el.link}" target="_blank" class="companie-item">
                          <img class="companie-logo" src="images/logos/${el.logo}"/>
                          <img class="companie-pic" src="images/${el.slidePic}"/>
                      </a>
                  </li>`
                  $(compSlide).appendTo("ul.portfolio.glide__slides")
          
      })
    });

    headerGlide.mount();
    aboutGlide.mount();
    newsGlide.mount();
    portfolioGlide.mount();
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  

companies.forEach((el,index)=> {
    
    var comp = `<li id="comp-${index}">
                    <a id="main-link-${index}" href="${el.link}" target="_blank">
                      <img src="images/logos/${el.logo}"/>
                    </a>
                    <div class="tooltiptext">
                      <button class="closebtn" onclick="popupHide(event,'#comp-${index} .tooltiptext');">&times;</button>
                      <h3>${el.name}</h3>
                      <p>${el.description}</p> 
                      <a href="${el.link}" target="_blank">find out more</a>
                  </div>
                </li>`
            $(comp).appendTo(".companies-desc ul")
            if(window.screen.width <= 1024){
              $(`#main-link-${index}`).click(function(e) {
                e.preventDefault();
                $(`#comp-${index}`).find(".tooltiptext").css("opacity","1");
                $(`#comp-${index}`).find(".tooltiptext").find("a").css("display","block");
                $(`#comp-${index}`).find(".closebtn").css("display","block");
                popShadowHandler("block");

                return false;
              });

            }
})

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});

$(".companies-desc a").hover(function() {
var el_pos = $(this).offset().left;
var screen_width = $(".companies-desc").width()
var offset_width = screen_width - el_pos
  if(offset_width < 400 ){
  $(this).find('.tooltiptext').addClass('right');
  $(this).find('.tooltiptext').removeClass('left');
  }else if(offset_width > 990){
  $(this).find('.tooltiptext').addClass('left');
  $(this).find('.tooltiptext').removeClass('right');
  }else{
    $(this).find('.tooltiptext').removeClass('left');
    $(this).find('.tooltiptext').removeClass('right');
  }
  });


  function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    popShadowHandler("block");
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    popShadowHandler("none");
  }

  function popShadowHandler(display){
    if(display !=='none'){
      $('body').css("overflow", "hidden")
    }else{
      $('body').css("overflow", "auto")
    }

    $("#popShadow").css("display",display);
    $("#popShadow").click(function(){
      $("#popShadow").css("display","none");
      closeNav();
    })
  }

  function popupHide(event, el){
    popShadowHandler('none');
    $(`${el}`).css("opacity","0");
    event.stopPropagation()
  }