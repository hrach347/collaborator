"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Title from "@/components/ui/Title"

export default function Projects() {
    const { data, status } = useSession()
    const [projects, setProjects] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") router.replace("/sign-in")
        else setProjects(data?.user?.projects)
    }, [status, router])

    if (status === "loading") return <div>Loading...</div>

    if (status === "authenticated") {
        const addProject = async () => {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ project: { github: "www.github.com" } })
            })
            const data = await response.json()
            console.log(data)
            setProjects([...projects, data.project])
        }


        return (
            <div>
                <Title>PROJECTS</Title>
                {projects?.map((project,i) =>
                    <div key={i}>
                        <h1>{project.github}</h1>
                    </div>
                )}
                <button onClick={addProject}>POST</button>
            </div>
        )
    }
}
