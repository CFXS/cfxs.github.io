export interface CFXS_Logo_Config {
    _lv_mode?: boolean
    _force_lv_mode?: boolean
}

enum Segment {
    C = 0,
    F = 1,
    F_BAR = 2,
    X1 = 3,
    X2 = 4,
    X_LINE = 5,
    S = 6
}

export class CFXS_Logo {
    private m_Segments: NodeListOf<SVGPathElement>

    constructor(base: HTMLElement, cfg: CFXS_Logo_Config = null) {
        const LV_MODE = cfg?._lv_mode ? (cfg?._force_lv_mode || (() => {
            const DATE = new Date()
            const LV_MODE_DATES: Array<Date> = [
                new Date("May 4"),
                new Date("November 11"),
                new Date("November 18"),
            ]
            for (const d of LV_MODE_DATES) {
                if (DATE.getMonth() == d.getMonth() && DATE.getDate() == d.getDate())
                    return true
            }
            return false
        })()) : false

        base.setAttribute("viewBox", "-240 -48 480 96")
        base.innerHTML = `
            <path id="c"
            d="M -144 -48 L -144 -28 L -220 -28 L -220 28 L -144 28 L -144 36 L -156 48 L -240 48 L -240 -36 L -228 -48 Z" />
            <path id="f" d="M -113 48 L -93 48 L -93 -28 L -29 -28 L -17 -40 L -17 -48 L -101 -48 L -113 -36 Z" />
            <path id="f_bar" d="M -89 10 L -41 10 L -29 -2 L -29 -10 L -89 -10 Z" />
            <path id="x1" d="M 88 48 L 65.992 19.829 L 78.992 3.19 L 114 48 L 88 48 Z" />
            <path id="x2" d="M 13 -48 L 39 -48 L 60.998 -19.842 L 47.998 -3.202 L 13 -48 Z" />
            <path id="xline" d="M 13 48 L 88 -48 L 114 -48 L 39 48 Z" />
            <path id="s"
            d="M 144 48 L 144 40 L 156 28 L 220 28 L 220 10 L 156 10 L 144 -2 L 144 -36 L 156 -48 L 240 -48 L 240 -40 L 228 -28 L 164 -28 L 164 -10 L 228 -10 L 240 2 L 240 36 L 228 48 Z" />`

        this.m_Segments = base.querySelectorAll("path")
        this.m_Segments.item(Segment.X1).style.fill = LV_MODE ? "#9D2235" : "#FFF"
        this.m_Segments.item(Segment.X2).style.fill = LV_MODE ? "#9D2235" : "#FFF"
    }

}