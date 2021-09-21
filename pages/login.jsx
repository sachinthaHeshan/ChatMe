import Link from 'next/link'

export default function Login() {
    return (
        <div className="bg-blue-100 h-screen">
            <div className="flex items-center justify-between bg-gray-900 h-16">
                <h1 className="text-white font-bold text-lg p-6">
                    Chat<span className="text-blue-500">Me</span>
                </h1>
                <div className="text-white p-6">
                    <Link  href="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    )
}
