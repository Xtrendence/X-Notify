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
		let element = this.createElement();
		this.showNotification(element);
	}

	error(options) {
		this.setOptions(options, "error");
		let element = this.createElement();
		this.showNotification(element);
	}

	alert(options) {
		this.setOptions(options, "alert");
		let element = this.createElement();
		this.showNotification(element);
	}

	info(options) {
		this.setOptions(options, "info");
		let element = this.createElement();
		this.showNotification(element);
	}

	createElement() {
		if(!document.getElementById("x-notify-container")) {
			let body = document.getElementsByTagName("body")[0];

			let container = document.createElement("div");
			container.id = "x-notify-container";
			
			body.appendChild(container);
		}
		
		let notification = document.createElement("div");
		notification.id = this.generateID();

		notification.innerHTML = '<span>' + this.title + '</span>';

		return notification;
	}

	showNotification(element) {
		let container = document.getElementById("x-notify-container");

		container.appendChild(element);

		setTimeout(() => {
			this.hideNotification(element);
		}, this.duration);
	}

	hideNotification(element) {
		element.remove();
	}

	generateID() {
		let id = this.epoch() + "-" + this.shuffle(this.epoch());

		if(this.empty(document.getElementById("x-notify-container").innerHTML)) {
			return id;
		}

		let invalid = true;

		while(invalid) {
			if(document.getElementById(id)) {
				id = this.epoch() + "-" + this.shuffle(this.epoch());
			} else {
				invalid = false;
				break;
			}
		}
		
		return id;
	}

	shuffle(string) {
		let parts = string.toString().split("");
		for(let i = parts.length; i > 0;) {
			let random = parseInt(Math.random() * i);
			let temp = parts[--i];
			parts[i] = parts[random];
			parts[random] = temp;
		}
		return parts.join("");
	}

	epoch() {
		var date = new Date();
		var time = Math.round(date.getTime() / 1000);
		return time;
	}

	empty(value) {
		if (value === null || typeof value === "undefined" || value.toString().trim() === "") {
			return true;
		}
		return false;
	}
}