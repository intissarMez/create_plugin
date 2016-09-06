//For more information, check http://doc.wakanda.org/ and follow us @wakandasoft.

var actions = {};

actions.$(solutionName)Action = function() {
 	studio.alert('The extension is up and running !');
};


exports.handleMessage = function handleMessage(message) {
		var action	= message.action;
		if(typeof actions[action] === "function"){
			actions[action](message);
			} else {
					return false;
			}
};
