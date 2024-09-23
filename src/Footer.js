import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// simport PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img 
        className="footer_albumLogo"
        src="https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/b5/8b/69/b58b698f-b26f-3cba-1cb3-5fd90d622a76/artwork.jpg/1200x1200bf-60.jpg"  alt=""/>  
        <div className="footer_songInfo"/>
        <h4>Parth --</h4> &nbsp;
        <p>Parth Bhatia</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon  className="footer_green"/>
        <SkipPreviousIcon  className="footer_icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
        <SkipNextIcon  className="footer_icon"/>
        <RepeatIcon  className="footer_green"/>

      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>  
          </Grid> 
          <Grid item xs>
              <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
