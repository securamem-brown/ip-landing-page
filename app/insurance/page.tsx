'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, AlertTriangle, Scale, CheckCircle, FileText, Lock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function InsurancePage() {
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
            href="mailto:jeremy@securamem.com?subject=Insurance%20AI%20Pilot%20-%20%2450K"
            className="px-6 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Start Pilot — $50K
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Insurance AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent">
            AI-Powered Underwriting<br />Without the Compliance Nightmare
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Deploy LLMs for claims processing, underwriting, and fraud detection while meeting regulatory requirements for audit trails, data sovereignty, and AI explainability.
          </p>
        </motion.div>
      </section>

      {/* The Old Way */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-red-100 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Cloud AI Problem for Insurers</h2>
              <p className="text-lg text-slate-700 mb-6">
                Your underwriters need AI to process medical records, financial statements, and claims data. But cloud-based AI creates fundamental compliance problems:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> PII Leaving Your Network
              </h3>
              <p className="text-slate-700">
                Medical records, financial data, and sensitive applicant information sent to third-party cloud providers creates liability exposure and regulatory risk.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> No Audit Trail for Denials
              </h3>
              <p className="text-slate-700">
                When an AI recommends denying a claim or raising premiums, you cannot prove exactly what data it used or how it reached that decision in court.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Vendor Lock-In Risk
              </h3>
              <p className="text-slate-700">
                Your risk models and underwriting logic become dependent on OpenAI, Anthropic, or other vendors who can change pricing, terms, or shut down access.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> EU AI Act Exposure
              </h3>
              <p className="text-slate-700">
                Insurance underwriting is classified as &ldquo;high-risk AI&rdquo; under the EU AI Act, requiring documentation and explainability cloud vendors cannot provide.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Market Bifurcation */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">The Insurance AI Market Is Splitting</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Regulators are forcing a choice: cloud-based AI with compliance risk, or sovereign on-prem AI with verifiable audit trails. The latter is winning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Scale className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">State Insurance Regulators</h3>
              <p className="text-slate-300">
                NAIC model laws now require insurers to explain AI-driven underwriting decisions with documented evidence—impossible with cloud black boxes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <FileText className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">EU AI Act Compliance</h3>
              <p className="text-slate-300">
                Insurance underwriting is &ldquo;high-risk AI&rdquo; requiring detailed logging, explainability, and human oversight—all impossible with cloud APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Lock className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Sovereignty Mandates</h3>
              <p className="text-slate-300">
                More jurisdictions are banning PII transfer to foreign cloud providers, making on-prem the only viable option for global insurers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance-Specific Scenarios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Insurance Use Cases</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deploy SecuraMem for high-value AI workflows while maintaining full compliance
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Medical Underwriting with LLMs</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Life insurance underwriters review 50-page medical records for applicants. This takes 3-4 hours per case and delays policy issuance.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy LLM locally behind SecuraMem&apos;s firewall to summarize medical records, flag risk factors, and suggest risk classifications—all without PII leaving your network. Every AI decision is cryptographically logged for regulatory audits.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 80% faster underwriting, zero cloud exposure, court-admissible audit trails
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Claims Fraud Detection</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Claims adjusters manually review thousands of claims monthly, missing subtle fraud patterns that cost millions.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Use AI to analyze claim narratives, medical billing codes, and historical patterns to flag suspicious claims. SecuraMem logs every inference so you can defend fraud determinations in court or regulatory hearings.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 40% reduction in fraudulent payouts, defensible audit trail for contested claims
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex-shrink-0">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Policy Document Q&A for Agents</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Insurance agents need instant answers about policy coverage, exclusions, and riders during customer calls.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy RAG-based LLM that answers policy questions using your internal documents. SecuraMem ensures agents cannot extract proprietary underwriting formulas or trick the AI into revealing competitive data.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 60% faster agent response times, zero risk of IP leakage via jailbreaks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How SecuraMem Solves It */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why SecuraMem for Insurance AI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The only AI audit and compliance layer built for regulated industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cryptographic Audit Trails</h3>
              <p className="text-slate-700">
                Every AI inference is logged with SHA-256 chaining and Ed25519 signatures. Prove exactly what data the AI used and why it made each decision—in court or regulatory audits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero-Cloud Deployment</h3>
              <p className="text-slate-700">
                100MB single binary runs on-prem, air-gapped, or in your private cloud. PII never leaves your network. No internet dependency. Perfect for high-sovereignty environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Jailbreak Detection (90-100%)</h3>
              <p className="text-slate-700">
                ONNX-powered semantic firewall blocks prompt injection attempts before they reach your LLM, preventing agents or attackers from extracting underwriting formulas or PII.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <CheckCircle className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">EU AI Act Ready</h3>
              <p className="text-slate-700">
                Built-in documentation, explainability logging, and human oversight integration satisfies high-risk AI requirements without rearchitecting your systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Deployment */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-2xl p-10 text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Deploy in Your Environment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">5-Minute Setup</h3>
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-emerald-400">$ smrust init</div>
                <div className="text-slate-400"># Configure on-prem LLM endpoint</div>
                <div className="text-emerald-400">$ smrust firewall --port 3051</div>
                <div className="text-slate-400"># Start logging + firewall</div>
                <div className="text-emerald-400">$ smrust verify</div>
                <div className="text-cyan-400">✓ Audit chain valid, 0 jailbreaks detected</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">What You Get</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Transparent proxy for OpenAI-compatible APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Immutable audit logs with cryptographic verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Real-time jailbreak blocking and alerting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Prometheus metrics for observability</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-trust-blue-600 to-trust-teal-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your 60-Day Pilot
            </h2>
            <p className="text-xl text-white/90 mb-4">
              $50,000 • 3 machine licenses • Proof of value guaranteed
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Deploy SecuraMem in your underwriting, claims, or agent-assist workflows. We&apos;ll prove measurable ROI or refund 100% of your investment.
            </p>
            <a
              href="mailto:jeremy@securamem.com?subject=Insurance%20AI%20Pilot%20-%20%2450K"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-trust-blue-600 hover:bg-slate-50 rounded-xl font-bold text-xl shadow-2xl transition-all"
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
