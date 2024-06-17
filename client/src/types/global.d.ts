import Error from "next/error"

export {}

declare global {

    type Greeting = {
        id: number
        name: string
    }

}