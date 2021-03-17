import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

const ToggleLike = () => {
    const [likeColor, setLikeColor] = useState('');
    // const handleLike = () =>{
    // system 01
    // const color = likeColor ? '' : 'primary';
    // setLikeColor(color)
    // system 02
    // setLikeColor(likeColor ? '' : 'primary')
    // }
    return (
        <div>
            <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')}
                color={likeColor}>
            </ThumbUpAltIcon>
        </div>
    );
};

export default ToggleLike;