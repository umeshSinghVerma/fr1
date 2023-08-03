'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function PageWrapper({ children }) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{opacity:0}}
                    animate = {{opacity:1}}
                    exit={{opacity:0}}
                    transition={{delay:0.1}}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}
