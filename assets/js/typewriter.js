console.log("working")
const messageArray = [document.getElementById("message").innerHTML + "."];
console.log(messageArray);
let textPosition = 0;
const speed = 100;

typewriter = () => {
	document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

	if (textPosition++ != messageArray[0].length)
		setTimeout(typewriter, speed);
}


window.addEventListener("load", typewriter)
