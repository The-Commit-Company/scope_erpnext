import { useState } from 'react'
import './App.css'
import { FrappeProvider, useFrappeGetDocList } from 'frappe-react-sdk'
function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<FrappeProvider
				siteName={import.meta.env.VITE_SITE_NAME}
				socketPort={import.meta.env.VITE_SOCKET_PORT}
			>
				<div>
					<TestComponent />
					<h1>Vite + React + Frappe</h1>
					<div className="card">
						<button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</button>
						<p>
							Edit <code>src/App.jsx</code> and save to test HMR
						</p>
					</div>
					<p className="read-the-docs">
						Click on the Vite and React logos to learn more
					</p>
				</div>
			</FrappeProvider>
		</div>
	)
}

const TestComponent = () => {
	const { data } = useFrappeGetDocList('User')

	return <div></div>
}

export default App
