/* Import section */
import { WindowControls } from "../components/WindowControls"
import { socials } from "../constants"
import { WindowWrapper } from "../hoc/WindowWrapper"

/* Contact component */
const Contact = () => {
    return <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact the dev</h2>
        </div>

        <div className="p-5 space-y-5">
            <img
                src="/images/me5.jpg"
                className="w-40 rounded-full"
            />

            <h3>Contact & Collaboration</h3>
            <p
                className="text-white"
            >
                If you’re interested in working together, collaborating, or just want to say hello,
                feel free to reach out. I’m always open to new opportunities and meaningful conversations.
            </p>
            <p className="text-white font-extrabold">mainilotfi@gmail.com</p>

            <ul>
                {socials.map(({ id, link, text, icon }) => (
                    <li
                        key={id}
                        className="bg-white/5 backdrop-blur-lg hover:bg-white/10"
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noopner noreferrer"
                        >
                            <img
                                src={icon}
                                className="size-5"
                            />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>

        </div>

    </>
}
/* Contact window */
const ContactWindow = WindowWrapper(Contact, "contact")
/* Export section */
export default ContactWindow


