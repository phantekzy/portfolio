/* Import section */
import { useLayoutEffect, useRef } from "react";
import { useWindowStore } from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

export function WindowWrapper(Component, windowKey) {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

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

        // Make draggable
        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            const draggableInstance = Draggable.create(element, {
                onPress: () => focusWindow(windowKey),
            })[0];

            // Cleanup on unmount
            return () => draggableInstance.kill();
        }, [windowKey, focusWindow]);

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
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName ||
        Component.name ||
        "Component"})`;

    return Wrapped;
}

