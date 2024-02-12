
const LapList = ({volta}) => {
  return (
    <div className="LapList">
      <h3>Voltas:</h3>
      <ul>
        {volta.map((volta, index) => (
          <li key={index}>Volta {index +1 }: {volta}</li>
        ))}
      </ul>
    </div>
  )
}

export default LapList