"use client"
import { useStore } from "@/store/useStore";


function Two() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} around here...</h1>
  }
export default Two;