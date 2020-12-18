// elle_menu.js

(function($){
  // jQuery start
 
 // 메뉴버튼 기능
   var headBox = $('#headBox');
   var menuBtn = headBox.find('.btn_area');
   var allmenu = headBox.find('.allmenu_outer');
 
   menuBtn.on('click', ['button'], function(e){
     e.preventDefault();
     
     var allmenuDp = allmenu.css('display');
     if(allmenuDp === 'none'){
       allmenu.stop().fadeIn();
       menuBtn.addClass('on');
       headBox.css({'position':'fixed', 'top':0, 'z-index':2000, 'width': 100 + '%',
       'border-bottom':'1px solid rgba(0,0,0,0.4)', 'background-color':'rgba(255,255,255,0.9)' });
     }else{
       allmenu.stop().fadeOut();
       menuBtn.removeClass('on');

     }
   });
  // jQuery end
})(jQuery);