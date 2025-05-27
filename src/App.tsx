import { Route, Routes } from 'react-router-dom'
import { NotificationHandler } from './components/I/NotificationHandler'
import AuthLayout from './Layout/AuthLayout'  
import MainLayout from './Layout/MainLayout'
import Login from './page/Auth/Login'
import Otp from './page/Auth/Otp'
import Register from './page/Auth/Register'
import Home from './page/Home'

function App() {
	return (
		<section className='w-full overflow-x-hidden'> 
			<NotificationHandler />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/otp' element={<Otp />} />
				</Route>
			</Routes>
		</section>
	)
}

export default App
