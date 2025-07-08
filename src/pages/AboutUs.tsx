import { motion } from 'framer-motion'
import { Target, Users, Rocket, Heart, Award, Globe } from 'lucide-react'

const AboutUs = () => {
  const milestones = [
    {
      year: '2023',
      title: '项目启动',
      description: 'AlphaMoon社区正式成立，开始专注于Web3空投领域'
    },
    {
      year: '2023.Q2',
      title: '工具发布',
      description: '推出第一版AlphaMoon工具，获得社区广泛好评'
    },
    {
      year: '2023.Q3',
      title: '快速增长',
      description: '用户数突破10,000，成为空投领域知名品牌'
    },
    {
      year: '2024',
      title: '生态拓展',
      description: '与多个顶级项目达成合作，构建完整生态体系'
    }
  ]

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: '创始人 & CEO',
      avatar: '👨‍💼',
      description: '连续创业者，深耕区块链行业5年'
    },
    {
      name: 'Sarah Wang',
      role: '技术负责人',
      avatar: '👩‍💻',
      description: '前Google工程师，全栈开发专家'
    },
    {
      name: 'Mike Liu',
      role: '产品负责人',
      avatar: '👨‍🎨',
      description: 'Web3产品设计先驱，用户体验专家'
    },
    {
      name: 'Lisa Zhang',
      role: '运营负责人',
      avatar: '👩‍💼',
      description: '社区运营专家，服务超过50个Web3项目'
    }
  ]

  const values = [
    {
      icon: Target,
      title: '用户至上',
      description: '始终将用户需求放在首位，不断优化产品体验'
    },
    {
      icon: Heart,
      title: '诚信透明',
      description: '坚持开源透明，与社区共同成长'
    },
    {
      icon: Rocket,
      title: '创新驱动',
      description: '持续创新，引领行业发展方向'
    },
    {
      icon: Users,
      title: '合作共赢',
      description: '与合作伙伴携手，共建Web3生态'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300">
                AlphaMoon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray">
              致力于成为Web3空投领域的领导者，为全球用户提供最专业的服务
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">我们的故事</h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  AlphaMoon诞生于2023年初，当时Web3空投生态正处于快速发展期，但信息分散、工具缺乏、参与门槛高等问题困扰着众多用户。
                </p>
                <p>
                  我们的创始团队都是资深的区块链从业者和空投参与者，深知其中的痛点。于是，我们决定创建一个专业的平台，帮助用户更高效地参与空投项目。
                </p>
                <p>
                  经过近一年的发展，AlphaMoon已经成为空投领域的知名品牌，服务超过10,000名用户，帮助他们获得了可观的收益。但这只是开始，我们的目标是让每个人都能轻松参与Web3建设，共享生态发展红利。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-dark-bg border border-neutral-gray/20 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-accent mb-2">10K+</div>
                    <div className="text-neutral-gray">活跃用户</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-accent mb-2">500+</div>
                    <div className="text-neutral-gray">空投项目</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-accent mb-2">50+</div>
                    <div className="text-neutral-gray">合作伙伴</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-accent mb-2">$1M+</div>
                    <div className="text-neutral-gray">用户收益</div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/30 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white">我们的使命</h3>
              </div>
              <p className="text-neutral-gray">
                降低Web3参与门槛，通过专业的信息整合、智能的工具支持和活跃的社区氛围，帮助每一位用户在空投生态中找到属于自己的机会。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-xl p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">我们的愿景</h3>
              </div>
              <p className="text-neutral-gray">
                成为全球领先的Web3空投信息与工具平台，让每个人都能平等地参与Web3生态建设，共享区块链技术带来的价值。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">核心价值观</h2>
            <p className="text-xl text-neutral-gray">指引我们前进的核心理念</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-bg border border-neutral-gray/20 rounded-xl p-6 text-center hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-neutral-gray text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">核心团队</h2>
            <p className="text-xl text-neutral-gray">专业、热情、富有创造力的团队</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-brand-accent mb-2">{member.role}</p>
                <p className="text-sm text-neutral-gray">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">发展历程</h2>
            <p className="text-xl text-neutral-gray">见证AlphaMoon的成长之路</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                  <h3 className="text-2xl font-bold text-brand-accent mb-2">{milestone.title}</h3>
                  <p className="text-neutral-gray">{milestone.description}</p>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-brand-accent rounded-full"></div>
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-neutral-gray/30"></div>
                  )}
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'order-2 pl-8' : 'text-right pr-8'}`}>
                  <p className="text-xl font-semibold text-white">{milestone.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              与我们一起，开启Web3新篇章
            </h2>
            <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
              无论您是用户、合作伙伴还是投资者，我们都期待与您建立联系
            </p>
            <button className="inline-flex items-center space-x-2 bg-brand-accent text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-accent/90 transition-colors">
              <span>联系我们</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs