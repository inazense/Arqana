var arrProjects = {
	"0" : 
	{
		"name" : "Casa Ginebra",
		"city" : " Tulcán",
		"images" : {
			"0" : "/resources/img/casas/0/casa1.jpg"
		}
	},
	"1" :
	{
		"name" : "Reforma interior",
		"city" : " Quito",
		"images" : {
			"0" : "/resources/img/casas/1/casa1.jpg"
		}
	},
	"2":{
		"name" : "Casa Federico",
		"city" : " Tulcán",
		"images" : {
			"0" : "/resources/img/casas/2/casa1.jpg"
		}
	},
	"3":{
		"name" : "Casa Bimbo",
		"city" : " Chimborazo",
		"images" : {
			"0" : "/resources/img/casas/3/casa1.jpg"
		}
	},
	"4":{
		"name" : "Reforma Tarradellas",
		"city" : " Tena",
		"images" : {
			"0" : "/resources/img/casas/4/casa1.jpg"
		}
	},
	"5":{
		"name" : "Casa Vitrian",
		"city" : " Baños",
		"images" : {
			"0" : "/resources/img/casas/5/casa1.jpg"
		}
	},
}

var arrClasses = 
{
	0 : "row",
	1 : "projectRow",
	2 : "col-md-4",
	3 : "content",
	4 : "content-overlay",
	5 : "content-image",
	6 : "content-details",
	7 : "fadeIn-bottom",
	8 : "content-title",
	9 : "content-text",
	10 : "fa",
	11 : "fa-map-marker"
}

function generateProjectStructure()
{
	var rowCounter = 0;
	// row
	var divRow = null

	for (let item in arrProjects) 
	{

		if (rowCounter == 0)
		{
			divRow = document.createElement("div");
			divRow.classList.add(arrClasses[0], arrClasses[1]);
		}

		// col
		let divCol = document.createElement("div");
		divCol.setAttribute("class", arrClasses[2]);

		// content
		let divContent = document.createElement("div");
		divContent.setAttribute("class", arrClasses[3]);

		// a href
		let elmA = document.createElement("a");
		elmA.setAttribute("id", item);
		elmA.setAttribute("href", "#");

		// content-overlay
		let divOverlay = document.createElement("div");
		divOverlay.setAttribute("class", arrClasses[4]);

		// img
		let elmImg = document.createElement("img");
		elmImg.setAttribute("class", arrClasses[5]);
		elmImg.setAttribute("src", arrProjects[item]["images"]["0"]);

		// content-details
		let divDetails = document.createElement("div");
		divDetails.classList.add(arrClasses[6], arrClasses[7]);

		// h3
		let elmH3 = document.createElement("h3");
		elmH3.setAttribute("class", arrClasses[8]);

		let elmH3Text = document.createTextNode(arrProjects[item]["name"]);
		elmH3.appendChild(elmH3Text);

		// p
		let elmP = document.createElement("p");
		elmP.setAttribute("class", arrClasses[9]);

		// i
		let elmI = document.createElement("i");
		elmI.classList.add(arrClasses[10], arrClasses[11]);

		let elmIText = document.createTextNode(arrProjects[item]["city"]);
		elmI.appendChild(elmIText);

		// CREATE THE WHOLE ELEMENT
		elmP.appendChild(elmI);
		divDetails.appendChild(elmH3);
		divDetails.appendChild(elmP);
		elmA.appendChild(divOverlay);
		elmA.appendChild(elmImg);
		elmA.appendChild(divDetails);
		divContent.appendChild(elmA);
		divCol.appendChild(divContent);
		divRow.appendChild(divCol);

		rowCounter++;

		if (rowCounter == 3)
		{
			document.getElementById("projectsContainer").appendChild(divRow);
			divRow = null;
			rowCounter = 0;
		}
	}
}