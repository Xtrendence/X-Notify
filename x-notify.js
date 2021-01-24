class XNotify {
	constructor() {
		this.defaults = {
			position: "TopRight",
			duration: 5000,
			color: "rgb(255,255,255)",
			success: {
				title: "Success Notification",
				description: "Whatever you did, it worked.",
				background: "rgb(40,200,80)"
			},
			error: {
				title: "Error Notification",
				description: "That didn't work out, did it?",
				background: "rgb(230,50,50)"
			},
			alert: {
				title: "Alert Notification",
				description: "This is probably important...",
				background: "rgb(240,180,10)"
			},
			info: {
				title: "Info Notification",
				description: "Just so you know...",
				background: "rgb(170,80,220)"
			}
		};
	}

	setOptions(options, type) {
		this.position = this.empty(options.position) ? this.defaults.position : options.position;

		this.title = this.empty(options.title) ? this.defaults[type].title : options.title;

		this.description = this.empty(options.description) ? this.defaults[type].description : options.description;

		this.duration = this.empty(options.duration) ? this.defaults.duration : options.duration;

		this.background = this.empty(options.background) ? this.defaults[type].background : options.background;

		this.color = this.empty(options.color) ? this.defaults.color : options.color;
	}

	success(options) {
		this.setOptions(options, "success");
	}

	error(options) {
		this.setOptions(options, "error");
	}

	alert(options) {
		this.setOptions(options, "alert");
	}

	info(options) {
		this.setOptions(options, "info");
	}

	createElement() {

	}

	showNotification(id) {

	}

	hideNotification(id) {

	}

	empty(value) {
		if (value === null || typeof value === "undefined" || value.toString().trim() === "") {
			return true;
		}
		return false;
	}
}