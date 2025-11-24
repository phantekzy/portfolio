/* Import section */
import { WindowControls } from "../components/WindowControls"
import { WindowWrapper } from "../hoc/WindowWrapper"

/* Terminal window */
const Terminal = () => {
    const terminalLines = [
        "        __                          __             __                          ",
        "       /\\ \\                        /\\ \\__         /\\ \\                         ",
        " _____ \\ \\ \\___       __       ___ \\ \\ ,_\\     __ \\ \\ \\/'\\   ____    __  __    ",
        "/\\ '__`\\\\ \\  _ `\\   /'__`\\   /' _ `\\\\ \\ \\/   /'__`\\\\ \\ , <  /\\_ ,`\\ /\\ \\/\\ \\   ",
        "\\ \\ \\L\\ \\ \\ \\ \\ \\ /\\ \\L\\.\\_ /\\ \\/\\ \\\\ \\ \\_ /\\  __/ \\ \\ \\\\`\\\\/_/  /_\\ \\ \\_\\ \\  ",
        " \\ \\ ,__/ \\ \\_\\ \\_\\\\ \\__/.\_\\\\ \\_\\ \\_\\\\ \\__\\\\ \\____\\ \\ \\_\\ \\_\\/\\____\\\\/`____ \\ ",
        "  \\ \\ \\/   \\/_/\\/_/ \\/__/\\/_/ \\/_/\\/_/ \\/__/ \\/____/  \\/_/\\/_/\\/____/ `/___/> \\",
        "   \\ \\_\\                                                                 /\\___/",
        "    \\/_/                                                                 \\/__/ ",
        " ",
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
        " ",
        "[phantekzy@archlinux ~]$ cd ~/skills/dev_stack/",

        " ",


        "[phantekzy@archlinux dev_stack]$ ls -la",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 HTML5",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 CSS3",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 JavaScript",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 PHP",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 Node.js",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 React",
        "-rw-r--r-- 1 phantekzy users   13 Jul 01 20:25 MySQL",
        "",
        " ",
        "[phantekzy@archlinux ~]$ cd ~/socials/",
        " ",
        "[phantekzy@archlinux socials]$ curl -s linkedin.com/in/maini-lotfi | grep -i \"Maini Lotfi\"",
        "[ OK ] Loaded LinkedIn profile",
        " ",
        "[phantekzy@archlinux socials]$ curl -s x.com/mainilotfi | grep -i \"Maini Lotfi\"",
        "[ OK ] X/Twitter feed found",
        " ",
        "[phantekzy@archlinux socials]$ curl -s youtube.com/@phantekzy | grep -i \"phantekzy\"",
        "[ OK ] YouTube channel detected",
        " ",
        "[phantekzy@archlinux ~]$ mail -s \"Contact\" mainilotfi@gmail.com",
        "[ INFO ] Opening email client...",
        " ",
        "[phantekzy@archlinux ~]$ uname -a",
        "Linux archlinux 6.9.6-arch1-1 x86_64 GNU/Linux",
        " ",
        "[phantekzy@archlinux ~]$ exit",
        " ",
        "logout",
        " ",
        "",
        "███████████ Process terminated successfully.",
        " ",
        "",
        "Thank you for visiting PHANTEKZY's Arch terminal",
    ]

    return (
        <>
            {/* Header */}
            <div id="window-header" className=" bg-black text-white">
                <WindowControls target="terminal" />
                <h2>Terminal</h2>
            </div>

            {/* Terminal content */}
            <div className="techstack font-mono  p-3 whitespace-pre overflow-auto max-h-[65vh]  shadow-inner">

                {terminalLines.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
        </>
    )
}

/* HOC */
const TerminalWindow = WindowWrapper(Terminal, 'terminal')
export default TerminalWindow

