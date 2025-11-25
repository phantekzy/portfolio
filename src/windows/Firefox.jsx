/* Import section */
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { WindowControls } from "../components/WindowControls";
import { WindowWrapper } from "../hoc/WindowWrapper";
import { useEffect, useRef, useState } from "react";
import { useWindowStore } from "../store/window";

/* Firefox browser component */
const Firefox = () => {
    /* Importing the store */
    const { windows } = useWindowStore()
    /* importing isOpen */
    const isOpen = windows["firefox"]?.isOpen
    const inputRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();

    }, [isOpen]);



    return (
        <div onMouseDown={() => {
            useWindowStore.getState().focusWindow('firefox')
            inputRef.current.focus()
        }}>
            <div id='window-header'>
                <WindowControls target="firefox" />
                <h2>Firefox</h2>
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>


            </div>
            <div className="flex flex-col items-center justify-center  bg-transparent text-black  ">
                {loading && <div className="absolute top-0 left-0 w-full h-full flex items-center
                                            justify-center text-white">
                    Loading...
                </div>}
                <iframe
                    className="w-full h-full"
                    src="https://en.wikipedia.org/wiki"
                    style={{ width: '99%', height: '100vh' }}
                    onLoad={() => setLoading(false)}
                ></iframe>

            </div>
        </div>
    )
}

const FirefoxWindow = WindowWrapper(Firefox, 'firefox')

export default FirefoxWindow
