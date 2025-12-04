/* Import section */
import { useEffect, useLayoutEffect, useRef } from "react";
import { useWindowStore } from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useMediaQuery } from "react-responsive";

export function WindowWrapper(Component, windowKey) {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        /* Input focus for all the windows */
        const isFocused = windows[windowKey]?.zIndex === Math.max(...Object.values(windows).map(w => w.zIndex))

        /* useEffect for the window focus */
        useEffect(() => {
            if (!isFocused) return;
            const element = ref.current;
            if (!element) return;
            const input = element.querySelector("input");
            input?.focus();
        }, [isFocused])
        //
        // Animation on open
        useGSAP(() => {
            const element = ref.current;
            if (!element || !isOpen) return;

            element.style.display = "block";

            gsap.fromTo(
                element,
                { scale: 0.1, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        }, [isOpen]);

        /* React responsive */
        const isMobile = useMediaQuery({ maxWidth: 640 });

        // Make draggable
        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            // Cleanup any existing Draggable
            let draggableInstance;
            if (!isMobile) {
                draggableInstance = Draggable.create(element, {
                    onPress: () => focusWindow(windowKey),
                })[0];
            }

            return () => {
                draggableInstance?.kill(); // remove previous Draggable
            };
        }, [windowKey, focusWindow, isMobile]); // <-- watch isMobile

        // Hide/show based on isOpen
        useLayoutEffect(() => {
            const element = ref.current;
            if (!element) return;
            element.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
            >
                {/* Added a tree to trick react so he reander a new component */}
                <Component {...props} key={String(isOpen)} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName ||
        Component.name ||
        "Component"})`;

    return Wrapped;
}

