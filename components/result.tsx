"use client"

import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Search } from 'lucide-react';

import Link from "next/link"
import { CareerRecommendations } from "./description"



interface ResultDisplayProps {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    description: any
    link: string
    prediction: string
    onReset: () => void
}

export default function ResultDisplay({ prediction, description, onReset, link }: ResultDisplayProps) {
    const [showConfetti, setShowConfetti] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 3000)
        return () => clearTimeout(timer)
    }, [])



    // Confetti animation
    const renderConfetti = () => {
        if (!showConfetti) return null

        return Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 10 + 5
            const left = Math.random() * 100
            const animationDuration = Math.random() * 3 + 2
            const delay = Math.random() * 0.5

            return (
                <motion.div
                    key={i}
                    className="fixed z-50"
                    initial={{
                        top: -20,
                        left: `${left}%`,
                        opacity: 1,
                        rotate: 0,
                    }}
                    animate={{
                        top: "100vh",
                        rotate: 360,
                        opacity: 0,
                    }}
                    transition={{
                        duration: animationDuration,
                        delay: delay,
                        ease: "easeOut",
                    }}
                    style={{
                        width: size,
                        height: size,
                        borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                        background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                    }}
                />
            )
        })
    }

    return (
        <>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-center"
            >
                {renderConfetti()}

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`w-full bg-transparent border rounded-2xl bg-gradient-to-br } shadow-2xl p-16 text-center `}
                >
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-tight mb-8"
                    >
                        {prediction}
                    </motion.h1>

                    <motion.div className="flex justify-center gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                        <Button
                            onClick={onReset}
                            variant="outline"
                            className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30 hover:text-white"
                        >
                            <RefreshCw className="h-4 w-4 mr-2" /> Try Again
                        </Button>
                        <Link href={link}>
                            <Button

                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30 hover:text-white"
                            >
                                <Search className="h-4 w-4 mr-2" /> Find Job
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

            </motion.div>

            <motion.div className="mt-10">
                {
                    !description ? (
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <Loader2 className="h-10 w-10 animate-spin" />
                            Processing...
                        </div>
                    ) : (
                        <CareerRecommendations description={description} />
                    )
                }


            </motion.div>


            {/* <JobPopup link={link} jobName={prediction}
                linkUrl="https://example.com/job-application"
            /> */}
        </>

    )
}
