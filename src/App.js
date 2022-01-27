import React from "react"
import "./style/master.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./components/pages/Landing"
import CreateReview from "./components/pages/CreateReview"
import SearchIt from "./components/pages/SearchIt"
import MostRecentReview from "./components/pages/MostRecentReview"
import NotFound from "./components/pages/NotFound"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-review" component={CreateReview} />
        <Route exact path="/most-recent-review" component={MostRecentReview} />
        <Route exact path="/search-it" component={SearchIt} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
