var obj = JSON.parse(imgArrJson);
var	imgArr = obj.images;
var modal = document.getElementById('myModal');
var inputs = document.getElementsByClassName("form-control");
var selectedImgID;

// console.log(imgArr);

// document.getElementById('centralPic').addEventListener("click", )

function setImages(){
	var txt = "";
	var divRef = document.getElementById('picGallery');
	for(var i = 0; i < imgArr.length; i++){
		txt += '<div class = "floated_img col-lg-12 col-md-12"><img class = "myImgs" id = "'
		txt += i;
		txt += '"data-toggle="modal" data-target="#myModal" src= "';
		txt += imgArr[i].url;
		txt += '"></div>'
	}
	divRef.innerHTML = txt;
	var imgs = document.getElementsByClassName("myImgs");
	for(var i = 0; i < imgs.length; i++){
		imgs[i].addEventListener("click", function(){
			modal.style.display = "block";
			inputs[0].value = this.src;
			selectedImgID = this.id;
	});
}
}	



// Get the <span> element that closes the modal
var closes1 = document.getElementById("bye");
var closes2 = document.getElementById("byebye");



// When the user clicks on <span> (x), close the modal
closes1.onclick = function() {
    modal.style.display = "none";
}
closes2.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var editbtn = document.getElementById("editbtn");
editbtn.onclick = function() {
	imgArr[selectedImgID].url = inputs[0].value;
	modal.style.display = "none";
	setImages();
}

var delbtn = document.getElementById("delbtn");
delbtn.onclick = function() {
	imgArr.splice(selectedImgID, 1);
	modal.style.display = "none";
	setImages();
}

var addbtn = document.getElementById("addbtn");
addbtn.onclick = function() {
	var inputs = document.getElementsByClassName("form-control");
	var imgTxt = '{"id" : ';
	var newID = selectedImgID++;
	imgTxt += newID;
	imgTxt += ', "name" : "';
	imgTxt += inputs[1].value;
	imgTxt += '", "url" : "';
	imgTxt += inputs[0].value;
	imgTxt += '", "info" : "", "uploaded_date" : ""}';
	var tatti = JSON.parse(imgTxt);
	// tatti.innerHTML = imgTxt;
	imgArr.splice(selectedImgID, 0, tatti);
	// imgArr[selectedImgID].url = inputs[0].value;
	modal.style.display = "none";

	console.log(inputs[0].value);
	console.log(selectedImgID);
	console.log(newID);
	console.log(imgArr);
	setImages();
}