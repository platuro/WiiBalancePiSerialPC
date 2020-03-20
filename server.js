//const BalanceBoard = require("wii-balance-board-pi");
const SerialPort = require('serialport')
const port = new SerialPort("/dev/ttyUSB0", { baudRate: 256000 })

function SendTest(){
    port.write('ROBOT POWER ON\n')
}
 

setInterval(SendTest, 1000);
/*var balanceBoard = new BalanceBoard();
 
balanceBoard.connect();
 
balanceBoard.on("data", data => {
  console.log(data);
});*/