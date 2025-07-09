import { motion } from 'framer-motion'
import { Download, Check, Zap, Shield, BarChart3, Bell, Cpu, Globe } from 'lucide-react'

const AlphaMoonTools = () => {
  const features = [
    {
      icon: Zap,
      title: '批量钱包管理',
      description: '轻松导入、创建、分组管理上百个钱包地址，支持批量操作和智能分组'
    },
    {
      icon: Cpu,
      title: '自动化任务流',
      description: '可视化任务流编辑器，自定义交互流程（Swap → Add LP → Stake），一键执行复杂任务'
    },
    {
      icon: Shield,
      title: '智能调度与防女巫',
      description: 'IP代理轮换、随机延迟设置、浏览器指纹隔离，最大程度保护账户安全'
    },
    {
      icon: BarChart3,
      title: '实时数据追踪',
      description: '钱包余额监控、Gas费用统计、收益分析，让每一笔操作都清晰可见'
    },
    {
      icon: Bell,
      title: '智能提醒系统',
      description: '项目快照提醒、任务完成通知、异常警报，不错过任何重要时刻'
    },
    {
      icon: Globe,
      title: '多链支持',
      description: '支持Ethereum、BSC、Polygon、Arbitrum等20+主流公链，一站式管理'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'CryptoHunter',
      avatar: '🦊',
      role: '专业空投猎人',
      content: 'AlphaMoon工具彻底改变了我的工作方式，现在管理200+钱包轻轻松松，收益提升了至少3倍！',
      twitter: '@cryptohunter'
    },
    {
      id: 2,
      name: 'DeFi Farmer',
      avatar: '🌾',
      role: 'DeFi玩家',
      content: '自动化任务流功能太强大了，复杂的DeFi交互现在只需要点击一下按钮，节省了大量时间。',
      twitter: '@defifarmer'
    },
    {
      id: 3,
      name: 'Web3 Explorer',
      avatar: '🚀',
      role: '早期用户',
      content: '防女巫系统做得很完善，使用了3个月从来没有被标记过，而且收益追踪功能让我对每个项目的投入产出一目了然。',
      twitter: '@web3explorer'
    }
  ]

  const pricingPlans = [
    {
      name: '免费版',
      price: '0',
      features: [
        '管理最多10个钱包',
        '基础任务自动化',
        '单链支持',
        '社区支持'
      ],
      cta: '免费使用',
      popular: false
    },
    {
      name: '专业版',
      price: '49',
      features: [
        '管理最多100个钱包',
        '高级任务自动化',
        '多链支持',
        'IP代理功能',
        '优先技术支持',
        '数据导出功能'
      ],
      cta: '立即购买',
      popular: true
    },
    {
      name: '团队版',
      price: '199',
      features: [
        '无限钱包管理',
        '完整功能访问',
        '团队协作功能',
        'API访问权限',
        '专属客户经理',
        '定制化服务'
      ],
      cta: '联系我们',
      popular: false
    }
  ]

  const faqs = [
    {
      question: '工具是否安全？我的私钥会被泄露吗？',
      answer: '所有私钥都采用AES-256加密存储在本地，永远不会上传到服务器。我们的代码完全开源，欢迎审查。'
    },
    {
      question: '支持哪些区块链网络？',
      answer: '目前支持Ethereum、BSC、Polygon、Arbitrum、Optimism、Avalanche等20+主流公链，并持续增加中。'
    },
    {
      question: '可以自定义任务流程吗？',
      answer: '是的，我们提供可视化的任务流编辑器，您可以自由组合各种DeFi操作，创建属于自己的自动化流程。'
    },
    {
      question: '有使用教程吗？',
      answer: '我们提供详细的视频教程和文档，购买专业版还可以获得1对1的入门指导服务。'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-purple/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AlphaMoon
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">
                为专业空投猎人打造的终极武器库
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray mb-8">
              告别繁琐，拥抱高效，最大化你的空投收益
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-brand-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/25 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>免费下载 Windows 版</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-neutral-gray text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-brand-purple hover:text-brand-purple transition-colors"
              >
                <span>获取 macOS 版</span>
              </motion.button>
            </div>

            {/* Video/Screenshot Preview */}
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-dark-secondary border border-neutral-gray/20 rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-dark-bg to-dark-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-neutral-gray">产品演示视频</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                限时优惠 30% OFF
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              功能详述
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              每一个功能都经过精心设计，只为让您的空投之旅更加高效
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Feature Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-brand-purple" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-neutral-gray mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                      <span className="text-white">一键批量操作，效率提升10倍</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                      <span className="text-white">智能风控系统，安全有保障</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                      <span className="text-white">实时数据同步，掌握每个细节</span>
                    </li>
                  </ul>
                </div>

                {/* Feature Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-dark-bg border border-neutral-gray/20 rounded-xl p-8">
                    <div className="aspect-video bg-gradient-to-br from-dark-secondary to-dark-bg rounded-lg flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-brand-purple/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              用户评价
            </h2>
            <p className="text-xl text-neutral-gray">
              来自社区的真实反馈
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-gray">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-gray mb-4">"{testimonial.content}"</p>
                <a href="#" className="text-brand-purple text-sm hover:text-brand-purple/80">
                  {testimonial.twitter}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              定价方案
            </h2>
            <p className="text-xl text-neutral-gray">
              选择适合您的方案，开启高效空投之旅
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-dark-bg border ${
                  plan.popular ? 'border-brand-purple' : 'border-neutral-gray/20'
                } rounded-xl p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    最受欢迎
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-gold">${plan.price}</span>
                  <span className="text-neutral-gray">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-brand-purple flex-shrink-0" />
                      <span className="text-neutral-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/25'
                    : 'bg-transparent border border-neutral-gray text-white hover:border-brand-purple hover:text-brand-purple'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              常见问题
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-neutral-gray">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 bg-gradient-to-r from-brand-purple/10 to-brand-gold/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              准备好提升您的空投效率了吗？
            </h2>
            <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
              立即下载AlphaMoon工具，加入数千名专业空投猎人的行列
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-brand-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/25 transition-all">
                <Download className="w-5 h-5" />
                <span>Windows版下载</span>
              </button>
              <button className="inline-flex items-center space-x-2 bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                <span>macOS版下载</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AlphaMoonTools