import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react'

interface AirdropCard {
  id: number
  name: string
  logo: string
  category: string
  estimatedValue: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  endDate: string
  participants: string
  isHot: boolean
}

const FeaturedAirdrops = () => {
  // Mock data - replace with actual data from API
  const airdrops: AirdropCard[] = [
    {
      id: 1,
      name: 'LayerZero',
      logo: '🌐',
      category: '跨链协议',
      estimatedValue: '$500-$5000',
      difficulty: 'Medium',
      endDate: '2024-03-15',
      participants: '125.3K',
      isHot: true
    },
    {
      id: 2,
      name: 'zkSync Era',
      logo: '⚡',
      category: 'Layer 2',
      estimatedValue: '$1000-$10000',
      difficulty: 'Hard',
      endDate: '2024-04-01',
      participants: '523.7K',
      isHot: true
    },
    {
      id: 3,
      name: 'Scroll',
      logo: '📜',
      category: 'Layer 2',
      estimatedValue: '$800-$8000',
      difficulty: 'Medium',
      endDate: '2024-03-20',
      participants: '234.5K',
      isHot: false
    },
    {
      id: 4,
      name: 'Linea',
      logo: '🔷',
      category: 'Layer 2',
      estimatedValue: '$300-$3000',
      difficulty: 'Easy',
      endDate: '2024-03-25',
      participants: '89.2K',
      isHot: false
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-400/10 border-green-400/30'
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'Hard':
        return 'text-red-400 bg-red-400/10 border-red-400/30'
      default:
        return 'text-neutral-gray bg-neutral-gray/10 border-neutral-gray/30'
    }
  }

  return (
    <section className="py-20 bg-dark-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            热门空投
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            精选高质量空投项目，把握每一个财富机会
          </p>
        </motion.div>

        {/* Airdrops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {airdrops.map((airdrop, index) => (
            <motion.div
              key={airdrop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-dark-bg border border-neutral-gray/20 rounded-xl p-6 hover:border-brand-purple/50 transition-all duration-300 group">
                {/* Hot Badge */}
                {airdrop.isHot && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                    HOT 🔥
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{airdrop.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-purple transition-colors">
                      {airdrop.name}
                    </h3>
                    <p className="text-sm text-neutral-gray">{airdrop.category}</p>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(airdrop.difficulty)}`}>
                    {airdrop.difficulty}
                  </span>
                </div>

                {/* Card Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-gray flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      预估价值
                    </span>
                    <span className="text-sm font-semibold text-brand-gold">
                      {airdrop.estimatedValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-gray flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      截止时间
                    </span>
                    <span className="text-sm text-white">
                      {airdrop.endDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-gray flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      参与人数
                    </span>
                    <span className="text-sm text-white">
                      {airdrop.participants}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/airdrop-center#${airdrop.id}`}
                  className="mt-6 w-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30 py-2 rounded-lg font-medium hover:bg-brand-purple hover:text-white hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/airdrop-center"
            className="inline-flex items-center space-x-2 text-brand-purple hover:text-brand-purple/80 font-semibold text-lg group"
          >
            <span>查看全部空投</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedAirdrops