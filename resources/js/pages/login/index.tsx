import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <div className="w-[45%] bg-green-blue px-10 py-6 relative h-screen">
        <img src="/assets/logo-ma.svg" alt="Logo Minha Agenda" className="h-16 w-auto" />

        <img src="/assets/person-check-calendar.png" alt="Pessoa olhando para calendário" className="h-[300px] w-[300px] mx-auto mt-10"/>

        <div className="mt-12 flex flex-col items-center gap-2">
          <h2 className="text-white font-bold text-4xl font-title">Sua Agenda Online</h2>
          <p className="text-zinc-200 font-medium text-base">Crie agendamentos online e deixe o papel de lado.</p>

          <Button className="mt-4">Crie sua conta</Button>
        </div>

        <div className="absolute -bottom-[300px] -left-[150px] bg-circles h-[400px] w-[400px] bg-contain" />
        
      </div>

      <main className="w-[55%]">

      </main>
    </AuthLayout>
  )
}