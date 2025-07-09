import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Rocket, BarChart3, Bell, Shield, Zap, ArrowRight } from 'lucide-react'

const ToolsIntro = () => {
  const features = [
    {
      icon: Rocket,
      title: '自动化交互',
      description: '一键执行复杂的空投任务，智能合约交互自动化'
    },
    {
      icon: BarChart3,
      title: '多钱包管理',
      description: '轻松管理上百个地址，批量操作效率倍增'
    },
    {
      icon: Bell,
      title: '智能提醒',
      description: '绝不错过任何关键快照，实时监控项目动态'
    },
    {
      icon: Shield,
      title: '防女巫策略',
      description: 'IP代理、随机延迟、指纹隔离，安全可靠'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              强大的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
                AlphaMoon工具套件
              </span>
            </h2>
            <p className="text-xl text-neutral-gray mb-8">
              专为空投猎人设计的专业工具，让复杂的任务变得简单高效。从批量钱包管理到自动化交互，全方位提升您的空投效率。
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-gray">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tools"
                className="inline-flex items-center justify-center space-x-2 bg-brand-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-purple/90 hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 group"
              >
                <span>了解更多</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/tools#download"
                className="inline-flex items-center justify-center space-x-2 border-2 border-neutral-gray text-white px-6 py-3 rounded-lg font-semibold hover:border-brand-purple hover:text-brand-purple transition-colors"
              >
                <Zap className="w-5 h-5" />
                <span>立即下载</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Tool Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Mock Tool UI */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-brand-purple/20 blur-3xl"></div>
              
              {/* Tool Window */}
              <div className="relative bg-dark-secondary border border-neutral-gray/20 rounded-xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-dark-bg/80 border-b border-neutral-gray/20 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-neutral-gray">AlphaMoon Tools v2.0</span>
                </div>
                
                {/* Tool Content */}
                <div className="p-6">
                  {/* Dashboard Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-dark-bg/50 rounded-lg p-4">
                      <div className="text-sm text-neutral-gray mb-1">总钱包数</div>
                      <div className="text-2xl font-bold text-brand-gold">156</div>
                    </div>
                    <div className="bg-dark-bg/50 rounded-lg p-4">
                      <div className="text-sm text-neutral-gray mb-1">今日收益</div>
                      <div className="text-2xl font-bold text-brand-gold">$2,847</div>
                    </div>
                  </div>
                  
                  {/* Task List Preview */}
                  <div className="space-y-3">
                    <div className="bg-dark-bg/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white">LayerZero Bridge Task</span>
                      </div>
                      <span className="text-xs text-green-400">运行中</span>
                    </div>
                    <div className="bg-dark-bg/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-white">zkSync Era Swap</span>
                      </div>
                      <span className="text-xs text-yellow-400">等待中</span>
                    </div>
                    <div className="bg-dark-bg/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neutral-gray rounded-full"></div>
                        <span className="text-sm text-white">Scroll Daily Check-in</span>
                      </div>
                      <span className="text-xs text-neutral-gray">已完成</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-brand-purple text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg shadow-brand-purple/25"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              效率提升 300%
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ToolsIntro