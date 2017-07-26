
window.onload = function(){
	var oHeader = document.getElementById('header');
	var aLi= oHeader.getElementsByTagName('li');
	var aA= oHeader.getElementsByTagName('a');
     
	var arrImg = ['img/1-1.png','img/2-2.png','img/3-3.png','img/4-4.png',
	'img/5-5.png','img/6-6.png','img/7-7.png','img/8-8.png','img/9-9.png'];
    
    var oMain = document.getElementById('main');
    var aUl = oMain.getElementsByTagName('ul');
    
    for(var i=0;i<aLi.length;i++){
    	aLi[i].index = i;    	
    	aLi[i].onclick = function(){
    		for(var i=0;i<aLi.length;i++){
    		aLi[i].style.background ='#CCE1DC';
    	    aA[i].style.color='#3C958F';
    	    aUl[i].style.display ='none';
    	}
    		this.style.background ='#fff';
    		aA[this.index].style.color ='#000';
    		aUl[this.index].style.display ='block';
    	}
    } 
    for(var i=0;i<aUl.length;i++){
    	var ML = aUl[i].getElementsByTagName('li');
    	for(var j=0;j<ML.length;j++){
            Main_Li(ML[j]);
            ML[j].style.background = 'url('+arrImg[j]+') no-repeat 3px center'; 
    	}
    }
    function Main_Li(oLi){
        var oShow = oLi.getElementsByTagName('div')[0];
        var oHide = oLi.getElementsByTagName('div')[1];
        oLi.onmouseover =function(){
        	oShow.style.display = 'none';
        	oHide.style.display = 'block';
        	oLi.style.backgroundPosition ='3px 8px';
        }
        oLi.onmouseout =function(){
        	oShow.style.display = 'block';
        	oHide.style.display = 'none';
        	oLi.style.backgroundPosition ='3px center';
        }
    }
}