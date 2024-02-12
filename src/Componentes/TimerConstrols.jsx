

const TimerConstrols = ({timerOn ,onStart, onStop , onReset , onVolta}) => {
  return (
    <div className="TimerControls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onVolta}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  )
}

export default TimerConstrols