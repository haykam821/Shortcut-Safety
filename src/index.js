const shortcuts = require("shortcuts.js");

const actions = require("./actions.js");
const noopActions = Object.keys(actions).filter(key => {
	return actions[key] === 0;
});

class ShortcutSafetyRating {
	constructor(rank, actions, metadata) {
		/**
		 * The safety ranking of the shortcut.
		 * A lower number is better.
		 */
		this.rank = rank || 0;

		/**
		 * An object mapping unsafe actions in the shortcut to their severity.
		 */
		this.actions = actions || {};

		/**
		 * The tested shortcut metadata.
		 * @type {ShortcutMetadata}
		 */
		this.metadata = metadata;
	}
}
module.exports.ShortcutSafetyRating = ShortcutSafetyRating;

/**
 * Gets the safety rating of an action.
 * @param {(string|Action)} action The action to get the safety rating of.
 * @returns {number}
 */
function getActionSafety(action) {
	const actionId = action instanceof shortcuts.Action ? action.identifier : action;
	return actions[actionId];
}
module.exports.getActionSafety = getActionSafety;

/**
 * Gets the safety of a shortcut.
 * @param {ShortcutMetadata} shortcutMetadata The metadata of a shortcut to get the safety of.
 * @returns {ShortcutSafetyRating}
 */
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
			prev[1][item.identifier] = safetyOfCurrentAction;
			return [
				prev[0] + safetyOfCurrentAction,
				prev[1],
			];
		} else {
			return prev;
		}
	}, [0, {}]);
	
	return new ShortcutSafetyRating(safetyTotal[0] / nonNoopActions.length, safetyTotal[1], shortcutMetadata);
}
module.exports.getShortcutSafety = shortcutSafety;