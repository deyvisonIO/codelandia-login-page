import { Illustration } from '@/components/Illustration'
import { Login } from '@/components/Login'

export default function Home() {
  return (
    <div className="h-screen overflow-y-hidden flex justify-stretch">
      <Illustration />
      <Login />
    </div>
  )
}
