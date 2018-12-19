const shortcuts = require("shortcuts.js");

const actions = require("./actions.js");
const noopActions = Object.keys(actions).filter(key => {
	return actions[key] === 0;
});

function shortcutSafety(shortcutMetadata) {
	if (shortcutMetadata === undefined) {
		throw new TypeError("The shortcutMetadata parameter is missing.");
	} else if (!shortcutMetadata instanceof shortcuts.ShortcutMetadata) {
		throw new TypeError("The shortcutMetadata parameter must be an instance of ShortcutMetadata.");
	}

	const nonNoopActions = shortcutMetadata.actions.filter(action => {
		return !noopActions.includes(action.identifier);
	});
	const safetyTotal = nonNoopActions.reduce((prev, item) => {
		const safetyOfCurrentAction = actions[item.identifier];
		if (safetyOfCurrentAction) {
			return prev + safetyOfCurrentAction;
		} else {
			return prev;
		}
	}, 0)
	
	return safetyTotal / nonNoopActions.length;
}
module.exports = shortcutSafety;
