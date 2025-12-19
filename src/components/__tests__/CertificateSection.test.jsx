import React from 'react'
import { render, screen, within } from '@testing-library/react'
<<<<<<< HEAD
import CertificateSection from '../CertificateSection'
=======
import CertificateSection from '../CertificateSection.jsx'
>>>>>>> ae880620006ba3ceb36f21fbe304dd3d8a55eac2

// Mock external UI/utility dependencies to avoid side effects
vi.mock('tailwind-merge', () => ({ twMerge: (...classes) => classes.filter(Boolean).join(' ') }))
vi.mock('@/components/ui/tracing-beam', () => ({ TracingBeam: ({ children }) => <div data-testid="tracing-beam">{children}</div> }))
vi.mock('../Foonts', () => ({ fontRobonto: { className: 'font-robonto' }}))

describe('CertificateSection', () => {
  beforeEach(() => {
    render(<CertificateSection />)
  })

  it('renders the header and decorative lines', () => {
    expect(screen.getByText('Certificate')).toBeInTheDocument()
    // decorative lines exist (two bars). We'll query by role none, so check by class hooks
    const bars = document.querySelectorAll('div.bg-purple-200, div.bg-gradient-to-l')
    expect(bars.length).toBeGreaterThanOrEqual(2)
  })

  it('renders all certificate items with title, time, badge and status', () => {
    const titles = [
      'Belajar Dasar Pemrograman Web',
      'Blockchain Developer Bootcamp',
      'Golang Backend Fundamentals',
    ]

    titles.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument())

    // Check times and badges
    expect(screen.getAllByText('2023').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('2024').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Dicoding')).toBeInTheDocument()
    expect(screen.getByText('Self-paced')).toBeInTheDocument()
    expect(screen.getByText('Online Course')).toBeInTheDocument()

    // Status appears for each card
    const statuses = screen.getAllByText('Completed')
    expect(statuses.length).toBeGreaterThanOrEqual(3)
  })

  it('renders each description item as a bulleted row', () => {
    // pick a known description entry and verify the bullet container and text exists
    expect(screen.getByText('HTML, CSS fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Solidity, Hardhat, Ethers.js')).toBeInTheDocument()
    expect(screen.getByText('Fiber, Gorm, PostgreSQL')).toBeInTheDocument()

    // Ensure the bullet divs for the descriptions exist by class query
    const bulletDivs = document.querySelectorAll('div.bg-white.bg-gradient-to-br')
    expect(bulletDivs.length).toBeGreaterThanOrEqual(3)
  })

  it('wraps the content with TracingBeam', () => {
    const wrapper = screen.getByTestId('tracing-beam')
    expect(wrapper).toBeInTheDocument()
    // Ensure it contains the list
    const listRegion = within(wrapper).getByText('Belajar Dasar Pemrograman Web')
    expect(listRegion).toBeInTheDocument()
  })

  it('applies fontRobonto class and merged tailwind classes on titles', () => {
    const title = screen.getByText('Belajar Dasar Pemrograman Web')
    expect(title).toHaveClass('font-robonto')
    // twMerge mock concatenates; verify responsive text size classes present in string
    expect(title.className).toMatch(/text-xl/)
  })
})
