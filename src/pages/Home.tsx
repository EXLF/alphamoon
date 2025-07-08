import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, BarChart3, Bell, Users, Shield, Zap } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import FeaturedAirdrops from '../components/home/FeaturedAirdrops'
import ToolsIntro from '../components/home/ToolsIntro'
import CommunitySection from '../components/home/CommunitySection'
import PartnersSection from '../components/home/PartnersSection'

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedAirdrops />
      <ToolsIntro />
      <CommunitySection />
      <PartnersSection />
    </div>
  )
}

export default Home