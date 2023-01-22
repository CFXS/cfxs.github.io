import { CFXS_Logo } from "./CFXS_Logo"
import "./MainLoadingScreen.css"
import { PhaseLoad } from "./PhaseLoad"

export class MainLoadingScreen {
    private m_PhaseLoad: PhaseLoad
    private m_CFXS_Logo: CFXS_Logo

    constructor(base: HTMLElement) {
        this.m_PhaseLoad = new PhaseLoad(base.querySelector("#loading_element"), { _color: "#F00", _thickness: "0.5rem" })
        this.m_CFXS_Logo = new CFXS_Logo(base.querySelector("#cfxs_logo"), { _lv_mode: true })

        base.onclick = () => {
            this.Hide()
        }

        // Show
        base.classList.add("anim-opacity-1-1s", "anim-delay-250ms", "anim-ease-inout")
    }

    private Hide() {
        this.m_PhaseLoad.Hide()
    }
}

