const playingClassName = 'playing';

document.addEventListener('keydown', event => {
    const pressedKey = Array.from(document.querySelectorAll('.key')).find( element => {
        return element.dataset.key === event.code
    });

    pressedKey.classList.add(playingClassName);

    // setTimeout(() => {
    //     pressedKey.classList.remove(playingClassName);
    // }, 500);
    console.log(pressedKey);
});

document.addEventListener('keyup', event => {
    const pressedKey = Array.from(document.querySelectorAll('.key')).find( element => {
        return element.dataset.key === event.code
    });

    pressedKey.classList.remove(playingClassName);
});