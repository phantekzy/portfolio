import { WindowControls } from "../components/WindowControls"
import { WindowWrapper } from "../hoc/WindowWrapper"
import { useWindowStore } from "../store/window"

const Images = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile?.data

    if (!data) return null

    const { name, imageUrl } = data

    return (
        <>
            <div id="window-header" className=" ">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5  bg-black/45">
                {imageUrl
                    ? (
                        <div className="w-full">
                            <img
                                src={imageUrl}
                                className="w-full h-auto max-h-[70vh] object-contain rounded"
                            />
                        </div>
                    )
                    : null
                }

            </div>
        </>
    )
}


const ImageWindow = WindowWrapper(Images, 'imgfile')

export default ImageWindow
