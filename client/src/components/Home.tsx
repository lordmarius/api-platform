'use client'

import { Callout, Card, Table, TableBody, TableCell, TableRow } from "@tremor/react"
import { useQuery } from "@tanstack/react-query";
import { getGreetings } from "@/actions/greetings";

const Home = () => {

    const { data, isLoading, isError, error } = useQuery({
        // queryFn: () => fetch("/greetings").then((res) => res.json()),
        queryFn: () => getGreetings(),
        queryKey: ["greetings"]
    })

    if (isLoading) return <Card>Cargando...</Card>
    if (isError) {
        console.error(error)
        return <Callout color="red" title="Error">Sorry There was an Error: { error.toString() }</Callout>
    }
    const greetings = data['hydra:member']

    return (
        <>
            <Card className="w-full md:w-6/12">
                <Table>
                    <TableBody>
                    { greetings.map((greeting:Greeting) => {
                        return <TableRow key={ greeting.id }>
                            <TableCell className="w-0">{ greeting.id }</TableCell>
                            <TableCell>{ greeting.name }</TableCell>
                        </TableRow>
                    })}
                    </TableBody>
                </Table>
            </Card>
        </>
    )
}

export default Home