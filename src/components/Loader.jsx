import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-[120px]" />
      
      <div className="relative flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
          
          <motion.div
            className="absolute inset-0 border-4 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute inset-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full opacity-20"
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-8 overflow-hidden">
          <motion.h1
            className="text-white text-lg font-medium tracking-[0.2em] uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
            >...</motion.span>
          </motion.h1>
          
          <motion.div 
            className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2"
            initial={{ width: 0, x: -100 }}
            animate={{ width: "100%", x: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}