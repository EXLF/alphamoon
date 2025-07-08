import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Shield } from 'lucide-react'

const CommunitySection = () => {
  const values = [
    {
      icon: Target,
      title: '精准定位',
      description: '专注于高质量空投项目，过滤噪音，直击价值核心'
    },
    {
      icon: Users,
      title: '社区驱动',
      description: '汇聚全球空投猎人，共享信息，互助成长'
    },
    {
      icon: Lightbulb,
      title: '创新引领',
      description: '持续研发前沿工具，让空投参与更简单高效'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '严格的项目审核机制，保障用户资产安全'
    }
  ]

  return (
    <section className="py-20 bg-dark-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            关于AlphaMoon社区
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            我们致力于打造Web3空投领域最专业、最活跃的社区，为每一位成员创造价值
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-brand-accent/10 to-yellow-400/10 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">我们的使命</h3>
            <p className="text-lg text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              AlphaMoon社区的使命是降低Web3参与门槛，通过专业的信息整合、智能的工具支持和活跃的社区氛围，
              帮助每一位用户在空投生态中找到属于自己的机会。我们相信，Web3的未来属于每一个积极参与的建设者。
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-bg border border-neutral-gray/20 rounded-xl p-6 h-full hover:border-brand-accent/50 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-gray">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center space-x-8 bg-dark-bg border border-neutral-gray/20 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent">24/7</div>
              <div className="text-sm text-neutral-gray">在线支持</div>
            </div>
            <div className="w-px h-10 bg-neutral-gray/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent">50+</div>
              <div className="text-sm text-neutral-gray">合作伙伴</div>
            </div>
            <div className="w-px h-10 bg-neutral-gray/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent">100%</div>
              <div className="text-sm text-neutral-gray">开源透明</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection