"use client"

import { useEffect, useState } from "react"

const Admin = () => {
    const [DynamicAdmin, setDynamicAdmin] = useState(<p>Loading...</p>)
    useEffect(() => {
        (async () => {
            const HydraAdmin = (await import("@api-platform/admin")).HydraAdmin
            setDynamicAdmin(<HydraAdmin entrypoint={window.origin}></HydraAdmin>)
        })()
    }, [])
    return DynamicAdmin
}
export default Admin