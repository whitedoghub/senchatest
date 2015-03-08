Ext.Loader.setConfig({
	paths : {
		"CMember" : "./lib/CMember.js"
	}
});

Ext.define("CUser", {
	extend : "CMember",
	config : {
		age : 0
	},
	constructor : function(data){
		this.initConfig(data);
	},
	getInfo : function(){
		return "나이는 ";
	}
});