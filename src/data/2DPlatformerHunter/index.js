import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/wnalr3_RULU",
        "comment": ""
    },
    {
        "type": "video",
        "src": "https://youtu.be/Sj-WD9qeFmc",
        "comment": "A tutorial level I made with this plugin"
    },
    {
        "type": "video",
        "src": "https://youtu.be/Vsg9K_Cnhaw",
        "comment": "A short prototype I made with this plugin"
    },
    {
        "type": "image",
        "src": "./img/work/platformer-media-01.gif",
        "comment": "Moving Platform Controller (pink box) controlled by Player Input Driver can still carry other motor"
    },
    {
        "type": "image",
        "src": "./img/work/platformer-media-00.gif",
        "comment": "2D waypoint editor"
    },
    {
        "type": "image",
        "src": "./img/work/platformer-media-02.gif",
        "comment": "The same Character Controller with different animation"
    }
],

linksInfo:
<div>
            <a href="https://github.com/ta-david-yu/2D-Platformer-Hunter"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26" /></a>
</div>
,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | On-going |
| Platforms | Unity Package (Plugin) |
| Genre | Tool |
| Made with | Unity |
| Team | Ta David Yu |

** Features **

| | Description |
| --------- | ------- |
| Variable Jump Height | The height of a jump varies based on how long the player holds the jump action button. |
| On-Slope Movement | |
| Air Jump | |
| Wall Jump | |
| Climbing Area | Ladder/rope climbing behaviour. |
| Restricted Climbing Area | Users can separate the actual movable area in climbing state with the trigger area. Controller will be smoothly interpolated from triggered position to restricted area when entering climbing state. |
| One-Way Platform | Add the OneWayPlatform component to the platform which you want it to be One-Way Platform. |
| Moving Platform | Including a node editor for editing waypoints. |
| Dash | User is able to customize dash modules that can be applied to a controller. |
| Jump Input Buffering | The jump input will be buffered for a period of time when the character controller is still in the air. |
| Coyote Time | Also known as grace period jumping. It allows players to register jump input in a small period of time even after moving off ledges. |
| Ledge Grabbing | The controller can halt on the edge of a wall. |
| Wall Climbing | You can configure whether your controller slides on wall or climbs on walls (just like how [Knuckles](https://youtu.be/-qOVqxn-JVA) does). |

`}/>
</div>,

description:
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About 2D Platformer Hunter</div>
    </div>

    <div style={{margin: '12px'}} />

    2D Platformer Hunter is a customizable 2D platformer controller Unity plugin using reliable raycast-based detection method.
    <br/>
    <br/>

    Example art materials is made by rvros - <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a>.
    <br/>
    Music in the demo video is composed by <a href="http://loyaltyfreakmusic.com/about">Monplaisir</a>, Tale on the Late - The road we use to travel when we were kids.
</div>
,

oldDescription: 
`2D Platformer Hunter is a customizable 2D platformer controller using reliable raycast-based detection method for Unity Engine.

The code structure is based on a model that I call Input-Controller-Motor model. Each controller consists of three modules: Input, Controller and Motor.
Each module can be replaced with user-customized module to achieve various gameplay mechanics.

| Module   | Description |
| --------- | ------- |
| Input | It represents the brain of a controller. The brain can be player's input or an AI. Waypoint navigation for moving platform is also a type of Input module. |
| Controller | It represents the body of a controller. The body decides what a character can do, such as, double jumpping, dasing. |
| Motor | It represents the physics law of a controller. For example, a character motor collides with obstacles; a platform motor can carry other motors or transforms. |

Any other behaviours that do not belong to these three modules should instead be implemented in different components and listen to events sent by the three main modules.  

Example art materials is made by rvros - [Animated Pixel Adventurer](https://rvros.itch.io/animated-pixel-hero)  
Music in the demo video is composed by [Monplaisir](http://loyaltyfreakmusic.com/about), Tale on the Late - The road we use to travel when we were kids

`,
}