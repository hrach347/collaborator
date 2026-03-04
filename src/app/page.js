'use client'
import { useEffect, useState } from "react";
import Title from "@/components/ui/Title";

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const response = await fetch("/api/users")
    const data = await response.json()
    setUsers(data.users)
  }, [])

  return (
    <div>
      <Title>Collaborate with anyone</Title>
      {users.map((user, i) =>
        <div key={i}>
          <img width="100" src={user.image} />
          <h1>{user.name} </h1>
          <a href={user.profile.html_url} target="_blank">{user.profile.html_url}</a>
          <p>{user.profile.company}</p>
        </div>
      )}
    </div>
  );
}
