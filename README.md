# Muhdan Firdaus Salam - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, experience, and certifications as a Full-Stack Web2 and Web3 Developer.


## 🚀 Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS v3
- **Component Library:** NextUI
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Theme:** next-themes (Dark/Light mode)
- **Testing:** Vitest
- **Font:** Space Grotesk (Google Fonts)

## ✨ Features

- 🎨 Modern and clean UI design with gradient effects
- 🌓 Dark/Light theme support
- 📱 Fully responsive across all devices
- ⚡ Fast page loads with Next.js optimization
- 🎭 Smooth animations with Framer Motion
- 🎯 Interactive 3D card effects
- 📊 Project showcase with Web2 and Web3 projects
- 💼 Professional experience timeline
- 🎓 Certificates section with PDF previews
- 📧 Contact information and social links
- 🔗 Integration with blockchain projects (DeFi, NFT, DEX)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/0xMuhdan/Porto-Muhdan.git
cd Porto-Muhdan
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── certificates/    # Certificate PDFs
│   ├── projects/        # Project images
│   │   ├── api/        # API project images
│   │   ├── cli/        # CLI project images
│   │   └── smartcontract/ # Smart contract project images
│   └── skils/          # Skill icons
│       └── web2/       # Web2 technology icons
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.js   # Root layout with metadata
│   │   └── page.js     # Home page
│   ├── components/     # React components
│   │   ├── ui/         # UI components (3D cards, animations)
│   │   ├── CertificateSection.jsx
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── HerroSection.js
│   │   ├── Navbar.js
│   │   ├── Project.js
│   │   └── Skill.js
│   └── lib/            # Utility functions and data
│       ├── data.js     # Project and experience data
│       └── utils.js    # Helper functions
├── tailwind.config.js  # Tailwind configuration
├── next.config.mjs     # Next.js configuration
├── vitest.config.mjs   # Vitest configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit the data in `src/lib/data.js` to update:
- Personal details
- Skills (Web2 and Web3 technologies)
- Projects (Web applications, Smart Contracts, CLI tools, APIs)
- Work experience
- Certificates

### Modify Theme

Update colors and design tokens in:
- `tailwind.config.js` - Tailwind theme configuration with custom colors
- `src/app/globals.css` - CSS variables and custom animations

### Add New Sections

Create new components in `src/components/` and import them in `src/app/page.js`.

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

The site will be available at: `https://your-project.vercel.app`

Live demo: https://muhdanfirdaus.vercel.app/

### Deploy on Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 📊 Featured Projects

### Web3 Projects
- **DAPP IDMedRec** - Medical record management with blockchain
- **Buchains Crypto Wallet** - Secure cryptocurrency wallet
- **Ruish NFT Marketplace** - Buy, mint, and transfer NFTs
- **DEX Token Marketplace** - Decentralized token exchange
- **DeFi Staking Token** - Token staking with APY rewards

### Web2 Projects
- **Agency Website** - Modern agency landing page
- **Al-Quran App** - Digital Quran application
- **Social Media Platform** - Full-stack social networking app
- **E-Commerce Platform** - Online shopping solution

### Smart Contracts
- Gasless Token
- Token Swap Protocol
- Voting System
- Decentralized Exchange
- Todo DApp

## 🛡️ Technologies & Skills

**Frontend:**
- React.js, Next.js, Tailwind CSS
- Framer Motion, NextUI, AceternityUI

**Backend:**
- Golang (Fiber, Gorm)
- Node.js, Express
- PostgreSQL, MongoDB

**Blockchain:**
- Solidity, Hardhat
- IPFS, Ethers.js, Wagmi
- Polygon, Ethereum

**DevOps:**
- Docker, Git
- Vercel, Netlify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email:** muhdanfirdaus8@gmail.com
- **GitHub:** [@0xMuhdan](https://github.com/0xMuhdan)
- **Twitter:** [@Temlep557](https://twitter.com/Temlep557)
- **LinkedIn:** [Muhdan Firdaus Salam](https://linkedin.com/in/muhdan-firdaus-salam)
- **Portfolio:** [https://muhdan-portfolio.vercel.app](https://muhdan-portfolio.vercel.app)

## 🙏 Acknowledgments

Special thanks to all the open-source projects and libraries that made this portfolio possible.

---

Made with ❤️ by Muhdan Firdaus Salam | Full-Stack Web2 & Web3 Developer
