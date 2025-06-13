
import { motion } from "framer-motion"

export function BootScreen({ onBoot }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={onBoot}
      className="w-full h-screen bg-black text-white flex items-center justify-center cursor-pointer px-4"
    >
      <div className="border border-gray-600 p-6 max-w-md text-xs text-center text-gray-300 bg-black rounded shadow-md">
        <div className="text-white font-bold text-sm mb-2 tracking-wider">⚠️ HEALTH & SAFETY WARNING</div>
        <p className="mb-1">Before playing, read the Operations Manual for important information about your health and safety.</p>
        <p className="mb-3">Also online at: <span className="underline">www.modgpt.ai/safety</span></p>
        <div className="text-sm text-gray-500 mt-4">Press A or click to continue</div>
      </div>
    </motion.div>
  )
}
