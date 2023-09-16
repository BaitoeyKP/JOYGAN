import React from 'react';

interface CurrentTextProps{
    Username: string;
    Usertext: string;
    timeleft: string;
    imagesrc: string;
    onEditClick: () => void;
    onRemoveCLick: () => void;
}

const CurrentText:React.FC<CurrentTextProps> = ({Username, Usertext, timeleft, imagesrc, onEditClick, onRemoveCLick}) => {
    return (
        <p>lorem</p>
    );
};

export default CurrentText;