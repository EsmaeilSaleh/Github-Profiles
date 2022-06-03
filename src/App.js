import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
        return (
                <BrowserRouter>

                        <Header />
                        <Routes>
                        <Route to='/hi' element={<h2> hi</h2>} />
                        </Routes>
                        <Footer />
                </BrowserRouter>
                )
}

export default App
