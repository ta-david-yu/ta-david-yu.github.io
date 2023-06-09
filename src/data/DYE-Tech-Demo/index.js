import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/0tD2ZouCuN4",
        "comment": "Gameplay video (spoilers)"
    },
    {
        "type": "image",
        "src": "./img/work/dye-tech-demo-media-00.png",
        "comment": "Land the Ball - Window Mode"
    },
    {
        "type": "image",
        "src": "./img/work/dye-tech-demo-media-01.png",
        "comment": "Pong"
    },
    {
        "type": "image",
        "src": "./img/work/dye-tech-demo-media-02.png",
        "comment": "Windows Debugger (Dear ImGui)"
    },
    {
        "type": "image",
        "src": "./img/work/dye-tech-demo-media-03.png",
        "comment": "Title"
    },
],

linksInfo:
<div>
    <a href="https://functionoverflu.itch.io/dyengine-tech-demo"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>
,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | 2D arcade collection |
| Made with | DYEngine (C++) |
| Team | Ta David Yu |

** Notable features I implemented **

| Feature   | Description |
| --------- | ------- |
| Custom Game Engine | Made with my custom 2D game engine DYEngine, which is based on SDL2 (OpenGL) & Dear ImGui. |
| Multiple Windows Management | Built a window-based particle system with it. |

`}/>
</div>,

description: 
<div style={{textAlign: 'left'}}>
    <div style={{fontWeight: 'bold'}}>
        <div>About DYEngine Tech Demo</div>
    </div>

    <div style={{margin: '12px'}} />

    DYEngine Tech Demo is an arcade game collection that consists of 2 mini-games. I made it to test out some basic features of my custom 2D game engine - DYEngine.
    <br/>
    <br/>
    The 2 mini-games are:
    <br/>
    1. Land the Ball - Try to land the ball on the platform as many times as possible.
    <br/>
    2. Pong - Simple Pong game with a surprising twist.
    
    <br/>
    <br/>
    <div>--</div>
    <div>Video music made by <a href="http://loyaltyfreakmusic.com/about">Rrrrrose</a>.</div>
    <div>Font created by <a href="https://managore.itch.io/">Daniel Linssen</a>.</div>
</div>
,

}