'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, AlertTriangle, Building2, CheckCircle, FileText, Lock, Database } from 'lucide-react'
import Link from 'next/link'

export default function EnterprisePage() {
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
            href="mailto:jeremy@securamem.com?subject=Enterprise%20AI%20Pilot%20-%20%2450K"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-semibold text-slate-600">Enterprise AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent">
            Sovereign AI for<br />Critical Infrastructure
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Deploy LLMs for operations, engineering, and customer support while protecting proprietary data, trade secrets, and intellectual property from cloud exposure.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Cloud AI Exposes Critical Enterprise Data</h2>
              <p className="text-lg text-slate-700 mb-6">
                Your teams need AI for operational efficiency, engineering support, and customer service. But cloud-based AI creates fundamental security and IP risks:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> IP Leakage to Competitors
              </h3>
              <p className="text-slate-700">
                Sending proprietary manufacturing processes, product designs, or strategic plans to cloud AI vendors creates risk that competitors gain access via model training or breaches.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> No Operational Audit Trail
              </h3>
              <p className="text-slate-700">
                When AI assists in critical infrastructure decisions (energy grids, manufacturing, logistics), you cannot prove what data was analyzed or how recommendations were made.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Foreign Cloud Jurisdiction Risk
              </h3>
              <p className="text-slate-700">
                National security, defense contractors, and critical infrastructure cannot send operational data to foreign cloud providers without violating security clearances or export controls.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> EU AI Act Compliance Gap
              </h3>
              <p className="text-slate-700">
                Critical infrastructure AI systems require documented risk management, human oversight, and audit trails under the EU AI Act—cloud vendors cannot provide this.
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
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise AI Is Going Sovereign</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Governments and regulators worldwide are mandating data sovereignty and AI accountability for critical infrastructure. On-prem deployment is becoming the only viable option.
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
              <Shield className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">EU AI Act Critical Infrastructure</h3>
              <p className="text-slate-300">
                Energy, transportation, and manufacturing AI systems are classified as &ldquo;high-risk&rdquo; requiring documented oversight, risk assessments, and audit trails cloud APIs cannot provide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Lock className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">National Security Requirements</h3>
              <p className="text-slate-300">
                Defense contractors, aerospace, and government suppliers must keep operational data on-prem to maintain security clearances and comply with ITAR/EAR export controls.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Database className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Sovereignty Mandates</h3>
              <p className="text-slate-300">
                Countries from China to France to Brazil are banning critical infrastructure data from leaving national borders—making cloud AI deployment illegal for many enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise-Specific Scenarios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Enterprise Use Cases</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deploy SecuraMem for mission-critical AI workflows with full sovereignty
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
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Manufacturing Process Optimization</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Engineers manually analyze production line data, equipment logs, and quality metrics to identify efficiency improvements—missing subtle patterns.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy on-prem LLM to analyze factory floor data, suggest process optimizations, and predict equipment failures—without exposing proprietary manufacturing IP to cloud vendors.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 25% improvement in yield, zero IP leakage risk, audit trail for ISO compliance
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Internal Knowledge Base Q&A</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Engineers and support teams waste hours searching internal wikis, Confluence pages, and documentation for answers to technical questions.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy RAG-based LLM over internal documentation, runbooks, and tribal knowledge—with SecuraMem preventing jailbreaks that could expose trade secrets or security procedures.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 70% faster problem resolution, zero risk of IP extraction via prompt injection
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Customer Support Automation</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Support teams manually respond to repetitive customer inquiries about product configurations, troubleshooting, and account issues.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy customer-facing AI chatbot trained on product docs and support history—with SecuraMem ensuring customers cannot extract proprietary technical details or pricing strategies.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 60% reduction in support tickets, defensible audit trail for compliance reviews
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
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex-shrink-0">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Energy Grid Predictive Maintenance</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Utility operators monitor thousands of sensors across power grids but cannot predict equipment failures before they cause outages.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy AI to analyze SCADA data, weather patterns, and historical maintenance records to predict transformer and line failures—without exposing critical infrastructure data to cloud vendors.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 40% reduction in unplanned outages, cryptographic audit trail for regulatory compliance
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why SecuraMem for Enterprise AI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The only AI audit and compliance layer built for sovereign operations
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cryptographic Proof of Sovereignty</h3>
              <p className="text-slate-700">
                Every AI inference is cryptographically signed and chained. Prove to auditors and regulators that operational data never left your network—satisfying EU AI Act and national security requirements.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Air-Gap Compatible</h3>
              <p className="text-slate-700">
                100MB single binary with zero external dependencies. Runs in SCIFs, defense facilities, offshore rigs, and disconnected industrial sites where cloud access is prohibited.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">IP Protection via Jailbreak Prevention (90-100%)</h3>
              <p className="text-slate-700">
                Semantic firewall blocks prompt injection attacks that could extract trade secrets, manufacturing processes, or strategic plans from your AI systems.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Critical Infrastructure Compliance</h3>
              <p className="text-slate-700">
                Satisfies EU AI Act high-risk AI requirements, NIST AI RMF guidance, and sector-specific regulations (NERC CIP for energy, TSA for transportation, etc.).
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
          <h2 className="text-3xl font-bold mb-6">Deploy in Your Enterprise Environment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">5-Minute Setup</h3>
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-emerald-400">$ smrust init</div>
                <div className="text-slate-400"># Configure on-prem LLM endpoint</div>
                <div className="text-emerald-400">$ smrust firewall --port 3051</div>
                <div className="text-slate-400"># Enable sovereign logging</div>
                <div className="text-emerald-400">$ smrust verify</div>
                <div className="text-cyan-400">✓ Audit chain valid, data sovereign</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Enterprise Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Works with OpenAI-compatible on-prem LLMs (Ollama, vLLM, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>SIEM integration (Splunk, Elasticsearch, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Hardware security module (HSM) support for signing keys</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Prometheus metrics + Grafana dashboards</span>
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
              Start Your 60-Day Enterprise Pilot
            </h2>
            <p className="text-xl text-white/90 mb-4">
              $50,000 • 3 machine licenses • Proof of value guaranteed
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Deploy SecuraMem in your manufacturing, operations, or support workflows. We&apos;ll prove measurable efficiency gains and risk reduction or refund 100%.
            </p>
            <a
              href="mailto:jeremy@securamem.com?subject=Enterprise%20AI%20Pilot%20-%20%2450K"
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
