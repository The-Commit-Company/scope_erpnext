import { FrappeProvider } from 'frappe-react-sdk'
// import Login from './pages/Login'
import { Outlet } from 'react-router-dom'


function App() {

	return (
		<div className="App">
			<FrappeProvider
				siteName={import.meta.env.VITE_SITE_NAME}
				socketPort={import.meta.env.VITE_SOCKET_PORT}
			>
				<Outlet />
			</FrappeProvider>
		</div>
	)
}

export default App
