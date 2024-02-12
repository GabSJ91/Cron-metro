import { useState, useEffect } from "react"
import LapList from "./LapList"
import TimerDisplay from "./TimerDisplay"
import TimerConstrols from "./TimerConstrols"
import "./Timer.css"


const Timer = () => {

const [milissegundos, setMilissegundos] = useState(0)
const [timerOn , setTimerOn] = useState(false)
const [volta, setVolta] = useState([])

//Aqui é formatado os milissegundos para ficar igual ao de um relogio
const formataTime = ( ) => {
  const minutos  = ('0' + Math.floor(milissegundos / 60000) %60).slice(-2)
  const segundos  = ('0' + Math.floor(milissegundos / 1000) %60).slice(-2)
  const centesimo  = ('0' + Math.floor(milissegundos / 10) %100).slice(-2)

  return `${minutos}:${segundos}:${centesimo}`
}

const startTimer = (interval) => {
  return setInterval(() => {
    setMilissegundos( (maisMilissegundos) => maisMilissegundos + 10)
  }, 10)
}


const stopTimer =(interval) => {
  clearInterval(interval)
  return interval
}

const resetTimer = () => {
  setMilissegundos(0)
  setTimerOn(false)
  setVolta([])
}


const addVolta = () => {
  setVolta([...volta, formataTime()])
}


useEffect(() => {
  let interval = null;

  if(timerOn) {
    interval = startTimer(interval)
  }
  else {
    interval = stopTimer(interval)
  }

  return () => stopTimer(interval)
}, [timerOn] )





















  return (
    <div className="timer-container">
        <TimerDisplay time={formataTime()}/>
        <TimerConstrols
          timerOn={timerOn}
          onStart={() => setTimerOn(true)}
          onStop={() => setTimerOn(false)}
          onReset={resetTimer}
          onVolta={addVolta}
        />
        <LapList volta={volta} />
    </div>
  )
}

export default Timer