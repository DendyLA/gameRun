
import {Routes, Route} from 'react-router-dom'

import './App.css'

import Layout from '../Layout'
import HomePage from '../../pages/home/HomePage'
import Crash from '../../pages/crashGame/Crash'

function App() {


return (
		<>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<HomePage/>} />
					<Route path='/crash' element={<Crash/>} />
				</Route>
				
			</Routes>
		</>
	)
}

export default App
