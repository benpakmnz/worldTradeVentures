var isMobile = false;

  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }

  $( document ).ready(function(){
    $('#site-logo').click(function(){
      window.location.href='index.html';})
    $('#site-logo-mobile').click(function(){
      window.location.href='index.html';})

   var headerGlide = new Glide('#glide-header', {
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
          
             if(el.title && el.img && $(`art-${index}`).length>0){
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

    $("#glide-header").length> 0?headerGlide.mount():null;
    $("#glide-about").length> 0?aboutGlide.mount():null;
    $("#glide-news").length> 0? newsGlide.mount():null;
    $("#glide-portfolio").length> 0?portfolioGlide.mount():null;
})

if(isMobile){
  companies.forEach((el,index)=> {
    var comp = $(`<li id="comp-${index}">
                    <div class="comp-item">
                      <img src="images/logos/${el.logo}"/>
                    </div>
                </li>`)
    comp.find(".comp-item").on('click', function(){tooltipPopupHandler(el)});
    $(comp).appendTo(".companies-desc ul");
})

}else{
  companies.forEach(el=> {
    var comp = `<li >
                <a href="${el.link}" class="comp-item" target="_blank"><img src="images/logos/${el.logo}"/>
                <div class="tooltiptext">
                    <h3>${el.name}</h3>
                    <p>${el.description}</p> 
                </div>
            </a></li>`
    $(comp).appendTo(".companies-desc ul")
  })
}

function tooltipPopupHandler(el){
  var popup= $(`
  <div class="tooltiptext-fixed">
  <button class="closebtn">&times;</button>
  <h3>${el.name}</h3>
  <p>${el.description}</p> 
  <a href="${el.link}" target="_blank">find out more</a>
  </div>`);

  popup.find(".closebtn").on('click', () => popupHide('.tooltiptext-fixed'));
  
$(popup).appendTo("body");
setTimeout(function(){
  $('.tooltiptext-fixed').css("opacity","1");
  popShadowHandler("block");
}, 1)
}

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
      $(".tooltiptext-fixed").length > 0 ? $(".tooltiptext-fixed").remove(): "";
      closeNav();
    })
  }

  function popupHide(el){
    $(`${el}`).css("opacity","0");
    setTimeout(function(){
      $(".tooltiptext-fixed").remove();
      popShadowHandler("none");
    }, 1)
  }


