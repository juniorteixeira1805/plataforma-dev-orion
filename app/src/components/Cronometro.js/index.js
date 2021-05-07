import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyTimer( props ) {
    const {
        autoStart,
        dias,
        horas,
        minutos,
        segundos
    } = props

  let {
    seconds = JSON.parse(localStorage.getItem('@time-gamer')).segundos,
    minutes = JSON.parse(localStorage.getItem('@time-gamer')).minutos,
    hours = JSON.parse(localStorage.getItem('@time-gamer')).horas,
    days = JSON.parse(localStorage.getItem('@time-gamer')).dias,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: autoStart });

  setTimeout(function(){ 
    if(isRunning){
        localStorage.setItem('@time-gamer', JSON.stringify({dias: days, horas: hours, minutos: minutes, segundos: seconds}));
      }
   }, 3000);

  return (
    <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'var(--blue-900)'}}>Cronometro do jogo</h1>
            <div style={{fontSize: '5rem', color: 'var(--blue-900)', fontWeight: "bold"}}>
            { dias ? <span>{days} :</span>: undefined} { horas? <span>{hours} :</span>:undefined} { minutos ? <span>{minutes} :</span>:undefined} {segundos ? <span>{seconds}</span> : undefined}
        </div>
        <p style={{color: 'var(--blue-1000)', fontWeight: 'bold'}}>{isRunning ? 'Jogo rolando' : 'Jogo parado'}</p>
        <button onClick={start}
        style={{
            fontSize: '1rem',
            margin: '0.5rem',
            background: 'var(--blue-800)',
            color: 'var(--blue-50)',
            borderRadius: '0.35rem',
            width: '5rem',
            height: '2rem',
            cursor: 'pointer',
        }}>Start</button>
        <button onClick={pause}
        style={{
            fontSize: '1rem',
            margin: '0.5rem',
            background: 'var(--blue-800)',
            color: 'var(--blue-50)',
            borderRadius: '0.35rem',
            width: '5rem',
            height: '2rem',
            cursor: 'pointer',
        }}>Pause</button>
        <button onClick={reset}
        style={{
            fontSize: '1rem',
            margin: '0.5rem',
            background: 'var(--blue-800)',
            color: 'var(--blue-50)',
            borderRadius: '0.35rem',
            width: '5rem',
            height: '2rem',
            cursor: 'pointer',
        }}>Reset</button>
    </div>
  );
}


export default MyTimer