const playingClassName = 'playing';

document.addEventListener('keydown', event => {
    const pressedKey = Array.from(document.querySelectorAll('.key')).find( element => {
        return element.dataset.key === event.code
    });

    if (pressedKey) {
        const player = document.getElementById(pressedKey.dataset.key);
        player.currentTime = 0;
        player.play();

        pressedKey.classList.add(playingClassName);
    }
});

document.addEventListener('keyup', event => {
    const pressedKey = Array.from(document.querySelectorAll('.key')).find( element => {
        return element.dataset.key === event.code
    });

    if (pressedKey) {
        pressedKey.classList.remove(playingClassName);
    }
});