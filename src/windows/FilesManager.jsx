/* Import section */
import { Search } from "lucide-react"
import { WindowControls } from "../components/WindowControls"
import { WindowWrapper } from "../hoc/WindowWrapper"
import { locations } from "../constants"
import { useLocationStore } from "../store/location"
import clsx from "clsx"
import { useWindowStore } from "../store/window"
/* File manager window */
const FilesManager = () => {
    /* Locations store */
    const { activeLocation, setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()

    const openItem = (item) => {
        if (item.fileType === 'pdf') return openWindow('resume')
        if (item.kind === 'folder') return setActiveLocation(item)
    }
    /* Helper to map over the lists */
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation.id
                                ? "active"
                                : "not-active"
                        )}
                    >
                        <img
                            src={item.icon}
                            className="w-4"
                        />
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>

                    </li>
                ))}
            </ul>
        </div>
    )


    /* Return section */
    return (
        <>
            <div id="window-header">
                <WindowControls target='files' />
                <Search className="icon" />
            </div>

            <div className=" flex h-full">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}
                </div>
                <ul className="content">
                    {
                        activeLocation?.children.map((item) => (
                            <li
                                key={item.id}
                                className={item.position}
                                onClick={() => openItem(item)}
                            >
                                <img src={item.icon} />
                                <p>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </>
    )
}
/* File manager window */
const FileManagerWindow = WindowWrapper(FilesManager, "files")
/* Export section */
export default FileManagerWindow
