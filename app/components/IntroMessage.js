import { motion } from 'framer-motion';

const IntroMessage = () => {
  const message = "Welcome to my portfolio";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center h-screen"
    >
      <motion.p className="text-6xl bg-gradient-to-r from-gray-100 via-gray-300 to-black text-transparent bg-clip-text text-center font-bold">{message.split('').map((char, index) => (<motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.05, delay: index * 0.05 }} className="text-transparent bg-clip-text font-bold">{char}</motion.span>))}</motion.p>
    </motion.div>
  );
};

export default IntroMessage;
