
import {Routes, Route} from 'react-router-dom'

import './App.css'

import Layout from '../Layout'
import HomePage from '../../pages/home/HomePage'
import Crash from '../../pages/crashGame/Crash'
import Double from '../../pages/doubleGame/Double'
import Jackrun from '../../pages/jackrunGame/Jackrun'
import Rollrun from '../../pages/rollrunGame/Rollrun'
import UserCab from '../../pages/userCab/UserCab'

function App() {


return (
		<>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<HomePage/>} />
					<Route path='/crash' element={<Crash/>} />
					<Route path='/double' element={<Double/>} />
					<Route path='/jackrun' element={<Jackrun />} />
					<Route path='/rollrun' element={<Rollrun />} />
					<Route path='/usercab' element={<UserCab />}/>
				</Route>
				
			</Routes>
		</>
	)
}

export default App
