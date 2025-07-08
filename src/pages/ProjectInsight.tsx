import { motion } from 'framer-motion'
import { TrendingUp, Eye, Calendar, Tag, ArrowRight } from 'lucide-react'

const ProjectInsight = () => {
  const insights = [
    {
      id: 1,
      title: 'LayerZero深度分析：全链互操作性的未来',
      category: '深度研究',
      author: 'AlphaMoon研究院',
      date: '2024-01-15',
      readTime: '12分钟',
      views: '5.2K',
      tags: ['LayerZero', '跨链', '基础设施'],
      excerpt: '深入探讨LayerZero的技术架构、生态发展和潜在空投机会。本文从技术原理出发，分析其与其他跨链方案的差异...',
      featured: true
    },
    {
      id: 2,
      title: 'zkSync Era生态全景图：值得关注的早期项目',
      category: '生态分析',
      author: 'DeFi Hunter',
      date: '2024-01-12',
      readTime: '8分钟',
      views: '3.8K',
      tags: ['zkSync', 'Layer2', 'DeFi'],
      excerpt: '全面梳理zkSync Era生态中的优质项目，包括DEX、借贷、NFT等各个赛道的代表性项目...'
    },
    {
      id: 3,
      title: '2024年空投趋势预测：从数据看机会',
      category: '市场分析',
      author: 'AlphaMoon数据组',
      date: '2024-01-10',
      readTime: '15分钟',
      views: '8.1K',
      tags: ['市场分析', '趋势', '数据'],
      excerpt: '基于2023年空投数据，预测2024年的空投趋势和机会。包括项目类型、收益分布、参与策略等多维度分析...',
      featured: true
    }
  ]

  const categories = [
    { name: '全部', count: 156 },
    { name: '深度研究', count: 42 },
    { name: '生态分析', count: 38 },
    { name: '市场分析', count: 31 },
    { name: '教程指南', count: 45 }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-bg">
      {/* Page Header */}
      <section className="bg-dark-secondary/50 border-b border-neutral-gray/20 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              项目洞察
            </h1>
            <p className="text-xl text-neutral-gray">
              深度研究报告、市场分析、生态解读，助您把握投资先机
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Categories */}
              <div className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">分类</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full flex items-center justify-between text-left hover:text-brand-accent transition-colors">
                        <span className="text-neutral-gray">{category.name}</span>
                        <span className="text-sm text-neutral-gray/60">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">热门标签</h3>
                <div className="flex flex-wrap gap-2">
                  {['LayerZero', 'zkSync', 'Arbitrum', 'DeFi', 'NFT', 'GameFi', 'Layer2', '空投策略'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-bg text-sm text-neutral-gray rounded-lg hover:text-brand-accent hover:border-brand-accent cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/30 rounded-xl p-8 mb-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-brand-accent text-dark-bg px-3 py-1 rounded-full text-sm font-semibold">
                    精选
                  </span>
                  <span className="text-neutral-gray text-sm">深度研究</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-brand-accent transition-colors cursor-pointer">
                  LayerZero深度分析：全链互操作性的未来
                </h2>
                <p className="text-neutral-gray mb-4">
                  深入探讨LayerZero的技术架构、生态发展和潜在空投机会。本文从技术原理出发，分析其与其他跨链方案的差异，并展望其在全链生态中的重要地位...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-neutral-gray">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2024-01-15
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      5.2K阅读
                    </span>
                  </div>
                  <button className="flex items-center space-x-2 text-brand-accent hover:text-brand-accent/80 font-medium group">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>

              {/* Articles List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insights.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6 hover:border-brand-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-brand-accent">{article.category}</span>
                      <span className="text-sm text-neutral-gray">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-brand-accent transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-gray mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-dark-bg text-xs text-neutral-gray rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-3 text-neutral-gray">
                        <span>{article.author}</span>
                        <span>·</span>
                        <span>{article.date}</span>
                      </div>
                      <span className="flex items-center text-neutral-gray">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button className="inline-flex items-center space-x-2 bg-dark-secondary border border-neutral-gray/20 text-white px-6 py-3 rounded-lg hover:border-brand-accent hover:text-brand-accent transition-colors">
                  <span>加载更多</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectInsight