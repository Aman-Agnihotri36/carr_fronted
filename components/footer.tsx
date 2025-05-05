"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-purple-100 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-200"
        >
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* About the Project */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-purple-800">How It Works</h3>
                        <p className="text-gray-700">
                            The Career Path Predictor uses machine learning to analyze your academic performance, skills, and
                            interests to recommend the most suitable tech career path for you.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-700 font-medium">Our prediction model considers:</p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Academic performance in key technical subjects</li>
                                <li>Technical skills and proficiency levels</li>
                                <li>Personal interests and career preferences</li>
                                <li>Work habits and learning style</li>
                            </ul>
                        </div>
                        <p className="text-gray-700">
                            The model was trained on data from successful professionals across various tech fields to provide accurate
                            and personalized career recommendations.
                        </p>
                    </motion.div>

                    {/* Contributors */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-purple-800">Contributors</h3>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="font-semibold text-gray-800">Agam Patel</p>
                                <p className="text-gray-600 text-sm">Machine Learning Engineer</p>
                                <p className="text-gray-700">Developed the prediction algorithm and model training pipeline</p>
                                <div className="flex space-x-2 mt-1">
                                    <Link href="https://github.com/Agam-Patel-DS/" className="text-purple-600 hover:text-purple-800">
                                        <Github className="h-4 w-4" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/iagampatel/" className="text-purple-600 hover:text-purple-800">
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="font-semibold text-gray-800">Aradhya Patel</p>
                                <p className="text-gray-600 text-sm">Frontend Developer</p>
                                <p className="text-gray-700">Designed and implemented the user interface and experience</p>
                                <div className="flex space-x-2 mt-1">

                                    <Link href="https://www.linkedin.com/in/aradhy-patel-b8b460302/" className="text-purple-600 hover:text-purple-800">
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="font-semibold text-gray-800">Aman Agnihotri</p>
                                <p className="text-gray-600 text-sm">Frontend & Backend Developer</p>
                                <p className="text-gray-700">Build and Connect fronted with backend</p>
                                <div className="flex space-x-2 mt-1">
                                    <Link href="https://github.com/Aman-Agnihotri36/" className="text-purple-600 hover:text-purple-800">
                                        <Github className="h-4 w-4" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/aman-agnihotri-a10292280/" className="text-purple-600 hover:text-purple-800">
                                        <Linkedin className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 pt-6 border-t border-purple-200 text-center"
                >
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Career Path Predictor. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">Made with ❤️ for aspiring tech professionals</p>
                </motion.div>
            </div>
        </motion.footer>
    )
}
