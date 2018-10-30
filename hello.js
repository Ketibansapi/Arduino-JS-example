const five = require ('johnny-five');
const board = new five.Board();

board.on('ready', () => {
    const led = new five.Led(13);
    var blinkCount = 0;
    const blinkMax = 50;

    led.blink(1000, () => {
        blinkCount++;
        console.log ( `I have ganti state ${blinkCount} times`);
        if (blinkCount >= blinkMax){
            console.log ('I shall stop blinking now');
            led.stop();
        }
    });
});