"use client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Button from "@/components/ui/Button"
import Image from "@/components/ui/Image"

export default function SignIn() {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated") router.replace("/dashboard")
    }, [status, router])

    if (status === "loading") return <div>Loading...</div>

    if (status === "unauthenticated") {
        return (
            <Button onClick={() => signIn("github", { redirect: false })}>
                <Image width="25" height="25" src="/images/icon-github.png" />
                Sign in with Github
            </Button>
        )
    }
}
