//This is JavaScript that will generate sponsors based on a .json file.
//This will eliminate all sorts of hard-coded badness.

function generateSponsorBox(data){
	var keys = Object.keys(data);
	keys.sort();
	console.log(keys.length);

	for (var i=0;i < keys.length;i++){
		console.log(keys[i]);

		var company = data[keys[i]];
		var div = document.createElement("div");
		var body = document.getElementById(company[0].level + "Sponsors");

		console.log(company[0].name);

		div.id = keys[i];
		div.className = "sponsorDiv";
		
		if(company[0].description != "none"){
			div.setAttribute("onclick","test(this)")
			div.setAttribute("data-toggle","modal")
			div.setAttribute("data-target","#sponsorModal")
		}
		
		if(company[0].logo != "none"){
			var img = document.createElement("img");
			img.src = company[0].logo;
			img.alt = company[0].name;
			div.appendChild(img);
		}
		else {
			var h3 = document.createElement("h3");
			h3.innerHTML = company[0].name;
			
			if(company[0].description != "none"){
				div.style.cursor = "pointer";
			}
			
			div.appendChild(h3);
		}
		body.appendChild(div);
	}
}

function test(sponsorDiv){
	console.log(sponsorDiv);

	var id = sponsorDiv.id;
	var company = data[id];
	console.log(company[0].name);

	var modalTitle = document.getElementById("modal-title");
	var modalBody = document.getElementById("modal-body");
	var modalFooter = document.getElementById("modal-footer");
	
	modalTitle.innerHTML = company[0].name;
	modalBody.innerHTML = company[0].description;
	modalFooter.innerHTML = "<button class='btn' data-dismiss='modal' type='button'>Close</button>";

	if(company[0].website != "none"){
		var websiteButton = document.createElement("a");
		websiteButton.className = "btn website";
		websiteButton.target = "_blank";
		websiteButton.href = company[0].website;
		websiteButton.innerHTML = "Website";
		modalFooter.appendChild(websiteButton);
	}
}

function requestData() {
	$.ajax({
		url: "http://www.techhounds.com/data/uploads/files-and-forms/sponsors.json",
		dataType: "json",
		cache: false,
		async: true,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(errorThrown);
		},
		success: function(html){
			data = html;
			console.log(data);
			generateSponsorBox(data);
		}
	});
}

window.onload = requestData();
