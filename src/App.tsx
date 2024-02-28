import Card from "./components/card/Card.tsx";

function App() {

  return (
    <>
        <header className={`h-32 w-screen p-5 border-b-4 border-slate-700`}>
            <div className={`h-24 flex items-center justify-start w-full`}>
                <img src="/logoUnitins.jpg" alt="Logo da Unitins"/>
                <img className={`h-96`} src="/Estao%20Conecta%20Logo%20-%20Original%20with%20Transparent%20Background.svg" alt="Logo da Unitins"/>
            </div>
        </header>

        <main className={`p-5`}>
            <h2 className={`text-5xl font-medium`}>Cursos</h2>
            <Card
                titulo={`Titulo base`}
                descricao={`Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s`}
            />
        </main>
    </>
  )
}

export default App
