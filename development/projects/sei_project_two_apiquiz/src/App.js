import { BrowserRouter, Switch, Route } from 'react-router-dom'
import QuestionPage from './components/game/QuestionPage' 
import FinalPage from './components/common/FinalPage'
import LandingPage from './components/common/LandingPage'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <LandingPage />
          <Footer />
        </Route>
        <Route path="/game">
          <Header />
          <QuestionPage />
          <Footer />
        </Route>
        <Route path="/final">
          <Header />
          <FinalPage />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
