import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Button asChild className="mt-4">
        <Link href={route('logout')} method="post" as="button">Sair</Link>
      </Button>
    </>
  )
}