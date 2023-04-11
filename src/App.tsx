import '../src/styles/global.scss';
import '../src/styles/font-family.scss';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ClocksPage from './pages';

function App() {
    return (
        <Routes>
            <Route path='/' element={<ClocksPage/>}/>
            <Route path='/404' element={<NotFoundPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;
