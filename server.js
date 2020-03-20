//const BalanceBoard = require("wii-balance-board-pi");
const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;

raspi.init(() => {
    console.log("Init Pi");
    var serial = new Serial({baudRate: 9600});
    serial.open(() => {
        console.log("Serial Open");
      serial.on('data', (data) => {
        process.stdout.write(data);
      });
      serial.write('Hello from raspi-serial');
      function SendTest(){
        serial.write('Hello from raspi-serial');
        console.log("Sende Nachricht");
      }
      setInterval(SendTest, 1000);
    });
  });

/*var balanceBoard = new BalanceBoard();
 
balanceBoard.connect();
 
balanceBoard.on("data", data => {
  console.log(data);
});*/