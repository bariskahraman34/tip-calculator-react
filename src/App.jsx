import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"

function App() {

  return (
    <>
      <img className="splitter" src="/icons/splitter.svg" alt=""/>
      <div className="container">
        <LeftSide />
        <RightSide/>
      </div>
    </>
  )
}

export default App
