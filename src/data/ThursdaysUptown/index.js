import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/YSH--V63RQ8",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-00.png",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-02.png",
        "comment": ""
    },
],

linksInfo: 
<div>
            <a href="https://functionoverflu.itch.io/sorry-no-jump-for-you"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
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
| Audio Occlusion & Propagation | In combination with FMOD, implemented an audio occlusion & propagation system that simulates occluded sound propagation based on a tech demo shown by Quantom Break's audio engineer (the video source cannot be found anymore). |

`}/>
</div>,

description:
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Thursday's Uptown</div>
    </div>

    <div style={{margin: '12px'}} />

    A short bizarre first-person adventure & exploration game with PS1-style graphics. A parody of the popular Japanese TV show 'Wednesday's Downtown (水曜日のダウンタウン)'.
    
    <br/>
    <br/>
    <div>--</div>
    What is the goal of the game?
    Well, that's for you to find out! I don't want to get into too much detail and spoil the exprience. Just play it and you will know what the game is about :)
</div>,
}