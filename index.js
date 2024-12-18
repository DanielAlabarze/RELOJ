const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const day = document.querySelector(".dia");

const RELOJ = () => {
  const DATE = new Date();
  const SEGUNDOS = DATE.getSeconds() / 60;
  const MINUTOS = (SEGUNDOS + DATE.getMinutes()) / 60;
  const HORAS = (MINUTOS + DATE.getHours()) / 12;

  seconds.style.setProperty("--rotate", SEGUNDOS * 360);
  minutes.style.setProperty("--rotate", MINUTOS * 360);
  hours.style.setProperty("--rotate", HORAS * 360);
};


  const FECHA = new Date();
  //const DIA = FECHA.getFullYear();
  const nDIA = FECHA.getDate();
  const MES = FECHA.getMonth() + 1;
  const ANO = FECHA.getFullYear();


  day.innerHTML = nDIA.toString() + " " + MES.toString() + " " + ANO.toString(); 




setInterval(RELOJ, 1000);
 console.log(FECHA);
 
