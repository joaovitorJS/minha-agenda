import { FormEvent, useEffect } from "react";

import { Link, useForm, usePage } from "@inertiajs/react";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

import { AuthLayout } from "@/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputError from "@/components/input-error";

export default function Login() {
  const { messages } = usePage().props
  const { post, reset, setData, data, errors, processing } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (messages?.success) {
      toast.success(messages.success)
    }
  }, [])


  const login = (event: FormEvent) => {
    event.preventDefault()

    post(route('login')), {
      onFinish: () => reset('password')
    }
  }

  return (
    <AuthLayout>
      <div className="w-[45%] bg-green-blue px-10 py-6 relative h-screen">
        <img src="/assets/logo-ma.svg" alt="Logo Minha Agenda" className="h-16 w-auto" />

        <img src="/assets/person-check-calendar.png" alt="Pessoa olhando para calendário" className="h-[300px] w-[300px] mx-auto mt-10"/>

        <div className="mt-12 flex flex-col items-center gap-2">
          <h2 className="text-white font-bold text-4xl font-title">Sua Agenda Online</h2>
          <p className="text-zinc-200 font-medium text-base">Crie agendamentos online e deixe o papel de lado.</p>

          <Button className="mt-4" asChild><Link href="/register">Crie sua conta</Link></Button>
        </div>

        <div className="absolute -bottom-[300px] -left-[150px] bg-circles h-[400px] w-[400px] bg-contain" />
        
      </div>

      <main className="w-[55%] flex items-center justify-center">
        <form className="flex flex-col min-w-96 max-w-lg w-full items-center" onSubmit={login}>
          <h2 className="font-title text-neutral-900 font-bold text-4xl">Faça seu login</h2>

          <div className="w-full mt-10 flex flex-col gap-y-1.5">
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

          <div className="w-full mt-6 flex flex-col gap-y-1.5">
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

          <Link href="/" className="text-neutral-400 text-sm underline self-start mt-2">Esqueceu sua senha?</Link>

          <Button className="w-1/2 mt-12" disabled={processing}><LogIn className="w-[18px] h-[18px]"/> Entrar</Button>
        </form>
      </main>
    </AuthLayout>
  )
}