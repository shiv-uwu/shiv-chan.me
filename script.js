// basically some magik code that doesnt let you pause

var videoEle = document.getElementById("urmom");
videoEle.onpause = () => {
    videoEle.play();
}
