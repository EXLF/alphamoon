import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-purple/5"></div>
      </div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-4 py-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-brand-purple" />
            <span className="text-sm text-brand-purple font-medium">Web3空投领域的领航者</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AlphaMoon
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
              开启你的Web3 Alpha之旅
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-gray mb-10 max-w-3xl mx-auto">
            专业的空投信息聚合平台，强大的自动化工具套件
            <br />
            让您在Web3世界中抢占先机，收益最大化
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/tools"
                className="inline-flex items-center space-x-2 bg-brand-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-purple/90 transition-all duration-300 shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 hover:scale-105"
              >
                <span>体验AlphaMoon工具</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/airdrop-center"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-neutral-gray text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-brand-purple hover:text-brand-purple transition-colors"
              >
                <span>探索热门空投</span>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-gold mb-2">10K+</h3>
              <p className="text-neutral-gray">活跃用户</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-gold mb-2">500+</h3>
              <p className="text-neutral-gray">空投项目</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-brand-gold mb-2">$1M+</h3>
              <p className="text-neutral-gray">用户总收益</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neutral-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-gray rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection