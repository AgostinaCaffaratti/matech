

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import OurServices from './pages/OurServices'
import AboutUs from './pages/aboutUs'
import ContactUs from './pages/ContactUs'
import ErrorPage from './pages/Error'

import './style.scss'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/our-services' component={OurServices} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
