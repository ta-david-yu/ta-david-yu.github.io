import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/-6zq5dpSYRg",
    },
    {
        "type": "image",
        "src": "./img/work/souper-pumpkins-media-00.png",
    },
    {
        "type": "image",
        "src": "./img/work/souper-pumpkins-media-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/souper-pumpkins-media-02.png",
        "comment": ""
    },
],

linksInfo: 
<div>
            <a href="https://functionoverflu.itch.io/magic-shrooms-soup-er-pumpkins"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Game Jam |
| Platforms | Windows PC |
| Genre | Action arcade |
| Made with | Unity |
| Team | Alina (Production), Ambar (Artist), Anastasia (Programmer), Iuliia (Artist), Jess (Sound Designer), Ta David Yu (Programmer) |

** Notable features **

|  | Description |
| --------- | ------- |
| Context-based steering behaviours | Implemented improved steering behaviours model proposed by Andrew Fray. |

`}/>
</div>,

description:
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Magic Shrooms & Soup-er Pumpkins</div>
    </div>

    <div style={{margin: '12px'}} />

    An action arcade game made for 2022 FemDev Game Jam within 48 hours. The theme was 'Magic'.
    <br/>
    In Magic Shrooms & Soup-er Pumpkins, you control a group of magic mushrooms to collect as many pumpkins as you can,
    to make the tastiest pumpkin soup for yourself and your friends.

    <br/>
    <br/>
    <div>--</div>
    Game jam diversifiers: Can't Jump Can't Shoot, Color Accessible, Play on Words.
</div>,
}