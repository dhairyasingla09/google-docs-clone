import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  //first redirect route is to redirect to a brand new document using unique id 
  //second redirect route is to match path of documents to the any id
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Redirect to={`/documents/${uuidV4()}`} />  
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
