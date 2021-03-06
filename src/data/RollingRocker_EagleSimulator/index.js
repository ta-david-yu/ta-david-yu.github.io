import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/qq86Y2gozus"
    },
    {
        "type": "image",
        "src": "./img/work/es-rr-media-01.png",
        "comment": "Eagle Simulator"
    },
    {
        "type": "image",
        "src": "./img/work/es-rr-media-02.png",
        "comment": "Rolling Rocker"
    },
    {
        "type": "image",
        "src": "./img/work/es-rr-media-00.png",
        "comment": "Controller setup"
    },
],

linksInfo:
<div>
    <a href="https://functionoverflu.itch.io/rolling-rocker-eagle-simulator"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>
,

description: 
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Rolling Rocker & Eagle Simulator</div>
    </div>

    <div style={{margin: '12px'}} />

    An alt-ctrl game uses a custom wand controller and an RGB camera.
    The wand controller can be anything that has two colors.
    Each color acts as one end of the wand.

    <br/>
    <br/>

    <div style={{fontWeight: 'bold'}}>The project includes two arcade games</div>

    <ul>
        <li>
        Rolling Rocker:  
        An endless runner game where you control the ball on a rod by tilting the wand controller. The goal is to avoid falling into the holes along the way and survive as long as possible.
        </li>

        <li>
        Eagle Simulator:
        A vertical scroller where you control an eagle to gather coins and avoid obstacles. The sooner you finish the level, the more extra points you get.
        The angle of the wand controller determines the moving direction of the eagle.
        Players can swing the wand controller to accelerate the eagle.
        </li>
    </ul>

    <div>--</div>
    This is an individual academic project for my human-computer interaction class back at National Chiao Tung University.
    Everything was coded by myself using modern Visual C++ and OpenCV.
    
    <br/>
    <br/>
    The music in the video is composed by <a href="http://loyaltyfreakmusic.com/about">Monplaisir</a>, Poupi Great Adventures : The Arcade Game.
    <br/>
    Some art assets are assets from RPG maker forums.
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Released |
| Platforms | Windows PC |
| Genre | Arcade games collection |
| Made with | Visual C++, OpenCV |
| Team | Ta David Yu |

** Notable features **

|  | Description |
| --------- | ------- |
| Component-based Game Framework | I coded a simple entity-component-based game engine all from scratch in Visual C++, which allows me to make two different games reusing shared components. |
| RGB Camera Color Tracking | I implemented a colored area tracking algorithm as input using OpenCV. |
| Delayed Result Gathering for Camera Capture Input | To achieve non-blocking camera frame capturing, I separated the camera input from the main game loop thread to another thread. As a result, the game has a stable framerate, and the camera input is still delivered consistently.  |
`}/>
</div>,

oldDescription: 
`Rolling Rocker & Eagle Simulator is a personal academic project for my human-computer interaction class in college. It includes two arcade games.
Everything was made by myself using modern C++ and OpenCV. This is an alt-ctrl game using a custom wand controller and an RGB camera.
The wand controller can actually be anything that has two colors. Each color acts as one end of the wand.

**Rolling Rocker** is an endless running game where you control a ball character on a stick by rotating the wand controller. 
Player has to balance and keep the ball from dropping into holes. The angle of the wand controller determines the angle of the stick.

**Eagle Simulator** is a running game where you control an eagle to gather coins and avoid obstacles. The sooner you finish the level, the more extra points you get. 
The angle of the wand controller determines the moving direction of the eagle. Players can swing the wand controller to accelerate the eagle.

| Feature   | Description |
| --------- | ------- |
| Component-based Engine | A simple component-based game engine all built from scratch in Visual C++. |
| RGB Camera Color Tracking | Track colored area as input using OpenCV. |
| Optimization using Multithreading | Separate input thread with main game loop thread to avoid possible frame rate drops due to camera capturing delay. |
| 2D World Streaming | Split 2D tile worlds into chunks to improve performance. |

Some art materials are assets from RPG maker forums.  
Music in the video is composed by [Monplaisir](http://loyaltyfreakmusic.com/about), Poupi Great Adventures : The Arcade Game

`,

}