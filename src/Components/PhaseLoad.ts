import "./PhaseLoad.css"

export interface PhaseLoadConfig {
    _color?: string
    _thickness?: string
    _height?: string
}

export class PhaseLoad {
    private m_Base: HTMLElement
    private m_Config: PhaseLoadConfig

    constructor(base: HTMLElement, config: PhaseLoadConfig = null) {
        this.m_Config = config
        this.m_Base = base

        this.m_Base.setAttribute("viewBox", "-256 -96 512 192")
        this.m_Base.classList.add("phase-load")
        this.m_Base.style.height = this.m_Config?._height || "calc(min(15vw, 15vh))"
        this.m_Base.innerHTML = `<path style="fill: none; stroke-width: ${this.m_Config?._thickness || "4"}; stroke: ${this.m_Config?._color || "#FFF"};" d="M -256.126 0.537 L -224.105 0.448 C -192.084 0.358 -128.042 0.179 -85.354 13.423 C -42.667 26.667 -21.333 53.333 -10.667 66.667 C 0 80 0 80 0 80 C 0 80 0 80 0 80 C 0 80 0 80 0 53.333 C 0 26.667 0 -26.667 0 -53.333 C 0 -80 0 -80 0 -80 C 0 -80 0 -80 0 -80 C 0 -80 0 -80 10.667 -66.667 C 21.333 -53.333 42.667 -26.667 85.333 -13.333 C 128 0 192 0 224 0 L 256 0" />`

        const len = String(this.m_Base.querySelector("path").getTotalLength())
        this.m_Base.style.strokeDasharray = len
        this.m_Base.style.strokeDashoffset = len
    }

    Hide() {
        this.m_Base.classList.add("phase-load-hide")
    }
}