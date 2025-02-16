import Globe from "./components/Globe";
import Button from "./components/Button"
import Menu from "./components/Menu";


function App() {
  
  return (
    <div className="min-h-screen bg-[#020C1B]  text-white" >
    
      <div className="absolute z-50">

      <Menu />
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start mt-32 justify-between absolute z-40 w-full px-12">
          <h1 className="text-9xl font-light w-full text-center font-Staatliches tracking-widest">GaiaGuard</h1>
        <p className="font-orbitron tracking-widest w-full text-center font-extralight ">
  Un Œil sur l&apos;Avenir de la Terre
</p>

        </div>
        

        <Globe />
        <Button />
      </div>
    </div>
  );
}

export default App;
