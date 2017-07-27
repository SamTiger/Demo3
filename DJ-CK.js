
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
    //此处可以提取aDayLi,aWeekLi,aMoothLi进行传参，但这个套循环的还不太会；所以用这种分开的笨办法
    //想出来了，参见下面
    /* 
    var oDay =document.getElementById('day');
    var oWeek =document.getElementById('week');
    var oMooth =document.getElementById('mooth');
    var aDayLi = oDay.getElementsByTagName('li');
    var aWeekLi = oWeek.getElementsByTagName('li');
    var aMoothLi = oMooth.getElementsByTagName('li');
   for(var i=0;i<aDayLi.length;i++){
    	Main_Li(aDayLi[i]); 
    	aDayLi[i].style.background = 'url('+arrImg[i]+') no-repeat 3px center'; 	    
    }
    for(var i=0;i<aWeekLi.length;i++){
    	Main_Li(aWeekLi[i]); 
    	aWeekLi[i].style.background = 'url('+arrImg[i]+') no-repeat 3px center'; 	    
    }
    for(var i=0;i<aMoothLi.length;i++){
    	Main_Li(aMoothLi[i]); 
    	aMoothLi[i].style.background = 'url('+arrImg[i]+') no-repeat 3px center'; 	    
    }
    */  

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
 /*li-envent 非传参
   for(var m=0;m<aDayLi.length;m++){
        (function(i){  // 闭包
        	aDayLi[i].style.background = 'url('+arrImg[i]+') no-repeat 3px center';
   	        aDayLi[i].onmouseover = function(){
                this.getElementsByTagName('div')[0].style.display ='none';
                this.getElementsByTagName('div')[1].style.display ='block';
                aDayLi[i].style.backgroundPosition = '3px 8px';
   	    }
   	        aDayLi[i].onmouseout = function(){
                this.getElementsByTagName('div')[0].style.display ='block';
                this.getElementsByTagName('div')[1].style.display ='none';
                aDayLi[i].style.backgroundPosition = '3px center';
   	    }
        })(m)   	    
    }     
    */

    /*main-li-style*/	
	/*for(var i = 0;i<aDayLi.length;i++){
		//url()中加号表示连接，变量是动态的，用加号编译器才认为后面的是变量（或变量结束）
		aDayLi[i].style.background = 'url('+arrImg[i]+') no-repeat 3px center';
	}*/
