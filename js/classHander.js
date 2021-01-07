function changeMenuClass(newElement)
{
	document.getElementById("liHome").classList.remove('active');
	document.getElementById("liProjects").classList.remove('active');
	document.getElementById("liWhoAmI").classList.remove('active');
	document.getElementById("liContact").classList.remove('active');
	document.getElementById(newElement).classList.add('active');
}