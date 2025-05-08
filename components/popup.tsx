"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface JobPopupProps {
    link: string
    jobName: string
    linkUrl: string

    isOpen?: boolean
}

export default function JobPopup({ link, jobName, isOpen: initialIsOpen = true }: JobPopupProps) {
    const [isOpen, setIsOpen] = useState(initialIsOpen)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="absolute right-4 top-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                <div className="mb-6 mt-2 text-center">
                    <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Job Opportunity</h3>
                    <p className="mt-2 text-lg font-medium text-purple-600 dark:text-purple-300">{jobName}</p>
                </div>

                <div className="mt-6">
                    <Button
                        asChild
                        className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
                    >
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            Find Job
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
