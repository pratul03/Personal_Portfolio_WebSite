"use client";
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Environment } from "@react-three/drei";

const RenderModels = ({ children, className }) => {
    return (
        <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='dawn' />

        </Canvas>
    )
}

export default RenderModels
