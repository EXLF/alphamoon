import { Link } from 'react-router-dom'
import { Twitter, Github, MessageCircle, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'AlphaMoon工具', path: '/tools' },
      { label: '空投广场', path: '/airdrop-center#plaza' },
      { label: '精选教程', path: '/airdrop-center#tutorials' },
      { label: '项目洞察', path: '/project-insight' }
    ],
    resources: [
      { label: '使用文档', path: '#' },
      { label: 'API文档', path: '#' },
      { label: '常见问题', path: '#' },
      { label: '更新日志', path: '#' }
    ],
    company: [
      { label: '关于我们', path: '/about' },
      { label: '联系我们', path: '#' },
      { label: '隐私政策', path: '#' },
      { label: '服务条款', path: '#' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  return (
    <footer className="bg-dark-secondary border-t border-neutral-gray/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#5D55E8" strokeWidth="2"/>
                <path d="M20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C18.5 30 17 29.5 15.5 28.5C17.5 28 19 26.5 20 24.5C21 26.5 22.5 28 24.5 28.5C26 27.5 27 25.5 27 23C27 19 24 16 20 16C16 16 13 19 13 23C13 25.5 14 27.5 15.5 28.5" fill="#5D55E8"/>
              </svg>
              <span className="text-xl font-bold text-white">AlphaMoon</span>
            </Link>
            <p className="text-neutral-gray text-sm mb-4 max-w-sm">
              AlphaMoon - 为专业空投猎人打造的终极武器库。告别繁琐，拥抱高效，最大化你的空投收益。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-neutral-gray hover:text-brand-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-gray hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-gray hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">公司</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-gray hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-gray/20">
          <p className="text-center text-neutral-gray text-sm">
            Copyright © {currentYear} AlphaMoon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer