<br />
<p align="center">
  <a href="https://www.thewebsitekitchen.com">
    <img src="img/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BeatMakerX---Drum Beats Generator</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="emailto:m90khan@gmail.com"><strong>Contact Me »</strong></a>
    <br />
    <br />
    <a href="https://m90khan.github.io/Drum-Beats-Maker-WebApp/.">View Demo</a>
    ·
     ·
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Skills](#skills)
- [Overview](#getting-started)
- [Code Snippet](#code)
- [Contact](#Contact)

### About the Project

Live: https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator/
<img src="./img/overview.jpg">

### Skills

- HTML5
- CSS3 - SCSS Syntax
- JavaScript
- Photoshop

##### Process

- Create a Class, add all the required quertSelectors
- Event Listener to Play the sounds when clicked on Play
- Based on the Play, loop over all the box divs and look for --active class
- If --active, play the sound based on specific class for each sound
- data-\* attribute used for mute/unmute the sounds
- Change the tempo of the sounds based on the tempo slider.

### Code Snippet

```javascript
repeat() {
    let step = this.index % 10;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //loops over bars
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack .3s alternate  ease-in-out 2`;
      if (bar.classList.contains("--active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
    console.log(activeBars);
  }
```

---

### Contact

Reach out to me at one of the following places!

- Website : <a href="https://thewebsitekitchen.com" target="_blank">`thewebsitekitchen.com`</a>
- Linkedin at <a href="https://de.linkedin.com/in/khanmohsinx" target="_blank">`@khanmohsinx`</a>

---
