/* eslint-disable sort-keys */
module.exports = {
	// 4 = probably used to send information to the attacker
	"is.workflow.actions.runsshscript": 4,
	"com.omz-software.Pythonista.runscript": 4,
	"is.workflow.actions.sendemail": 4,
	"is.workflow.actions.sendmessage": 4,
	// 3 = could send information, but this mostly doesn't happen
	"is.workflow.actions.venmo.request": 3,
	"is.workflow.actions.venmo.pay": 3,
	"is.workflow.actions.postonfacebook": 3,
	"is.workflow.actions.tumblr.post": 3,
	"com.tapbots.Tweetbot.tweet": 3,
	"is.workflow.actions.tweet": 3,
	"net.whatsapp.WhatsApp.send": 3,
	"is.workflow.actions.wordpress.post": 3,
	"is.workflow.actions.runjavascriptonwebpage": 3,
	// 2 = used for normal purposes, but should be cautious of
	"is.workflow.actions.getipaddress": 2,
	"is.workflow.actions.getdevicedetails": 2,
	"is.workflow.actions.getwifi": 2,
	"is.workflow.actions.email": 2,
	"is.workflow.actions.detect.emailaddress": 2,
	"is.workflow.actions.detect.phonenumber": 2,
	"is.workflow.actions.detect.address": 2,
	// 1 = potentially harmful, but commonly used for normal purposes
	"is.workflow.actions.contacts": 1,
	"is.workflow.actions.filter.contacts": 1,
	"is.workflow.actions.detect.contacts": 1,
	"is.workflow.actions.properties.contacts": 1,
	"is.workflow.actions.address": 1,
	"is.workflow.actions.runworkflow": 1,
	// 0 = doesn't do anything harmful at ALL
	"is.workflow.actions.comment": 0,
	"is.workflow.actions.showresult": 0,
	"is.workflow.actions.nothing": 0,
	"is.workflow.actions.exit": 0,
	"is.workflow.actions.conditional": 0,
	"is.workflow.actions.repeat.count": 0,
	"is.workflow.actions.repeat.each": 0,
	"is.workflow.actions.delay": 0,
	"is.workflow.actions.waittoreturn": 0,
};