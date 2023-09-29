import Image from 'next/image'
import LogoutButton from '@/components/LogoutButton'

export default function Home() {
  return (
    <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
      <h1 className="text-white text-center text-2xl font-bold uppercase">You have logged in!</h1>

      <Image src="/treasure.png"
        alt="treasure"
        width={200}
        height={200}
        className='w-1/4 object-contain'
      />
      <LogoutButton />
    </main>
  )
}
