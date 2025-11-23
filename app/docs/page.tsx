'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Shield, Lock, Cpu, Database, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  const slides = [
    {
      title: "SecuraMem",
      subtitle: "The On-Prem AI Audit & Cryptographic Compliance Engine Built for Your Regulated Customers",
      description: "A Rust-native, single-binary enforcement + audit module that instantly unlocks healthcare, defense, critical infrastructure, and EU AI Act–regulated markets — without rearchitecting your platform.",
      icon: Shield
    },
    {
      title: "The Problem Your Customers Already Have",
      points: [
        "On-prem deployment",
        "Cryptographically-verifiable audit logs",
        "AI inference oversight & attestation",
        "Zero data leaving their network",
        "Compliance with EU AI Act, NIST AI RMF, HIPAA, DoD, and critical-infrastructure mandates"
      ],
      footer: "Cloud-only GRC and AI-governance tools cannot enter these markets today — even if your product meets every other requirement.",
      icon: Lock
    },
    {
      title: "The Blocker for GRC & AI Platforms",
      description: "Modern compliance platforms excel at workflow and automation, but they cannot:",
      points: [
        "Provide tamper-proof, on-prem system evidence",
        "Audit AI behavior or detect jailbreaks",
        "Run behind air-gaps",
        "Meet cryptographic attestation expectations emerging in EU AI Act and U.S. Executive Order environments"
      ],
      footer: "As regulations tighten, your sales pipeline loses entire customer segments you cannot serve.",
      icon: FileText
    },
    {
      title: "What Your Platform Gains With SecuraMem",
      description: "SecuraMem adds the enforcement, audit, and AI-risk control layer your product is missing — without changing your architecture.",
      subtitle: "Your product instantly gains:",
      points: [
        "On-prem deployment for restricted networks",
        "Immutable cryptographic audit logs",
        "AI inference forensics + jailbreak detection",
        "A verifiability module for regulated certification",
        "Hybrid (cloud + air-gapped) support"
      ],
      footer: "This becomes your \"Regulated Industry / AI-Audit Compliance\" SKU — without a multi-year engineering lift.",
      icon: CheckCircle
    },
    {
      title: "What SecuraMem Is",
      subtitle: "Technical Overview",
      description: "A 100MB Rust-native single binary, zero external dependencies, containing:",
      points: [
        "Ed25519-signed immutable ledger (SHA-256 chained)",
        "ONNX-powered semantic firewall (384-D embedding jailbreak detection)",
        "Local encrypted datastore with WAL mode",
        "Machine-fingerprinted licensing",
        "Axum/Prometheus monitoring interface"
      ],
      footer: "Runs anywhere: air-gaps, SCIFs, defense networks, hospital subnets, national labs.",
      icon: Cpu
    },
    {
      title: "How It Integrates With Your Platform",
      description: "SecuraMem is not a GRC system and doesn't replace yours. It becomes your on-prem enforcement layer:",
      columns: [
        {
          title: "Plug-in Options:",
          items: ["SDK / API embed", "Sidecar process", "CLI-based event ingestion", "White-label module for enterprise customers"]
        },
        {
          title: "You continue owning:",
          items: ["Workflow", "Dashboards", "Ticketing", "Policy logic", "Customer experience"]
        }
      ],
      footer: "SecuraMem supplies the cryptographic evidence + AI oversight your customers now demand.",
      icon: Database
    },
    {
      title: "Deployment Model",
      subtitle: "Single binary. Zero cloud calls.",
      description: "Designed for:",
      points: [
        "Air-gapped networks",
        "Critical infrastructure",
        "Energy, finance, and healthcare",
        "Defense & national labs",
        "High-sovereignty environments",
        "Places your cloud platform cannot go"
      ],
      footer: "Your product becomes hybrid-cloud capable overnight.",
      icon: Shield
    },
    {
      title: "Why Portfolio Companies Benefit Immediately",
      points: [
        "Higher ACVs with a new Regulated-Industry or AI-Audit SKU",
        "Faster sales cycles with compliance-ready evidence",
        "Drastically reduced engineering cost (years → days)",
        "Regulatory insulation ahead of EU AI Act enforcement",
        "Defensible differentiation vs. cloud-only competitors",
        "A portable, white-label module they can offer to every customer in their pipeline who said \"We need on-prem.\""
      ],
      footer: "This is the fastest way to expand into high-compliance markets.",
      icon: CheckCircle
    },
    {
      title: "Examples of Use Cases",
      points: [
        "AI model governance for hospitals",
        "On-prem audit logs for critical infrastructure",
        "DoD / FedRAMP environments needing verifiable proofs",
        "AI jailbreak forensics for financial institutions",
        "Energy-sector compliance evidence storage",
        "National lab deployments where all commercial cloud is prohibited"
      ],
      footer: "Your product becomes deployable where 99% of SaaS vendors simply cannot sell today.",
      icon: FileText
    },
    {
      title: "Offering (Licensing / Acquisition)",
      subtitle: "Options for portfolio companies:",
      points: [
        "Per-customer licensing",
        "Per-deployment licensing",
        "Platform-wide enterprise license",
        "Full IP acquisition (exclusive or non-exclusive)",
        "White-label inclusion in your compliance SKU"
      ],
      footer: "Goal: Enable your platform to immediately serve regulated markets you cannot currently access.",
      icon: Lock
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-trust-navy-900/95 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-white" />
            <h1 className="text-2xl font-bold text-white">SecuraMem</h1>
          </Link>
          <Link
            href="mailto:jeremy@securamem.com?subject=SecuraMem%20Partnership%20Inquiry"
            className="px-6 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent">
            Partner Pitch Deck
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            How SecuraMem unlocks regulated markets for GRC and AI governance platforms
          </p>
        </motion.div>
      </section>

      {/* Slides */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {slides.map((slide, idx) => {
            const Icon = slide.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg"
              >
                {/* Slide Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-trust-blue-500 to-trust-teal-500 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-slate-500">Slide {idx + 1}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{slide.title}</h2>
                    {slide.subtitle && (
                      <p className="text-lg text-slate-600 font-medium">{slide.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Slide Content */}
                {slide.description && (
                  <p className="text-slate-700 mb-6 text-lg leading-relaxed">{slide.description}</p>
                )}

                {/* Points List */}
                {slide.points && (
                  <ul className="space-y-3 mb-6">
                    {slide.points.map((point, pointIdx) => (
                      <motion.li
                        key={pointIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-slate-700 text-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Two-Column Layout */}
                {slide.columns && (
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    {slide.columns.map((column, colIdx) => (
                      <div key={colIdx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4 text-lg">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-slate-700">
                              <span className="text-trust-blue-500 mt-1">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                {slide.footer && (
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-slate-600 italic text-lg">{slide.footer}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-trust-navy-900 to-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Regulated Markets?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Contact us to discuss licensing, white-label integration, or IP acquisition options.
            </p>
            <a
              href="mailto:jeremy@securamem.com?subject=SecuraMem%20Partnership%20Inquiry"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              Contact Jeremy Brown
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-trust-navy-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 SecuraMem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
