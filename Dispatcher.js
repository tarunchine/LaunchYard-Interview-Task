function Dispatcher(view){

	var dataService=new DataService(this);
	this.fetchSortedData=function(){
		/* to ask dataservice to start a ajax request to rad json*/
		dataService.getData(true);
	}
	this.reRender=function(updatedResults){
		/* On any data change refresh the view to show updated data */
		view.refreshResults(updatedResults);
	}
	this.getFilteredData=function(query){
		/* filter results based on search query and refresh the view */
		var updatedResults=dataService.filterData(query);
		this.reRender(updatedResults);
	}
	this.saveNewRecord=function(name,designation,avatar){
		/* Add a new record and the refresh the view */
		var updatedResults=dataService.addNewRecord(name,designation,avatar);
		this.reRender(updatedResults);
	}
}