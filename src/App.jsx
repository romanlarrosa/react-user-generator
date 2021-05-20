import "./App.css"
import { Route, Link } from "wouter"
import ListaUsuarios from "./components/ListaUsuarios"

function App() {
  return (
    <div className="App">
      <h1>Random users</h1>
      <div className="mt-2 flex justify-center">
        <Link className="Pill" to="/users/5">
          5
        </Link>
        <Link className="Pill" to="/users/10">
          10
        </Link>
        <Link className="Pill" to="/users/15">
          15
        </Link>
        <Link className="Pill" to="/users/20">
          20
        </Link>
      </div>
      <section className="App-content">
        <Route path="/users/:numUsuarios" component={ListaUsuarios} />
        {/* <ListaUsuarios numUsuarios="15" /> */}
      </section>
    </div>
  )
}

export default App