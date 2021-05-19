import "./App.css"
import ListaUsuarios from "./components/ListaUsuarios"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListaUsuarios numUsuarios="3" />
      </section>
    </div>
  )
}

export default App
