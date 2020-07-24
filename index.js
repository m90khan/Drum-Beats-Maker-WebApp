// Let's Break the functionality
/*
 1- When user click play , we loop over the boxes(.pad) .
 if --active is active on .pad we play the sound

 */

class Drums {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currenSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat-acoustic01.wav";
    this.selects = document.querySelectorAll("select");
    this.muteBtn = document.querySelectorAll(".mute");
    this.tempSlider = document.querySelector(".tempo-slider");

    this.playBtn = document.querySelector(".play");
    this.index = 0; // index for the loop over pad

    this.bpm = 60; // beats interval
    this.playing = null; // clear interval
  }
  //loop
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
  start() {
    const interval = (60 / this.bpm) * 1000;
    //perform a check for thee clearing out multiple intervals
    // to check this.playing condition is false meanin tat its playing
    //
    if (!this.playing) {
      this.playing = setInterval(() => {
        // arow function to refer to parent this
        this.repeat();
      }, interval);
    } else {
      clearInterval(this.playing);
      this.playing = null;
    }
  }
  //to select the sound pad
  activePad() {
    this.classList.toggle(`--active`);
  }
  //to update the text of the button
  updateBtn() {
    if (!this.playing) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("--active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("--active");
    }
  }
  //changing the sound
  soundChange(e) {
    const selectName = e.target.name;
    const selectValue = e.target.value;
    console.log(selectName);
    switch (selectName) {
      case "kick-select":
        this.kickAudio.src = selectValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("--active");
    // console.log(e.target);
    // console.log(muteIndex);
    if (e.target.classList.contains("--active")) {
      e.target.innerHTML = '<i class="fas fa-volume-mute"></i>';
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      e.target.innerHTML = '<i class="fas fa-volume-up"></i>';

      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }

  //tempo
  tempoChange(e) {
    const tempoValue = document.querySelector(".tempo-nr");
    let targetValue = e.target.value;

    tempoValue.innerText = targetValue;
  }
  tempoUpdate(e) {
    this.bpm = e.target.value;
    clearInterval(this.playing);
    this.playing = null;
    const playBtn = document.querySelector(".play");
    if (playBtn.classList.contains("--active")) {
      this.start();
    }
  }
}

const drum = new Drums();

//Event Listeners

// when play is click : loop over each pad from b0-b9
drum.playBtn.addEventListener("click", function () {
  drum.updateBtn();
  drum.start();
});

drum.pads.forEach((pad) => {
  pad.addEventListener("click", drum.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

//selection change
drum.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drum.soundChange(e);
  });
});
//mute
drum.muteBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drum.mute(e);
  });
});
// change the tempo input slider value and update the bpm
drum.tempSlider.addEventListener("input", function (e) {
  drum.tempoChange(e);
});
// update the bpm
drum.tempSlider.addEventListener("change", function (e) {
  drum.tempoUpdate(e);
});
