import Image from 'next/image'
import RegisterForm from '@/components/RegisterForm'

export default function Register() {
  return (
    <main className="flex h-screen">
      <div className="w-1/3 flex justify-center items-center">
        <RegisterForm />
      </div>
      <div className="w-2/3 bg-[#0f0f16] flex items-center justify-center">
        <Image
          className="w-1/4 object-contain"
          src="/login.png"
          width={500}
          height={500}
          alt="Login Image"

        />
      </div>
    </main>
  )
}