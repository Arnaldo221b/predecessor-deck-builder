import { Routes, Route } from 'react-router-dom'
import PredHome from './pages/home'
import BuilderPage from './pages/builder'

const PredAppRoutes = () => {
    return (<>
        <Routes>
            <Route path='/' element={<PredHome/>} />
            <Route path='/builder' element={<BuilderPage/>} />
        </Routes>
    </>)
}

export default PredAppRoutes