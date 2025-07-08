import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Wallet, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: '首页' },
    { 
      path: '/airdrop-center', 
      label: '空投中心',
      hasDropdown: true,
      dropdownItems: [
        { path: '/airdrop-center#plaza', label: '空投广场' },
        { path: '/airdrop-center#tutorials', label: '精选教程' }
      ]
    },
    { path: '/tools', label: 'AlphaMoon工具' },
    { path: '/project-insight', label: '项目洞察' },
    { path: '/about', label: '关于我们' }
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-lg border-b border-neutral-gray/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#FFD700" strokeWidth="2"/>
              <path d="M20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C18.5 30 17 29.5 15.5 28.5C17.5 28 19 26.5 20 24.5C21 26.5 22.5 28 24.5 28.5C26 27.5 27 25.5 27 23C27 19 24 16 20 16C16 16 13 19 13 23C13 25.5 14 27.5 15.5 28.5" fill="#FFD700"/>
            </svg>
            <span className="text-xl font-bold text-white">AlphaMoon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                    isActive(link.path) ? 'text-brand-accent' : 'text-neutral-gray'
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-dark-secondary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-neutral-gray hover:text-brand-accent hover:bg-dark-bg/50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neutral-gray hover:text-brand-accent transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Connect Wallet Button */}
            <button className="hidden sm:flex items-center space-x-2 bg-brand-accent text-dark-bg px-4 py-2 rounded-lg font-medium hover:bg-brand-accent/90 transition-colors">
              <Wallet size={18} />
              <span>连接钱包</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-gray hover:text-brand-accent transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <input
                  type="text"
                  placeholder="搜索项目、空投或教程..."
                  className="w-full bg-dark-secondary border border-neutral-gray/20 rounded-lg px-4 py-2 text-white placeholder-neutral-gray focus:outline-none focus:border-brand-accent"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-16 right-0 w-full h-[calc(100vh-4rem)] bg-dark-bg lg:hidden"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      isActive(link.path) ? 'text-brand-accent' : 'text-neutral-gray'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="ml-4 space-y-2 mt-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-sm text-neutral-gray hover:text-brand-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full flex items-center justify-center space-x-2 bg-brand-accent text-dark-bg px-4 py-3 rounded-lg font-medium">
                <Wallet size={18} />
                <span>连接钱包</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar