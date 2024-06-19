export const getGreetings = async () => {
    return await fetch(`/greetings`
    ).then((res) => res.json())
}

export const createGreetings = async () => {
    'use server'
    return await fetch('/greetings', {
        method: 'POST'
    })

}
