/* Import section */
import { useState, useRef, useEffect } from "react";
import { WindowControls } from "../components/WindowControls";
import { WindowWrapper } from "../hoc/WindowWrapper";
import { useWindowStore } from "../store/window";

/* Terminal window */
const Terminal = () => {
    const { windows } = useWindowStore();
    const isOpen = windows["terminal"]?.isOpen;
    /* COMMANDS DATABASE */

    /* Fastfetch section */
    const fastfetch = [
        "[phantekzy@archlinux ~]$ fastfetch",
        " ",
        "",
        "                   -`                   phantekzy@archlinux",
        "                  .o+`                  -------------------------------",
        "                 `ooo/                  Full Name : Maini Lotfi Abdelkader",
        "                `+oooo:                 Alias     : phantekzy",
        "               `+oooooo:                Location  : Bir Mourad Raïs, Algiers, Algeria",
        "               -+oooooo+:               Age       : 29 (born 1996-09-08)",
        "             `/:-:++oooo+:              Role      : Elden Lord + Full Stack Dev ",
        "            `/++++/+++++++:             Status    : Looking for a job",
        "           `/++++++++++++++:            WM        : Hyprland",
        "          `/+++ooooooooooooo/`          Shell     : Zsh + Starship",
        "         ./ooosssso++osssssso+`         Editor    : Neovim (Lua)",
        "        .oossssso-````/ossssss+`        Terminal  : Alacritty",
        "       -osssssso.      :ssssssso.       Browser   : Firefox / W3M",
        "      :osssssss/        osssso+++.      Theme     : NerdFont + Gruvbox Dark",
        "     /ossssssss/        +ssssooo/-      Hobby     : CyberSecurity, low-level code",
        "   `/ossssso+/:-        -:/+osssso+-    Fun Fact  : I wear glasses because i can't C#",
        "  `+sso+:-`                 `.-/+oso:   Motto     : \"Learn. Build. Play Dark Souls. Repeat.\"",
        " `++:.                           `-/+/",
        " .`                                 ",
        "",
        " ",
        " "
    ];

    /* Whoami command */
    const whoami = [
        "[phantekzy@archlinux ~]$ whoami",
        " ",
        "My name is Maini Lotfi Abdelkader, known online as phantekzy.",
        "I'm a junior full stack developer and a fully self-taught programmer",
        "who started from nothing and kept fighting no matter how hard life hit.",
        "",
        "I was originally studying civil engineering before severe tinnitus changed",
        "everything. The nonstop noise destroyed my focus, my studies, and my life",
        "for a long time, but I refused to give up. I learned the hard way that no one",
        "is coming to save you — you either stand up or stay down forever.",
        "",
        "So I stood up.",
        "",
        "I earned a technical degree in web development, but the formation was",
        "terrible. I had to relearn everything on my own from scratch: YouTube,",
        "documentation, breaking things, fixing things, trying again. Learning alone",
        "feels like being dropped into a huge ocean with no map, but I kept swimming.",
        "",
        "Today I work with HTML, CSS, JavaScript, TypeScript, PHP, React, Node.js,",
        "TailwindCSS, MySQL, and I write all my code inside Neovim like a real dev.",
        "I love learning, but I still feel like it's never enough, and yes — I still",
        "get lost sometimes. But quitting is not even an option.",
        "",
        "I have no job experience yet, not because I'm not ready, but because every",
        "company wants experience before they even give you a chance. It's a stupid",
        "loop, but I'm breaking it my own way: improving every day and refusing to fold.",
        "",
        "My long-term goal is to master full stack development so I can move into",
        "cybersecurity — my dream field. Certifications cost money, so first I need",
        "to earn it through code, skill, and pure determination.",
        "",
        "I don't want regrets. I want to become one of the best, even if it's only",
        "for one day. That one day is enough for me.",
        " ",
        "Type 'contact' if you want to reach me | Type 'projects' to see what I’ve built so far.",
        " ",
    ];

    const skills = [
        "[phantekzy@archlinux ~]$ skills",
        " ",
        "Full Stack Development Skills:",
        "------------------------------",
        "  Frontend:",
        "  ---------",
        "    - HTML5, CSS3, TailwindCSS",
        "    - JavaScript (ES6+), TypeScript",
        "    - React, React Hooks, React Router",
        "    - Responsive & accessible design",
        "",
        "  Backend:",
        "  --------",
        "    - Node.js, Express.js",
        "    - PHP, RESTful APIs",
        "    - MySQL, Database design & queries",
        "",
        "  Tools & Workflow:",
        "  -----------------",
        "    - Git & GitHub for version control",
        "    - Neovim (Lua) for coding",
        "    - Terminal navigation & shell scripting",
        "    - Linux development environment (ArchLinux)",
        "",
        "  Soft Skills:",
        "  ------------",
        "    - Problem solving & debugging",
        "    - Self-taught, independent learner",
        "    - Project planning & execution",
        "    - Resilience under pressure",
        " ",
        "Always learning, always building, always improving.",
        " ",
    ];

    const contact = [
        "You can reach me via email, GitHub, LinkedIn, or X (Twitter).",
        "I check messages regularly and welcome collaboration, projects, or professional inquiries.",
        "",
        "------------------------------------------",
        "Contact Info:",
        "------------------------------------------",
        <div key="email">
            Email     | <a href="mailto:mainilotfi@gmail.com" className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent hover:underline">mainilotfi@gmail.com</a>
        </div>,
        <div key="github">
            GitHub    | <a href="https://github.com/phantekzy" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:underline">github.com/phantekzy</a>
        </div>,
        <div key="linkedin">
            LinkedIn  | <a href="https://linkedin.com/in/maini-lotfi" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:underline">linkedin.com/in/maini-lotfi</a>
        </div>,
        <div key="x">
            X         | <a href="https://twitter.com/themainilotfi" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:underline">@themainilotfi</a>
        </div>,
        "------------------------------------------",
        "",
    ];




    const about = [
        "[phantekzy@archlinux ~]$ about",
        "------------------------------------------------------------------------",
        "I am Maini Lotfi Abdelkader (phantekzy), a self-taught,",
        "junior Full Stack Developer specializing in building modern,",
        "efficient, and scalable web applications.",
        "-------------------------------------------------------------------------",
        "                              Tech Stack ",
        "-------------------------------------------------------------------------",
        "  - Frontend | HTML5, CSS3, JavaScript, TypeScript, React, TailwindCSS",
        "  - Backend  | Node.js, PHP, MySQL",
        "  - Tools    | Git, GitHub, Neovim, Terminal-based workflows",
        "-------------------------------------------------------------------------",
        "",
        "                            Professional Focus",
        "-------------------------------------------------------------------------",
        "  - Writing clean, maintainable, and modular code",
        "  - Learning advanced web development patterns and best practices",
        "  - Exploring cybersecurity and low-level programming as future goals",
        "--------------------------------------------------------------------------",
        "",
        "                             Work Philosophy:",
        "--------------------------------------------------------------------------",
        "  - I thrive on challenges and continuous self-improvement",
        "  - Problem-solving with creativity and technical precision",
        "  - Building projects from scratch and iterating to improve them",
        "--------------------------------------------------------------------------",
        "                              Personal Motto:",
        "--------------------------------------------------------------------------",
        "  'Learn. Build. Play Dark Souls. Repeat.'",
        "--------------------------------------------------------------------------",
        "                              Current Objective:",
        "--------------------------------------------------------------------------",
        "  - Master Full Stack Development and gain professional experience",
        "  - Eventually transition into Cybersecurity",
        "--------------------------------------------------------------------------",
        "       Type 'projects' to see my work or 'contact' to reach out.",
        " ",
    ]

    /* Help command */
    const responses = {
        "help":
            `
  Available commands:
  ------------------------------------------------
  System:      
  ------------------------------------------------
    help       |  Show this help menu
    clear      |  Clear the terminal screen
    whoami     |  Display user identity
    pwd        |  Print current working directory
    ls         |  List directory contents
    cd <dir>   |  Change directory
    fastfetch  |  Display system information
 -------------------------------------------------
  Profile:     
  ------------------------------------------------    
    about      |  Short biography and background
    skills     |  List technical skills and tools
    projects   |  Show featured development projects
    resume     |  Display a brief CV summary
    contact    |  Show contact information
 --------------------------------------------------
  Social:
 --------------------------------------------------
    socials    | List social media profiles
 --------------------------------------------------

`
        ,
        "tech": "HTML5  CSS3  JavaScript  PHP  Node.js  React  MySQL",
        "uname -a": "Linux archlinux 6.9.6-arch1-1 x86_64 GNU/Linux",
        "exit": "logout\n███████████ Process terminated successfully."
    };

    const terminalLines = [
        "help",
        "exit"
    ];



    const [linesState, setLinesState] = useState([]);
    const [input, setInput] = useState("");
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll and focus input
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        if (isOpen) inputRef.current?.focus();
    }, [linesState, isOpen]);

    // Reset terminal when closed
    useEffect(() => {
        if (!isOpen) {
            setLinesState([]);
            setInput("");
        }
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const newLine = `[phantekzy@archlinux ~]$ ${cmd}`;

        /* Clear command */
        if (cmd === "clear") {
            setLinesState([]);
            setInput("");
            return;
        }

        /* Fastfetch command */
        if (cmd === 'fastfetch') {
            setLinesState((prev) => [
                ...prev,
                ...fastfetch
            ]);
            setInput("");
            return;
        }

        /* Whoami command */
        if (cmd === "whoami") {
            setLinesState((prev) => [
                ...prev,
                ...whoami
            ]);
            setInput("");
            return;
        }

        /* About command */
        if (cmd === 'about') {
            setLinesState((prev) => [
                ...prev,
                ...about
            ])
            setInput("")
            return
        }

        /* Skills commands */
        if (cmd === 'skills') {
            setLinesState((prev) => [
                ...prev,
                ...skills
            ])
            setInput("")
            return
        }
        if (cmd === "contact") {
            setLinesState((prev) => [...prev, ...contact]);
            setInput("");
            return;
        }

        if (terminalLines.includes(cmd)) {
            const response = responses[cmd];
            setLinesState((prev) => [...prev, newLine, response]);
        } else {
            setLinesState((prev) => [...prev, newLine, `command not found: ${cmd}`]);
        }

        setInput("");
    };
    /* Return section */
    return (
        <>
            {/* Header */}
            <div id="window-header" className="bg-black text-white flex items-center justify-between p-2">
                <WindowControls target="terminal" />
                <h2>Terminal</h2>
            </div>

            {/* Terminal content */}
            <div
                ref={terminalRef}
                className="techstack font-mono p-3 whitespace-pre overflow-auto max-h-[65vh] rounded-lg shadow-inner flex flex-col"
            >
                {linesState.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}

                {/* Input */}
                <div className="flex flex-col mt-1">
                    <div className="flex items-center">
                        <span className="text-white mr-1">
                            [
                            <span className="text-transparent bg-linear-to-r from-blue-600 via-pink-400 to-red-500 bg-clip-text">
                                phantekzy
                            </span>
                            @archlinux ~]$
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleCommand(input);
                            }}
                            className="bg-transparent outline-none text-white w-full font-mono"
                        />
                    </div>
                    {!linesState.length && (
                        <p className="text-gray-400 text-sm mt-1">type 'help' for more info</p>
                    )}
                </div>

            </div>
        </>
    );
};

/* HOC wrapper */
const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;

