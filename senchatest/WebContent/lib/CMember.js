Ext.define("CMember", {
	config : {
		id : null,
		name : name
	},	
	constructor : function(data){
		this.initConfig(data);
	},
	getInfo : function() {
		return "아이디 : " + this.getId() + ", 이름 : " + this.getName();
	}
});