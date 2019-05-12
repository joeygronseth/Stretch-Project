function addItem() {
	var numberofdays = document.forms["todolist"]["days"].value;
	var task = document.forms["todolist"]["task"].value;
	
	var d = new Date();
	
	var dateentered = new Date(numberofdays);
	
	var mseconds1 = d.getTime();
	var mseconds2 = dateentered.getTime();
	
	var timediff = Math.round(((mseconds2 - mseconds1) / (1000 * 3600 * 24))+1);
	//var timediff = dateentered.getDate() - d.getDate();
	var div = document.createElement("div");
		div.className = "col-auto";
		div.numDays = timediff;
	var div2 = document.createElement("div");
	
	
	if (timediff > 2 && timediff < 7) {
		div2.className = "alert alert-warning alert-dismissable";
	}
	
	if (timediff < 3) {
		div2.className = "alert alert-danger alert-dismissable";
	}
	
	if (timediff > 6) {
		div2.className = "alert alert-secondary alert-dismissable";
	}
	
	var para = document.createElement("span");
		para.innerHTML = task + "<br>";
	
	var para2 = document.createElement("span");
	
	if (timediff < 2) {
			para2.innerHTML = timediff + " day";
	}
	else {
		para2.innerHTML = timediff + " days";
	}
		
	var butt = document.createElement("button");
		butt.type = "button";
		butt.className = "close";
		butt.setAttribute("data-dismiss", "alert");
		butt.setAttribute("aria-label", "Close");
	
	var para3 = document.createElement("span");
		para3.setAttribute("aria-hidden", "true");
		para3.innerHTML = "&nbsp;&nbsp;&times;";
	
	butt.appendChild(para3);
	div.appendChild(div2);
	div2.appendChild(butt);
	div2.appendChild(para);
	div2.appendChild(para2);
	
	var row = document.getElementById("row");
	var numChildren = row.childElementCount;
	var count = 0;
	
	for (count =0; count < numChildren; count++) {
		if (row.childNodes[count].numDays > div.numDays) {
			row.insertBefore(div, row.childNodes[count]);
			break;
		}
	}
	if (count == numChildren) {
		row.appendChild(div);
	}
	
	
	
	return false;
}