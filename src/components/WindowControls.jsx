/* Import section */
import { useWindowStore } from "../store/window"
/* Windows controls */
export function WindowControls({ target }) {
    const { closeWindow } = useWindowStore()
    return <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)} />
        {/* will make them later too lazy rn */}
        <div className="minimize" onClick={closeWindow} />
        <div className="maximize" onClick={closeWindow} />
    </div>

}
