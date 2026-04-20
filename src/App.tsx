import {Route, Routes} from 'react-router';
import Layout from './Layout';
import { Quests, Skills, Stats } from './container';

const App = () => {
  return (
    <Routes>
      <Route element = {<Layout/>} >
        <Route index element = {<Stats/>}/>

        <Route path='stats' element = {<Stats/>}/>
        <Route path='skills' element = {<Skills/>}/>
        <Route path='quests' element = {<Quests/>}/>
      </Route>
    </Routes>
  ) 
}

export default App