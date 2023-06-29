
import './App.scss';
import  {Home}  from './page/home/home'
import  {Galery}  from './page/galery/galery'
import  {Information}  from './page/information/information'
import { MainLayout } from './components/layouts/mainlayout'
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    // <CircularProgress color="secondary" >

    <div className='style'>
    <MainLayout>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/galery' element={<Galery/>}/>
            <Route path='/information' element={<Information/>}/> 
          </Routes>
      </BrowserRouter>
    </MainLayout>
    </div>

    // </CircularProgress >
  );
}

export default App;
