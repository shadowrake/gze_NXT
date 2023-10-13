"use client"

import { Toaster } from "sonner"

export default function Providers({childern}: {childern: React.ReactNode}){
    return (
        <>
            {childern}
            <Toaster position="top-right" richColors expand closeButton></Toaster>
        </>
    )
}