import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div className="rounded-full border border-[#C30010] h-[200px] w-[200px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#D1001F] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#DE0A26] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#F01E2C] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#FF2C2C] h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;