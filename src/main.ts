import "./Styles/style.css"
import "./Styles/animations.css"
import { MainLoadingScreen } from "./Components/MainLoadingScreen"

var img = new Image()
img.onload = () => {
    new MainLoadingScreen(document.getElementById("main_loading_container"))
}
img.src = "res/bg.png"