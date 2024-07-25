import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFrappeAuth } from "frappe-react-sdk"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const { currentUser, login, logout } = useFrappeAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate('/projects', {
                replace: true
            })
        }
    }, [currentUser])

    const handleSubmit = () => {
        login({
            username: email,
            password: password
        })
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {currentUser ? <div>Logged in as {currentUser}

                <Button onClick={logout}>Logout</Button>
            </div> :
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Hello</CardTitle>
                        <CardDescription>Login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="jane.doe@example.com" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button
                            onClick={handleSubmit}
                        >Login</Button>
                    </CardFooter>
                </Card>
            }
        </div>

    )
}

export default Login
