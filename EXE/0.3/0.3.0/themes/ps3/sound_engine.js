const sounds = {
  boot: tryLoad('/assets/audio/boot_hum.mp3'),
  tick: tryLoad('/assets/audio/tick.wav'),
  whoosh: tryLoad('/assets/audio/whoosh.mp3')
};

function tryLoad(src) {
  try {
    const a = new Audio(src);
    a.volume = 0.8;
    return a;
  } catch (e) {
    return null;
  }
}

function safePlaySound(name) {
  if (sounds[name]) {
    sounds[name].currentTime = 0;
    sounds[name].play().catch(() => {}); // silent failure
  }
}
