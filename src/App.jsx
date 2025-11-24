/* Import section */
import gsap from "gsap"
import { Dock } from "./components/Dock"
import { Navbar } from "./components/Navbar"
import { Draggable } from "gsap/Draggable"
import TerminalWindow from "./windows/Terminal"
gsap.registerPlugin(Draggable)

/* App component section */
function App() {
    return (
        <main>
            {/* Navigation bar section */}
            <Navbar />
            {/* Dock section */}
            <Dock />
            {/* Terminal window */}
            <TerminalWindow />
        </main>
    )
}
/* Export section */
export default App
