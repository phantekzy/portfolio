/* Import section */
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";
import { useWindowStore } from "../store/window";
import { Lock } from "lucide-react";
import { LockScreen } from "./LockScreen";
/* Navbar component */
export function Navbar({ onLock }) {
    /* useState */
    const isMobile = useMediaQuery({ query: '(max-width : 1024px)' })
    const { openWindow, focusedWindow } = useWindowStore()
    const currentDir = focusedWindow ? `~/${focusedWindow}` : "~";

    return (
        <nav>
            <div>
                {/* Logo image */}
                <img
                    src="/archlogo.svg"
                    className="h-5 w-5"
                />
                <p className="font-bold text-white/70 text-xs">{currentDir}</p>


                {/* Mapping on data */}
                <ul>
                    {
                        navLinks.map(({ id, name, type }) => (
                            <li
                                key={id}
                                onClick={() => openWindow(type)}
                            >
                                <p
                                    className={`${focusedWindow === type ? "text-white scale-120" : "text-white/50"}`}

                                >{name}</p>
                            </li>
                        ))
                    }
                </ul>


                {/* Date and time */}
                <time className="text-gray-50/80">
                    {isMobile
                        ? dayjs().format('MMM D, h:mm A')
                        : dayjs().format('dddd, MMMM D, h:mm A')
                    }
                </time>
            </div>

            {/* OS icons */}
            <div>
                <ul>
                    <li>
                        <Lock
                            className="icon-hover cursor-pointer"
                            color="gray"
                            size={18}
                            onClick={onLock}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
