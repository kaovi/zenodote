function showPreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) 
        {
            document.getElementById("preview").src =  e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
    buttonSwap();
}

function blank(){
	document.getElementById("preview").src = "";
}

function buttonSwap(){
	let button = document.getElementById("pt_label");
	if(button.innerHTML == "Analize"){
		button.innerHTML = "Take another picture";
		button.setAttribute("for", "pic");
		button.setAttribute("class", "camera");
	}
	else{
		button.innerHTML = "Analize";
		button.setAttribute("for", "upload");
		button.setAttribute("class", "pigeon");
	}
}

function send(){
	blank();
	buttonSwap();
}