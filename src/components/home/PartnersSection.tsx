import { motion } from 'framer-motion'

const PartnersSection = () => {
  // Mock partner logos - replace with actual partner logos
  const partners = [
    { id: 1, name: 'LayerZero', logo: '🌐' },
    { id: 2, name: 'zkSync', logo: '⚡' },
    { id: 3, name: 'Arbitrum', logo: '🔷' },
    { id: 4, name: 'Optimism', logo: '🔴' },
    { id: 5, name: 'Polygon', logo: '🟣' },
    { id: 6, name: 'Avalanche', logo: '🔺' },
    { id: 7, name: 'BNB Chain', logo: '🟡' },
    { id: 8, name: 'Ethereum', logo: '🔹' }
  ]

  return (
    <section className="py-20">
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
            合作伙伴
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            与行业领先的区块链项目建立深度合作，共同推动Web3生态发展
          </p>
        </motion.div>

        {/* Partners Logo Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="bg-dark-secondary border border-neutral-gray/20 rounded-xl p-8 w-full hover:border-brand-purple/50 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  <span className="text-neutral-gray group-hover:text-white transition-colors font-medium">
                    {partner.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-gray mb-4">
            想要成为我们的合作伙伴？
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-brand-purple hover:text-brand-purple/80 font-semibold"
          >
            <span>联系我们</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection