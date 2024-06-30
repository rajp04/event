import { useNavigate } from "react-router-dom"


function Header() {

    const navigate = useNavigate()

    const data = localStorage.getItem('id');

    const handleLogout = () => {
        localStorage.removeItem('id');
        navigate('/login')
    }

    return (
        <div className="flex justify-between items-center bg-blue-500 text-white px-10 py-2">
            <div>
                <h1 className="text-2xl cursor-pointer" onClick={() => navigate('/')}>Demo</h1>
            </div>
            {data ?
                <>
                    <div className="text-2xl flex items-center space-x-5 cursor-pointer " >
                        <p className="hover:text-gray-200" onClick={() => navigate('/')}>Home</p>
                        <p className="hover:text-gray-200" onClick={() => navigate('/event')}>New Event</p>
                        <p className="hover:text-gray-200" onClick={handleLogout}>Logout</p>
                    </div>
                </> :
                <div className="flex items-center space-x-5">
                    <h1 className="text-2xl cursor-pointer hover:text-gray-200" onClick={() => navigate('/login')}>Login</h1>
                    <h1 className="text-2xl cursor-pointer hover:text-gray-200" onClick={() => navigate('/register')}>Register</h1>
                </div>
            }
        </div>
    )
}

export default Header