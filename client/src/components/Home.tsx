'use client'

import { Callout, Card, List, ListItem, Table, TableBody, TableCell, TableRow } from "@tremor/react"
import { useQuery } from "@tanstack/react-query";

const Home = () => {

    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await fetch("/greetings").then((res) => {
            return res.json()
        }),
        queryKey: ["greetings"]
      });

      if (isLoading) return <Card>Cargando...</Card>;
      if (isError) return <Callout color="red" title="Error">Sorry There was an Error</Callout>;

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