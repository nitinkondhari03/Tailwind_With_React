import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
  

  return (
    <>
  <div className="w-full min-h-screen px-6 py-3 flex flex-col gap-16 md:justify-between lg:px-16 lg:py-10">
    <Header/>
    <Body/>
    <Footer/>
  </div>
  </>
  )
}

export default App
