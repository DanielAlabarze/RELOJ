const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const day = document.querySelector(".dia");
const nombreDia = document.querySelector(".nombreDia");
const horaDigital = document.querySelector(".horaDigital");
const pajaroCucu = document.querySelector(".cucu");
const toggleButton = document.getElementById("toggleButton");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

const FECHA = new Date();
const nDIA = FECHA.getDate();
const MES = FECHA.getMonth() + 1;
const ANO = FECHA.getFullYear();

let nombresDias = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
];

let diaDeSemana = FECHA.getDay();

let nombreDelDia = nombresDias[diaDeSemana];

nombreDia.innerHTML = nombreDelDia;

day.innerHTML = `${nDIA < 10 ? "0" + nDIA : nDIA} - ${
  MES < 10 ? "0" + MES : MES
} - ${ANO}`;

/*function reproducirAudio() {
  audio.play(); // Reproduce el sonido
  setTimeout(() => {
    audio.pause(); // Pausa el audio después de 80ms
    audio.currentTime = 0; // Reinicia el audio al inicio
  }, 1000);
};

 reproducirAudio()*/

const RELOJ = () => {
  const DATE = new Date();
  const SEGUNDOS = DATE.getSeconds() / 60;
  const MINUTOS = (SEGUNDOS + DATE.getMinutes()) / 60;
  const HORAS = (MINUTOS + DATE.getHours()) / 12;

  seconds.style.setProperty("--rotate", SEGUNDOS * 360);
  minutes.style.setProperty("--rotate", MINUTOS * 360);
  hours.style.setProperty("--rotate", HORAS * 360);
};

setInterval(RELOJ, 1000);

const RelojDigital = () => {
  const DATE = new Date();
  const HORA = DATE.getHours();
  const MINUTO = DATE.getMinutes();
  const SEGUNDO = DATE.getSeconds();

  horaDigital.innerHTML = `${HORA < 10 ? "0" + HORA : HORA}:${
    MINUTO < 10 ? "0" + MINUTO : MINUTO
  }:${SEGUNDO < 10 ? "0" + SEGUNDO : SEGUNDO}`;
};

setInterval(RelojDigital, 1000);

let cucuActivo = true;

const CUCU = () => {
  if (!cucuActivo) return;

  const DATE = new Date();
  const SEGUNDOS = DATE.getSeconds() / 60;
  const MINUTOS = (SEGUNDOS + DATE.getMinutes()) / 60;
  const HORAS = (MINUTOS + DATE.getHours()) / 12;
  if (SEGUNDOS === 0) {
    pajaroCucu.style.display = "block";
    const audio = new Audio("./audio/cardinal-37075.mp3");
    audio.play().catch((error) => {
      console.error("Error al reproducir el audio:", error);
    });
  } else {
    pajaroCucu.style.display = "none";
  }
};

setInterval(CUCU, 1000);

toggleButton.addEventListener("click", () => {
  cucuActivo = !cucuActivo;
  if (icon1.style.display === "none") {
    icon1.style.display = "block";
    icon2.style.display = "none";
  } else {
    icon1.style.display = "none";
    icon2.style.display = "block";
  }
});
