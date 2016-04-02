function DataService(dispatcher){
	var dataObj=null;
	this.getData=function(){
		/* Make a ajax request to get the data from json and sort it*/
		var _this=this;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == 4 && xhttp.status == 200) {
		    	dataObj = JSON.parse(xhttp.responseText);
	    		_this.sortData();
		    	dispatcher.reRender(dataObj); //to update the view
		    }
	    };
	    xhttp.open("GET", "sample.json", true);
	    xhttp.send();
	},
	this.filterData=function(query){
		/* Filter the results based on search query */
		var filteredData=dataObj.filter(function(obj){
      		if(obj.name.search(new RegExp(query, "i")) > -1){
      			return true;
      		}
      		else{
      			return false;
      		}
        });
		return filteredData;
	},
	this.sortData=function(){
		/* to sort the dataObj */
		dataObj.sort(function(obj1,obj2){
			var a=obj1.name.toLowerCase();
			var b=obj2.name.toLowerCase();
			if(a>b)
				return 1;
			else if(a<b)
				return -1;
			else
				return 0;
		});
	}
	this.addNewRecord=function(name,designation,avatar){
		/* To add new Record in the dataObj array */
		var tempObj={
			"name":name,
			"designation":designation,
			"avatar":avatar
		};
		dataObj.push(tempObj);
		tempObj=null;
		this.sortData();

		return dataObj;
	}
}