# X:/Notify

The main goal of this library is to provide developers with a good looking notification system with a single ".js" file. All the styling and such would be included in that file.

The [minified version](https://github.com/Xtrendence/X-Notify/blob/main/x-notify.min.js) is only 4.69 KBs, whereas the [normal one](https://github.com/Xtrendence/X-Notify/blob/main/x-notify.js) is 6.88 KBs.

### Demo

You can test this out here: 

https://xtrendence.github.io/X-Notify/

### Installation

Put "x-notify.js" in a directory such as "assets/js/", and then, in your `<head>` tag:

````
<script src="./assets/js/x-notify.js"></script>
````

### Usage:

````
const Notify = new XNotify("TopLeft");
````
````
Notify.success({ 
	title: "Title", 
	description: "Description", 
	duration: 4000 
});
````

The above would show a notification on the top right of the screen and it'd stay there for 4 seconds before disappearing. There are quite a few options you can change, such as:

````
Notify.error({
	width: "300px",
	title: "Failed to Upload File",
	description: "The file you submitted couldn't be uploaded.",
	duration: 4000,
	background: "rgb(200,50,0)",
	color: "rgb(255,255,255)"
});
````

There are 4 different notification types: "success", "error", "alert", and "info", all of which can be used like so:

````
Notify.success();
Notify.error();
Notify.alert();
Notify.info();
````

By default, each type has a different and appropriate background and font color, though they can all be changed as shown above.

Here's a list of all the options you can use, and acceptable values:

|Option|Type|Value|Description|
|------|----|-----|-----------|
|position|String|"TopRight", "BottomRight", "BottomLeft", "TopLeft"|Where the notification popup would appear (this is passed to the constructor).|
|width|String|Any integer with "px", such as "100px".|The width of the notification.|
|borderRadius|String|Any integer with "px", such as "20px".|The border radius of the notification.|
|title|String|Usually, some short text.|The title of the notification; something like "Upload Error", or "Form Submitted".|
|description|String|A longer description of the event.|A description of the event the notification was shown for.|
|duration|Integer|Any integer.|The duration, in milliseconds, that the notification would stay on screen for.|
|background|String|"rgb(r,g,b)", "rgba(r,g,b,a)", "#RRGGBB"|The color of the background of the notification. Can be any RGB, RGBA, or hex value.|
|color|String|"rgb(r,g,b)", "rgba(r,g,b,a)", "#RRGGBB"|The color of the font of the notification. Can be any RGB, RGBA, or hex value.|

A full example with a button click event listener, and a fully custom notification:

````
document.addEventListener("DOMContentLoaded", () => {
	const Notify = new XNotify();

	let custom = document.getElementById("custom");

	custom.addEventListener("click", () => {
		Notify.info({
			width: "300px",
			borderRadius: "4px",
			title: "Customized Notification",
			description: "Description of the notification.",
			duration: 10000,
			background: "rgb(0,0,30)",
			color: "rgb(0,200,255)"
		});
	});
});
````