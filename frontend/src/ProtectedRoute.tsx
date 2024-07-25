import { useFrappeAuth } from 'frappe-react-sdk'
import { Link, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const { currentUser } = useFrappeAuth()

    if (currentUser) {
        return (
            <Outlet />
        )
    } else {
        return <div>
            Not Logged In
            <Link to='/login'>Login</Link>
        </div>
    }

}

export default ProtectedRoute