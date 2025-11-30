/* Import section */
import gsap from "gsap"
import { useEffect, useState } from "react"
import { Draggable } from "gsap/Draggable"
/* COMPONENTS */
import { Dock } from "./components/Dock"
import { Navbar } from "./components/Navbar"
import { LockScreen } from "./components/LockScreen"
import { BootScreen } from "./components/BootScreen"
/* WINDOWS */
import TerminalWindow from "./windows/Terminal"
import FirefoxWindow from "./windows/Firefox"
import ResumeWindow from "./windows/Resume"
import FileManagerWindow from "./windows/FilesManager"
import TextWindow from "./windows/Text"
import ImageWindow from "./windows/Images"

/* GSAP Registre */
gsap.registerPlugin(Draggable)

/* App component section */
function App() {

    /* Boot screen */
    const [booted, setBooted] = useState(false)
    const [unlocked, setunlocked] = useState(false)

    useEffect(() => {
        if (unlocked) {
            document.body.classList.add("unlocked");
        } else {
            document.body.classList.remove("unlocked");
        }
    }, [unlocked]);



    if (!booted) {
        return <BootScreen onFinish={() => setBooted(true)} />
    }
    /* Lock screen */
    if (!unlocked) return <LockScreen onUnlock={() => setunlocked(true)} />


    return (
        <main>
            {/* Navigation bar section */}
            <Navbar onLock={() => setunlocked(false)} />
            {/* Dock section */}
            <Dock />
            {/* Terminal window */}
            <TerminalWindow />
            {/* Firefox window */}
            <FirefoxWindow />
            {/* Resume window */}
            <ResumeWindow />
            {/* Files manager window */}
            <FileManagerWindow />
            {/* Text Window */}
            <TextWindow />
            {/* Image window */}
            <ImageWindow />
        </main>
    )
}
/* Export section */
export default App
