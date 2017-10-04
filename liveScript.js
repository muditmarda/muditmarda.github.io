var obj = JSON.parse(imgArrJson);
var	imgArr = obj.images;

document.getElementById('centralPic').innerHTML = '<div class = "floated_img col-lg-12 col-md-12"><img src= "' + imgArr[0].url + '" align = "middle"></div>';

function setImages(){
	var txt = "";
	for(var i = 1; i < imgArr.length; i++){
		var divRef = document.getElementById('picGallery');
		txt += '<div class = "floated_img col-lg-12 col-md-12"><img src= "';
		txt += imgArr[i].url;
		txt += '"></div><br>'
		divRef.innerHTML = txt;
	}
}	
setImages();
