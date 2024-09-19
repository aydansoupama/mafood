import AuthButton from "@/components/auth/AuthButton"
import { getUserSession } from "@/lib/auth"

export default async function Home() {
  const user = await getUserSession()
  return (
    <main>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}
