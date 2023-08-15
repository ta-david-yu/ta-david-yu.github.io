import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/mOFqkkW--zA",
    },
    {
        "type": "image",
        "src": "./img/work/thursdays-uptown-media-00.jpg",
    },
    {
        "type": "image",
        "src": "./img/work/thursdays-uptown-media-01.jpg",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/thursdays-uptown-media-02.jpg",
        "comment": ""
    },
],

linksInfo: 
<div>
            <a href="https://functionoverflu.itch.io/thursdays-uptown"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | First-person adventure |
| Made with | Unity |
| Team | Ta David Yu (Designer, Programmer), Trey Ramm (Designer, 3D Artist) |

** Notable features **

|  | Description |
| --------- | ------- |
| Audio Occlusion & Propagation | In combination with FMOD, implemented an audio occlusion & propagation simulation system based on a tech demo shown by Quantom Break's audio engineer (the video source cannot be found anymore). |

`}/>
</div>,

description:
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Thursday's Uptown</div>
    </div>

    <div style={{margin: '12px'}} />

    A short bizarre first-person adventure & exploration game with PS1-style graphics. You are in this seemingly normal apartment but something is off.
    Explore and find out the hidden secrets alone.

    <br/>
    <br/>
    <div>--</div>
    A parody of & homage to the popular Japanese TV show 'Wednesday's Downtown (水曜日のダウンタウン)'.
    
    <br/>
    <br/>
    <div>Trailer music made by <a href="http://loyaltyfreakmusic.com/about">Monplaisir</a>.</div>
</div>,
}