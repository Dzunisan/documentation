export default {
  title: '1nga Documentation',
  description: 'Documentation for the 1nga e-commerce platform',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'API', link: '/api/' },
      { text: 'Development', link: '/development/' },
      { text: 'Deployment', link: '/deployment/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'User Guides',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Customer Guide', link: '/guide/customer' },
            { text: 'Seller Guide', link: '/guide/seller' },
            { text: 'Admin Guide', link: '/guide/admin' }
          ]
        }
      ],
      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'System Overview', link: '/architecture/' },
            { text: 'Database Schema', link: '/architecture/database' },
            { text: 'Authentication Flow', link: '/architecture/auth' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Products API', link: '/api/products' },
            { text: 'Orders API', link: '/api/orders' },
            { text: 'Users API', link: '/api/users' },
            { text: 'Sellers API', link: '/api/sellers' }
          ]
        }
      ],
      '/development/': [
        {
          text: 'Development',
          items: [
            { text: 'Overview', link: '/development/' },
            { text: 'Setup Guide', link: '/development/setup' },
            { text: 'Coding Standards', link: '/development/coding-standards' },
            { text: 'Project Timeline', link: '/development/timeline' }
          ]
        }
      ],
      '/deployment/': [
        {
          text: 'Deployment',
          items: [
            { text: 'Overview', link: '/deployment/' },
            { text: 'Infrastructure', link: '/deployment/infrastructure' },
            { text: 'CI/CD Pipeline', link: '/deployment/cicd' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/microsedev/monorepo' }
    ],
    footer: {
      message: '1nga e-commerce platform documentation',
      copyright: 'Copyright © 2025 1nga'
    }
  },
  // Enable scripts for countdown timers
  markdown: {
    config: (md) => {
      md.set({ html: true })
    }
  }
} 