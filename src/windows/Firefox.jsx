/* Import section */
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";
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
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null);

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
            <div className="flex flex-col items-center justify-center h-[70] bg-transparent text-black mt-30">
                <h2 className="text-6xl font-sans font-medium mb-8 text-gray-800">
                    <span className="text-blue-600">G</span>
                    <span className="text-red-600">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-600">g</span>
                    <span className="text-green-600">l</span>
                    <span className="text-red-600">e</span>
                </h2>

                <div className="w-full max-w-xl px-4 flex flex-row space-y-4 text-white">
                    <div className="flex items-center w-lg mx-auto border border-gray-300 rounded-full
                                    shadow-md hover:shadow-lg focus-within:shadow-lg transition-shadow bg-white">
                        <Search className="w-5 h-5 text-gray-500 ml-4" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search Google or type a URL"
                            className="grow px-4 py-2 bg-transparent outline-none border-none text-gray-800"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                </div>
                {/* Optional: Add search buttons (highly recommended for Google look) */}
                <div className="mt-6 flex space-x-4">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-2 px-4 rounded-md border border-transparent">
                        Google Search
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm py-2 px-4 rounded-md border border-transparent">
                        I'm Feeling Lucky
                    </button>
                </div>
            </div>
        </div>
    )
}

const FirefoxWindow = WindowWrapper(Firefox, 'firefox')

export default FirefoxWindow
