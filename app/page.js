'use client'
import { redirect } from "next/navigation"
import { useEffect } from "react"

const Page = () => {
    useEffect(() => {
        redirect('/home')
    }, [])
}

export default Page