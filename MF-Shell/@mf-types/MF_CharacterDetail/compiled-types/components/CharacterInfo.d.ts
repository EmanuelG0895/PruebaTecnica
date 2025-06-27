import React from "react";
import "./CharacterInfo.css";
interface CharacterInfoProps {
    character: {
        name: string;
        status: string;
        species: string;
        gender: string;
        origin: {
            name: string;
        };
        location: {
            name: string;
        };
        type?: string;
        image?: string;
        episode: any[];
        created: string;
    };
}
declare const CharacterInfo: React.FC<CharacterInfoProps>;
export default CharacterInfo;
