// elle_f_banner.js

(function($){
 // jQuery start
 var bannerBox = $('#bannerBox');
 var bannerBtn = bannerBox.find('.banner_btn');
 var bannerN_btn = bannerBtn.children('button').eq(0);
 var bannerP_btn = bannerBtn.children('button').eq(1);
 var bannerImg = bannerBox.find('.banner_img_area');
 var bannerUl = bannerImg.find('ul');
 var bannerLi = bannerUl.find('li');

 var bannerImgLast = bannerLi.eq(-1).clone();
 bannerUl.prepend(bannerImgLast);
 var reBannerLi = bannerUl.children('li');

 bannerUl.css({ 'margin-left':-100 + '%', 'width':reBannerLi.length * 100 + '%' });
 reBannerLi.css({ 'width':(100/reBannerLi.length) + '%' });

 var slideN = 0;
 var timed = 3000;
 var permission = true;
 bannerN_btn.on('click', function(e){
   e.preventDefault();
   if(permission){
    permission = false;
    slideN +=1;
    bannerUl.stop().animate({'left':slideN * -100 + '%' },function(){
      if(slideN >= bannerLi.length-1){
        slideN = -1;
        bannerUl.stop().css({'left':slideN * -100 + '%' });
      }
      setTimeout(function(){
        permission = true;
      },100);
    });
   }
 });

 bannerP_btn.on('click', function(e){
   e.preventDefault();
   if(permission){
     permission = false;
     slideN -=1;
     bannerUl.stop().animate({ 'left': slideN * -100 + '%' }, function(){
       if(slideN <=-1){
         slideN = bannerLi.length-1;
         bannerUl.stop().css({ 'left': slideN * -100 + '%' });
       }
       setTimeout(function(){
         permission = true;
       },100);
     });
   }
 });

 var startInterval;
 var start = function(){
   startInterval = setInterval(function(){
     bannerN_btn.trigger('click');
   },timed);
 };
 start();
 var stop = function(){
   clearInterval(startInterval);
 };

 bannerImg.on({ 'mouseenter': stop, 'mouseleave':start });


 // jQuery end
})(jQuery);
