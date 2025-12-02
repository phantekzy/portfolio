import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { useEffect, useState } from "react";
import { useWindowStore } from "../store/window";
import { useLocationStore } from "../store/location";
import { dockApps } from "../constants";

const Home = () => {
    const { setActiveLocation } = useLocationStore()
    const [projects, setProjects] = useState([]);
    const { openWindow } = useWindowStore()

    /* Fetching my repos */
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    "https://api.github.com/users/phantekzy/repos?sort=created&direction=desc&per_page=5"
                );
                const data = await res.json();
                const repos = data.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    icon: "/images/open-folder.png",
                }));
                setProjects(repos);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRepos();
    }, []);

    const handleOpenProject = (project) => {
        const folder = {
            id: project.id,
            name: project.name,
            icon: project.icon,
            kind: "folder",
            children: [
                {
                    id: project.id + 1000,
                    name: `${project.name}.txt`,
                    kind: "file",
                    fileType: "txt",
                    description: [project.description || "No description provided"],
                    icon: "/images/txt.png",
                    position: "top-5 left-5",
                },
                {
                    id: project.id + 2000,
                    name: project.name,
                    kind: "file",
                    fileType: "url",
                    href: project.html_url,
                    icon: "/images/firefox.png",
                    position: "top-5 left-40",
                },
            ],
        };

        setActiveLocation(folder);
        openWindow("files");
    };

    /* Make folders draggable AFTER they exist */
    useEffect(() => {
        if (projects.length === 0) return;

        Draggable.create(".folder", {
            type: "x,y",
            edgeResistance: 0.65,
            bounds: "#home",
            inertia: true,
        });
    }, [projects]);

    return (
        <section id="home" className="relative w-full h-full">
            <ul className="relative">
                {dockApps.map(({ id, name, icon }) => (
                    <li
                        className="group folder"
                        key={id}>
                        <img src={`/images/${icon}`}
                            className="w-9 h-9 object-contain"
                            onClick={() => openWindow(id)}
                        />
                        <p>{name}</p>
                    </li>
                ))}

                {projects.map(project => (
                    <li
                        className={clsx("group folder")}
                        key={project.id}
                        onClick={() => handleOpenProject(project)}
                    >
                        <img src={project.icon} className="w-9 h-9 object-contain" />
                        <p>{project.name}</p>
                    </li>
                ))}

            </ul>
        </section>
    );
};

export default Home;

