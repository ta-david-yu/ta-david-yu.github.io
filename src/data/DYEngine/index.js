import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/ZrwCcynemSA",
        "comment": "DYEngine Feature Highlights 2023"
    },
    {
        "type": "video",
        "src": "https://youtu.be/CldpJoQgW-Q",
        "comment": "A 4-player alt-ctrl game made with DYEngine\nin 48 hours at CGL Turtle Game Jam"
    },
    {
        "type": "video",
        "src": "https://youtu.be/0tD2ZouCuN4",
        "comment": "A tech demo I made without DYEditor to test out engine's base functionalities"
    },
],

linksInfo:
<div>
    <a href="https://github.com/ta-david-yu/DYEngine"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26" /></a>
</div>
,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | On-going |
| Platforms | Windows PC |
| Made with | C++20 (For more details on external libraries, please visit the [Github](https://github.com/ta-david-yu/DYEngine) repository page) |
| Team | Ta David Yu |

** Engine feature (non-exhaustive) **

| Feature   | Description |
| --------- | ------- |
| Keyboard, Mouse and Controller Support | |
| 2D Audio System | |
| Basic Primitive Test Utility | Overlap test such as ray, sphere, sircle, AABB and point intersection. Dynamic overlap test such as raycast, circle cast and AABB cast. |
| Debug Drawing Utility | Draw debug primitive shapes such as sphere, circle, cube and line easily. |
| Customizable Render Pipeline | The engine is using the built-in 2D Render Pipeline by default. |
| Shader, Material and MaterialPropertyBlock System | This includes a custom shader preprocessor syntax that defines render state commands and exposes uniform variables as material properties. |
| Multi-window, Multi-viewport and Multi-camera System | You can have more than one window per application. |

** Editor feature (non-exhaustive) **

| Feature   | Description |
| --------- | ------- |
| Entity-Component-System (entt) Integration | EnTT ecs is used as the main game object model for DYEditor. |
| Scene Editor Interface | This includes a scene hierarchy, entity inspector, scene system inspector and a lot more editor windows. |
| Type-Info Code Generation | Implemented a custom code generator that generates RTTI code for the editor to serialize and draw interface for custom types. |
| Undo and Redo System | |
| Scene Serialization | Scene files are saved as human-readable toml text file. |
| Built-Components and Systems | Transform, hierarchy-related components, sprite rendering, audio system, window operation, scene loading operation...etc |

`}/>
</div>,

description: 
<div style={{textAlign: 'left'}}>
    <div style={{fontWeight: 'bold'}}>
        <div>About DYEngine</div>
    </div>

    <div style={{margin: '12px'}} />
    DYEngine is a 2D hobby game engine written in C++.
    <br/>
    <br/>
    I originally programmed the game engine out of my curiosity for the fundamentals of game technology. The development was put on a halt for a while.
    <br/>
    I picked it up again in late 2022 and use it as the base technology for my bachelor thesis, which focuses on researching game object model and Entity-Component-System.
    <br/>
    <br/>
    For more information about this project, please visit the <a href="https://github.com/ta-david-yu/DYEngine">Github</a> repository page.

    <br/>
    <br/>
    <div>--</div>
    So far I've made 2 games with the engine as shown in the gallery.
    <br/>
    <br/>
    <div style={{fontWeight: 'bold'}}>
    1. Main Battle Turtle
    </div>
    Main Battle Turtle is a 4-player alt-ctrl co-op game, where you play as a crew of battle turtle tank, trying to strike down as many objectives as possible and survive on the battle field. 
    The game was made in 48 hours at CGL Turtle Game Jam 2023 with Anton Sagel and <a href="https://twitter.com/trey_ramm">Trey Ramm</a>.
    <br/>
    <br/>
    <div style={{fontWeight: 'bold'}}>
    2. DYE Tech Demo
    </div>
    DYE Tech Demo is a collection of 2 mini-games. You can download it <a href="https://functionoverflu.itch.io/dyengine-tech-demo">here</a>.

    <br/>
    <br/>
    <div>--</div>
    <div>Video music made by <a href="http://loyaltyfreakmusic.com/about">Rrrrrose</a>.</div>
</div>
,

}