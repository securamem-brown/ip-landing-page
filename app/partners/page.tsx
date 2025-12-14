'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Zap, Code, Building2, CheckCircle, ArrowRight, Calendar, Download, Target, TrendingUp, Users, Layers, Globe, Lock, FileText, Award, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function PartnersPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const licensingTiers = [
    {
      name: "Evaluation License",
      price: "$5K",
      period: "(credited to Source License)",
      duration: "60-day source access",
      color: "from-slate-600 to-slate-500",
      benefits: [
        "Full source code access",
        "Technical documentation",
        "Architecture review session",
        "POC integration support",
        "Credited toward Source License"
      ],
      cta: "Start Evaluation",
      recommended: false
    },
    {
      name: "Certification Partner",
      price: "$15K-25K",
      period: "/year",
      duration: "SaaS badge program",
      color: "from-blue-600 to-blue-500",
      benefits: [
        "Binary distribution (no source)",
        "\"Powered by SecuraMem\" badge",
        "API integration support",
        "Co-marketing materials",
        "Technical support (email)"
      ],
      cta: "Get Certified",
      recommended: false
    },
    {
      name: "Source License",
      price: "$35K-75K",
      period: "/year",
      duration: "Full embed rights",
      color: "from-cyan-600 to-emerald-500",
      benefits: [
        "Complete source code access",
        "Embedding & modification rights",
        "Private integration workshops",
        "Dedicated Slack channel",
        "Quarterly roadmap input",
        "Tiered deployment limits (10/50/200+)"
      ],
      cta: "Schedule Discussion",
      recommended: true
    },
    {
      name: "White-Label License",
      price: "$100K+",
      period: "/year",
      duration: "Full rebrand rights",
      color: "from-purple-600 to-pink-500",
      benefits: [
        "Everything in Source License",
        "Full rebranding rights",
        "Remove SecuraMem attribution",
        "Vertical exclusivity options",
        "Custom feature development",
        "Priority support & SLAs"
      ],
      cta: "Contact Sales",
      recommended: false
    }
  ]

  const targetVerticals = [
    {
      name: "Healthcare IT",
      icon: Building2,
      partners: ["Epic Systems ecosystem", "Cerner/Oracle Health partners", "Meditech integrators"],
      useCase: "Enable HIPAA-compliant AI audit trails for clinical decision support"
    },
    {
      name: "LegalTech",
      icon: FileText,
      partners: ["Relativity partners", "Everlaw ecosystem", "eDiscovery platforms"],
      useCase: "Court-admissible cryptographic evidence for AI-assisted legal work"
    },
    {
      name: "InsurTech",
      icon: Shield,
      partners: ["Guidewire partners", "Duck Creek ecosystem", "Majesco integrators"],
      useCase: "Actuarial-grade audit data for AI underwriting and claims processing"
    },
    {
      name: "GRC/Compliance",
      icon: Lock,
      partners: ["ServiceNow partners", "Archer ecosystem", "LogicGate integrators"],
      useCase: "Air-gapped AI governance for regulated enterprise customers"
    }
  ]

  const whyPartner = [
    {
      icon: Zap,
      title: "Time to Market",
      description: "Go to market in weeks, not months. Our Rust source code is production-ready today.",
      stat: "6-12 months",
      statLabel: "dev time saved"
    },
    {
      icon: Target,
      title: "Win Regulated Deals",
      description: "Your platform becomes air-gap capable overnight. Win healthcare, defense, and finance deals.",
      stat: "3x",
      statLabel: "addressable market"
    },
    {
      icon: TrendingUp,
      title: "Revenue Expansion",
      description: "Add premium SKU for 'AI Audit & Compliance' without engineering lift.",
      stat: "25-40%",
      statLabel: "price premium"
    },
    {
      icon: Users,
      title: "Competitive Moat",
      description: "Cryptographic audit infrastructure is complex. License battle-tested code instead.",
      stat: "18-24 months",
      statLabel: "competitive lead"
    }
  ]

  const integrationPatterns = [
    {
      pattern: "Docker Sidecar",
      description: "Deploy SecuraMem container alongside your app pods",
      bestFor: "Kubernetes-native platforms"
    },
    {
      pattern: "Source Code Embed",
      description: "Embed SecuraMem Rust crates directly into your application",
      bestFor: "Performance-critical systems"
    },
    {
      pattern: "API Integration",
      description: "HTTP Proxy API for OpenAI-compatible integration",
      bestFor: "Multi-language platforms"
    },
    {
      pattern: "CLI Ingestion",
      description: "Batch processing via command-line interface",
      bestFor: "Legacy system integration"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* EU AI Act Urgency Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-3 px-6 text-center font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
          <span className="text-2xl">⚡</span>
          <span>EU AI Act takes effect February 2, 2026 — System integrators need audit infrastructure NOW. We&apos;re production-ready today.</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-trust-navy-900/95 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Shield className="w-8 h-8 text-trust-teal-400" />
            <div>
              <h1 className="text-2xl font-bold text-white">SecuraMem</h1>
              <p className="text-xs text-trust-navy-300">The AI Flight Recorder™</p>
            </div>
          </Link>
          <Link
            href="mailto:jeremy@securamem.com?subject=Partnership%20Discussion%20-%20System%20Integrator"
            className="px-6 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule Partnership Discussion
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6"
          >
            <Layers className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-600">System Integrator Partner Program</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent"
          >
            Embed AI Audit Infrastructure<br />in Your Platform
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            License SecuraMem&apos;s cryptographic audit layer. <span className="font-semibold text-slate-900">You own the customer, we provide the evidence.</span> Stop building audit infrastructure from scratch—go to market in weeks with battle-tested Rust code.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8 flex-wrap"
          >
            <Link
              href="mailto:jeremy@securamem.com?subject=Partnership%20Discussion%20-%20System%20Integrator"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg shadow-cyan-500/30 hover:shadow-xl transition-all"
            >
              Schedule Partnership Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:jeremy@securamem.com?subject=Evaluation%20License%20Request%20-%20%245K"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 hover:border-slate-400 rounded-xl font-bold text-lg flex items-center gap-3 transition-all"
            >
              <Download className="w-5 h-5" />
              Start $5K Evaluation
            </Link>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-slate-500"
          >
            60-day source access • Technical workshops • Credited to SDK license
          </motion.p>
        </motion.div>
      </section>

      {/* Why Partner */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Partner with SecuraMem</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Differentiate your platform, expand your addressable market, and win regulated enterprise deals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPartner.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 mb-6">{item.description}</p>
              <div className="border-t border-slate-200 pt-4">
                <div className="text-3xl font-bold text-cyan-600">{item.stat}</div>
                <div className="text-sm text-slate-500">{item.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gradient-to-br from-trust-navy-900 via-trust-navy-800 to-trust-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Production-ready Rust infrastructure with full technical support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <Code className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Battle-Tested Code</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>~2,500 lines of production Rust</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>ED25519 signature chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>SHA-256 hash linking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>ONNX semantic firewall</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Zero runtime dependencies</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <Users className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Integration Support</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Private integration workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Dedicated Slack channel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Architecture review sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Quarterly roadmap input</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Priority bug fixes & features</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <Rocket className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Go-to-Market</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Co-marketing materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Partner badge & certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Sales enablement training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Technical objection handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Joint customer success stories</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Licensing Tiers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Licensing Options</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the licensing tier that matches your integration needs and go-to-market strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licensingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all relative ${
                tier.recommended ? 'border-cyan-500 ring-4 ring-cyan-500/20' : 'border-slate-200'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  <span className="text-slate-500">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-500">{tier.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`mailto:jeremy@securamem.com?subject=${encodeURIComponent(tier.name + ' - Partnership Inquiry')}`}
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  tier.recommended
                    ? 'bg-gradient-to-r from-cyan-600 to-emerald-500 text-white hover:shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Target Verticals */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Target Partner Ecosystems</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              System integrators serving regulated industries benefit most from SecuraMem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetVerticals.map((vertical, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <vertical.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{vertical.name}</h3>
                    <p className="text-sm text-slate-600 italic">{vertical.useCase}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Example Partners:</p>
                  {vertical.partners.map((partner, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span>{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Patterns */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Integrates</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flexible integration patterns for any platform architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:border-cyan-300 transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{pattern.pattern}</h3>
              <p className="text-sm text-slate-600 mb-3">{pattern.description}</p>
              <div className="text-xs text-cyan-600 font-semibold">
                Best for: {pattern.bestFor}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            <FileText className="w-5 h-5" />
            View Full Integration Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Technical Credibility */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Production-hardened Rust infrastructure with zero dependencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Binary Size", value: "~85MB", detail: "Embedded ONNX model included" },
              { label: "Dependencies", value: "Zero", detail: "No runtime requirements" },
              { label: "Language", value: "Rust", detail: "Memory-safe, fast, auditable" },
              { label: "Signatures", value: "ED25519", detail: "Industry-standard cryptography" },
              { label: "Hash Chain", value: "SHA-256", detail: "Tamper-evident linking" },
              { label: "ML Engine", value: "ONNX", detail: "Portable semantic firewall" }
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-300 transition-all"
              >
                <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Partnership Process</h2>
          <p className="text-xl text-slate-600">
            From evaluation to production in 60-90 days
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: "1",
              title: "Evaluate",
              duration: "2 weeks",
              description: "$5K evaluation license grants 60-day source access. Review architecture, run POC integration, assess technical fit.",
              deliverable: "Technical feasibility report"
            },
            {
              step: "2",
              title: "Pilot",
              duration: "4-6 weeks",
              description: "Build pilot integration with dedicated engineering support. Private Slack channel, weekly check-ins, architecture reviews.",
              deliverable: "Working prototype with 1-2 customers"
            },
            {
              step: "3",
              title: "License",
              duration: "1 week",
              description: "Execute SDK or White-Label license agreement. Evaluation fee credited. Finalize terms, deploy keys, set SLAs.",
              deliverable: "Production license & support plan"
            },
            {
              step: "4",
              title: "Deploy",
              duration: "Ongoing",
              description: "Roll out to your customer base. Co-marketing launch, sales enablement, quarterly roadmap input, priority support.",
              deliverable: "Production deployments & revenue"
            }
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 bg-white border border-slate-200 rounded-xl p-8 hover:border-cyan-300 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {phase.step}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                  <span className="text-sm text-slate-500 font-semibold">{phase.duration}</span>
                </div>
                <p className="text-slate-600 mb-3">{phase.description}</p>
                <div className="flex items-center gap-2 text-sm text-cyan-600 font-semibold">
                  <Award className="w-4 h-4" />
                  {phase.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-trust-blue-600 to-trust-teal-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              SecuraMem provides the cryptographic audit layer. You build the workflow, dashboards, and customer relationships. We stay invisible.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="mailto:jeremy@securamem.com?subject=Partnership%20Discussion%20-%20System%20Integrator"
                className="px-8 py-4 bg-white text-trust-blue-600 hover:bg-slate-50 rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg transition-all"
              >
                <Calendar className="w-5 h-5" />
                Schedule Partnership Call
              </Link>
              <Link
                href="mailto:jeremy@securamem.com?subject=Evaluation%20License%20Request%20-%20%245K"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg flex items-center gap-3 transition-all"
              >
                <Download className="w-5 h-5" />
                Start $5K Evaluation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-lg">SecuraMem</span>
              </div>
              <p className="text-sm text-slate-400">
                Licensable AI audit infrastructure for system integrators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Partnership</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:jeremy@securamem.com?subject=Partnership%20Discussion" className="hover:text-white">Partner Program</a></li>
                <li><a href="mailto:jeremy@securamem.com?subject=Evaluation%20License" className="hover:text-white">Evaluation License</a></li>
                <li><a href="/docs" className="hover:text-white">Integration Guide</a></li>
                <li><a href="mailto:jeremy@securamem.com?subject=Technical%20Questions" className="hover:text-white">Technical Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                <li><Link href="/" className="hover:text-white">Product Overview</Link></li>
                <li><a href="/insurance" className="hover:text-white">Insurance Use Cases</a></li>
                <li><a href="/healthcare" className="hover:text-white">Healthcare Use Cases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:jeremy@securamem.com" className="hover:text-white">jeremy@securamem.com</a></li>
                <li>17342926 Canada Inc.</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 SecuraMem (17342926 Canada Inc.). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
