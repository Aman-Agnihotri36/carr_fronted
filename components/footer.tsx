"use client"

import { motion } from "framer-motion"


export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 footer border-t w-[75%] m-auto py-12 px-4 sm:px-6 lg:px-8  "
        >
            <div className="max-w-4xl   mx-auto">


                {/* Contributors */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="space-y-4 "
                >
                    <h3 className="text-2xl font-bold text-white">Contributors</h3>
                    <div className="flex gap-10 justify-between flex-wrap">
                        <div className="space-y-1">
                            <p className="font-semibold text-green-400">Agam Patel</p>
                            <p className="text-gray-600 text-sm">Roll No - 0205CC221015</p>

                        </div>

                        <div className="space-y-1">
                            <p className="font-semibold text-green-400">Aradhya Patel</p>
                            <p className="text-gray-600 text-sm">Roll No - 0205CC221015</p>

                        </div>

                        <div className="space-y-1">
                            <p className="font-semibold text-green-400">Aman Agnihotri</p>
                            <p className="text-gray-600 text-sm">Roll No - 0205CC221019</p>

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

        </motion.footer >
    )
}
