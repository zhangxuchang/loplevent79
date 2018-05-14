setRight();
window.onresize = function(){
	setRight();
}
function setRight(){
    var w= document.documentElement.clientWidth;
    $('.detail_btn_top')[0].style.right=(w - 1000)/2-102+'px';
}
$(document).scroll(function() {
	if($(document).scrollTop()>0){
		$('.detail_btn_top').show();
	}else{
		$('.detail_btn_top').hide();
	}
});
$('.detail_btn_top').on('click',function(){
    $('body,html').animate({scrollTop:0},500);
})
var arr = [];
for(var i=0; i<$('.bom_btn a').length; i++){
	arr.push($('.bom_btn a')[i].className);
}
var titleId = 0;
init();
function init(){
	var hashData = parseFloat(window.location.hash.replace('#',''));
	switch(window.location.hash){
	    case '#1':
	        titleId = 49;
	        $('.bom_btn a')[hashData-1].className = 'detail_btn_ny1 active';
	    break;
	    case '#2':
	        titleId = 50;
	        $('.bom_btn a')[hashData-1].className = 'detail_btn_ny2 active';
	    break;
	    case '#3':
	        titleId = 51;
	        $('.bom_btn a')[hashData-1].className = 'detail_btn_ny3 active';
	    break;
	    case '#4':
	        titleId = 52;
	        $('.bom_btn a')[hashData-1].className = 'detail_btn_ny4 active';
	    break;
	    case '#5':
	        titleId = 53;
	        $('.bom_btn a')[hashData-1].className = 'detail_btn_ny5 active';
	    break;
	}
	$.ajax({
	    url: 'https://adm-lode.oasgames.com/tools/eventContent/api.php?search='+titleId,
	    dataType: 'jsonp',
	    success: function (res) {
	    	for(var i in res.items){
	    		$('.content_top p').html(res.items[res.items[i].id].title.replace(/<[^>]+>/g,""));
            	$('.mid_top p').html(res.items[res.items[i].id].content);
	    	}
	       
	    }
	})
}

for(var i=0; i<$('.bom_btn a').length; i++){
	
    $('.bom_btn a')[i].index = i;
    $('.bom_btn a')[i].onclick = function(){
    	for(var j=0; j<$('.bom_btn a').length; j++){
    		$('.bom_btn a')[j].className = arr[j];
    	}
    	this.className = arr[this.index]+' '+'active';
    	switch(this.index){
		    case 0:
		        titleId = 49;
		    break;
		    case 1:
		        titleId = 50;
		    break;
		    case 2:
		        titleId = 51;
		    break;
		    case 3:
		        titleId = 52;
		    break;
		    case 4:
		        titleId = 53;
		    break;
		}
        $.ajax({
            url: 'https://adm-lode.oasgames.com/tools/eventContent/api.php?search='+titleId,
            dataType: 'jsonp',
            success: function (res) {
            	for(var i in res.items){
		    		$('.content_top p').html(res.items[res.items[i].id].title.replace(/<[^>]+>/g,""));
	            	$('.mid_top p').html(res.items[res.items[i].id].content);
		    	}
            }
        })
    }
}

