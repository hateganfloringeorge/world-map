import MapChart from './MapChart'

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-bold my-5 text-teal-800 text-center">Hello World!</h1>
      <div className="w-4/5 border-double border-2 border-black">
        <MapChart />
      </div>
    </div>
  )
}

export default App
