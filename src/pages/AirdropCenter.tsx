import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, TrendingUp, Clock, DollarSign, Users, ChevronDown } from 'lucide-react'

const AirdropCenter = () => {
  const [activeTab, setActiveTab] = useState('plaza')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('hot')

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'defi', name: 'DeFi' },
    { id: 'layer2', name: 'Layer 2' },
    { id: 'nft', name: 'NFT' },
    { id: 'gamefi', name: 'GameFi' },
    { id: 'infrastructure', name: '基础设施' }
  ]

  const airdrops = [
    {
      id: 1,
      name: 'LayerZero',
      logo: '🌐',
      category: 'infrastructure',
      description: '全链互操作性协议，支持跨链消息传递',
      estimatedValue: '$500-$5000',
      difficulty: 'Medium',
      endDate: '2024-03-15',
      participants: '125.3K',
      progress: 75,
      tasks: ['跨链桥接', 'LP提供', '社交任务'],
      isHot: true,
      isFeatured: true
    },
    // Add more airdrops...
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
              空投中心
            </h1>
            <p className="text-xl text-neutral-gray">
              发现最新、最有价值的空投机会，把握每一个财富风口
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 bg-dark-bg border-b border-neutral-gray/20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('plaza')}
              className={`py-4 font-medium transition-colors relative ${
                activeTab === 'plaza' 
                  ? 'text-brand-purple' 
                  : 'text-neutral-gray hover:text-white'
              }`}
            >
              空投广场
              {activeTab === 'plaza' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-purple"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`py-4 font-medium transition-colors relative ${
                activeTab === 'tutorials' 
                  ? 'text-brand-purple' 
                  : 'text-neutral-gray hover:text-white'
              }`}
            >
              精选教程
              {activeTab === 'tutorials' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-purple"></div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {activeTab === 'plaza' ? (
            <>
              {/* Filters and Search */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  {/* Search Bar */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-gray w-5 h-5" />
                      <input
                        type="text"
                        placeholder="搜索项目名称..."
                        className="w-full bg-dark-secondary border border-neutral-gray/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-gray focus:outline-none focus:border-brand-purple"
                      />
                    </div>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button className="flex items-center space-x-2 bg-dark-secondary border border-neutral-gray/20 rounded-lg px-4 py-3 text-white hover:border-brand-purple transition-colors">
                      <Filter className="w-5 h-5" />
                      <span>排序：热门</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/25'
                          : 'bg-dark-secondary text-neutral-gray hover:text-white border border-neutral-gray/20'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Airdrops Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {airdrops.map((airdrop, index) => (
                  <motion.div
                    key={airdrop.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6 hover:border-brand-purple/50 transition-all duration-300"
                  >
                    {/* Card content similar to homepage but more detailed */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">{airdrop.logo}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{airdrop.name}</h3>
                          <p className="text-sm text-neutral-gray">{airdrop.category}</p>
                        </div>
                      </div>
                      {airdrop.isHot && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HOT
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-neutral-gray mb-4">{airdrop.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-gray">进度</span>
                        <span className="text-brand-gold font-semibold">{airdrop.progress}%</span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-brand-purple to-brand-gold h-2 rounded-full"
                          style={{ width: `${airdrop.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-neutral-gray mb-1">预估价值</div>
                        <div className="text-brand-gold font-semibold">{airdrop.estimatedValue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-gray mb-1">参与人数</div>
                        <div className="text-white font-semibold">{airdrop.participants}</div>
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {airdrop.tasks.map((task, i) => (
                        <span key={i} className="text-xs bg-dark-bg px-2 py-1 rounded text-neutral-gray">
                          {task}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30 py-2 rounded-lg font-medium hover:bg-brand-purple hover:text-white hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300">
                      查看详情
                    </button>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Tutorials Tab Content */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tutorial cards would go here */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  LayerZero 完整交互教程
                </h3>
                <p className="text-neutral-gray mb-4">
                  详细介绍如何在LayerZero上完成所有交互任务，提高空投权重...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-gray">15分钟阅读</span>
                  <button className="text-brand-purple hover:text-brand-purple/80">
                    阅读更多 →
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AirdropCenter