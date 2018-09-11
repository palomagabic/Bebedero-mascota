var five = require("johnny-five")
var circuito = new five.Board()
var bombillo; manguera; hygrometer;

circuito.on("ready", prender());

function prender()
{
  var configuracion = {pin: "A0", freg:255};
  hygrometer = new five.hygrometer(configuracion);

  bombillo = new five.Led(13);
  bombillo.on();
   //suponiendo que () es el puerto de conexion

   manguera = new five.Motor({pin: 5
   });
   manguera.to(180)
     //console.log ("start", Date.now())

     bombear();
}

function bombear()
{
  console.log("this.relativeHumidity: " + hygrometer.value + "%");
  var relativeHumidity = hygrometer.value);
  if (relativeHumidity < 50)
  {
    manguera.to(0)
      //console.log("stop", Date.now())
  }
  else {
    {
      manguera.to(180)
        //console.log ("start", Date.now())   })
    }
  }
  setTimeout(bombear, 1000);
}
