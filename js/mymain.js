console.log('111111111');

(function () {
	var aside=document.getElementById("aside");
	var asideDiv=aside.getElementsByTagName("div");
	var section=document.getElementById("section");
	var sectionDiv=section.getElementsByTagName("div");
	console.log(1111);
	for (let i = asideDiv.length - 1; i >= 0; i--) {
		asideDiv[i].value=i;
	}
	for (let i = asideDiv.length - 1; i >= 0; i--) {
		asideDiv[i].onclick=function () {
			// console.log(this.value);
			for (let j = sectionDiv.length - 1; j >= 0; j--) {
				if(this.value==j){
					sectionDiv[j].style.display="block";
				}else{
					sectionDiv[j].style.display="none";
				}
			}
		}
	}

})();

	
