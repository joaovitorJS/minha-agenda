import { FormEvent } from "react";
import { Link, useForm } from "@inertiajs/react";
import { LogIn } from "lucide-react";

import { AuthLayout } from "@/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputError from "@/components/input-error";

export default function Register() {
  const { post, reset, setData, data, errors, processing } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleRegisterUser = (event: FormEvent) => {
    event.preventDefault()

    post(route('register')), {
      onFinish: () => reset('password', 'password_confirmation')
    }
  }

  return (
    <AuthLayout>
      <main className="w-[55%] flex items-center justify-center">
        <form className="flex flex-col min-w-96 max-w-lg w-full items-center" onSubmit={handleRegisterUser}>
          <h2 className="font-title text-neutral-900 font-bold text-4xl">Crie sua conta</h2>

          <div className="w-full mt-10">
            <Label htmlFor="name">Nome</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.name} />
          </div>

          <div className="w-full mt-6">
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.email} />
          </div>

          <div className="w-full mt-6">
            <Label htmlFor="password">Senha</Label>
            <Input 
              type="password" 
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.password} />
          </div>

          <div className="w-full mt-6">
            <Label htmlFor="password_confirmation">Confirmar Senha</Label>
            <Input 
              type="password" 
              id="password_confirmation"
              name="password_confirmation"
              value={data.password_confirmation}  
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.password_confirmation} />
          </div>

          <Button className="w-1/2 mt-12" disabled={processing}><LogIn className="w-[18px] h-[18px]"/> Cadastrar</Button>
        </form>
      </main>

      <div className="w-[45%] bg-green-blue px-10 py-6 relative h-screen overflow-hidden">
        <img src="/assets/logo-ma.svg" alt="Logo Minha Agenda" className="h-16 w-auto" />

        <img src="/assets/person-flow.png" alt="Pessoa olhando para notas flutuantes" className="h-[200px] w-[300px] mx-auto mt-10"/>

        <div className="mt-12 flex flex-col items-center gap-2">
          <h2 className="text-white font-bold text-4xl font-title">Sua Agenda Online</h2>
          <p className="text-zinc-200 font-medium text-base">Se já possui uma conta, faça seu login.</p>

          <Button className="mt-4" asChild><Link href="/login">Fazer login</Link></Button>
        </div>

        <div className="absolute -bottom-[300px] -right-[150px] bg-circles h-[400px] w-[400px] bg-contain -rotate-45" />
        
      </div>
    </AuthLayout>
  )
}