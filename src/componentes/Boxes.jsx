import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faNewspaper, faVideo } from "@fortawesome/free-solid-svg-icons";

function Boxes({ infoBoxes }) {
    const getIcon = (info) => {
        switch(info) {
            case "IMAGENS":
                return faImage;
            case "PUBLICAÇÕES":
                return faNewspaper;
            case "VÍDEOS":
                return faVideo;
            default:
                return null;
        }
    };

    const getIconColor = (info) => {
        switch(info) {
            case "IMAGENS":
                return "blue";
            case "PUBLICAÇÕES":
                return "blue";
            case "VÍDEOS":
                return "blue";
            default:
                return "black";
        }
    };

    return (
        <div className="containerSecao">
            {infoBoxes.map(box => (
                <div className="box" key={box.key}>
                    <FontAwesomeIcon 
                        icon={getIcon(box.info)} 
                        size="2x" 
                        style={{ color: getIconColor(box.info) }}
                    />
                    <p>{box.info}</p>
                </div>
            ))}
        </div>
    );
}

export default Boxes;
