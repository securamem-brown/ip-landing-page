'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, AlertTriangle, Gavel, CheckCircle, FileText, Lock, Scale } from 'lucide-react'
import Link from 'next/link'

export default function LegalPage() {
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
            href="mailto:jeremy@securamem.com?subject=Legal%20AI%20Pilot%20-%20%2415K"
            className="px-6 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Start Pilot — $15K
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Gavel className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Legal AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent">
            AI-Powered Legal Research<br />With Attorney-Client Privilege
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Deploy LLMs for contract review, case research, and document analysis while protecting privileged communications and client confidentiality.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Cloud AI Violates Attorney-Client Privilege</h2>
              <p className="text-lg text-slate-700 mb-6">
                Your attorneys need AI to analyze contracts, case law, and client communications. But cloud-based AI creates fundamental ethical violations:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Privilege Waiver Risk
              </h3>
              <p className="text-slate-700">
                Sending client documents or case strategy to third-party cloud vendors may constitute privilege waiver, exposing confidential communications to opposing counsel.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> No Work Product Protection
              </h3>
              <p className="text-slate-700">
                Legal research, memo drafts, and litigation strategy processed by cloud AI lacks work product doctrine protection if vendor retains access or copies.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Ethical Duty Violations
              </h3>
              <p className="text-slate-700">
                ABA Model Rule 1.6 requires lawyers to protect client confidences. Cloud AI vendors that train on your data or retain copies create potential malpractice exposure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Discovery Complications
              </h3>
              <p className="text-slate-700">
                When opposing counsel subpoenas your AI vendor, you cannot prove what client data was or wasn&apos;t exposed—creating litigation risk and client trust issues.
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
            <h2 className="text-4xl font-bold text-white mb-6">Legal AI Is Moving Behind the Firewall</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Bar associations and malpractice insurers are forcing law firms to deploy AI without third-party cloud dependencies. Privileged communications must stay privileged.
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
              <h3 className="text-xl font-bold text-white mb-3">Bar Ethics Opinions</h3>
              <p className="text-slate-300">
                State bar associations increasingly warn that cloud AI use requires client consent, vendor vetting, and proof of confidentiality—requirements cloud vendors cannot meet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Shield className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Malpractice Insurance</h3>
              <p className="text-slate-300">
                Legal malpractice carriers now ask: &ldquo;Can you prove your AI vendor didn&apos;t expose client data?&rdquo; Cloud providers cannot provide this assurance.
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
              <h3 className="text-xl font-bold text-white mb-3">Client Expectations</h3>
              <p className="text-slate-300">
                Corporate clients explicitly prohibit sending their contracts, M&A docs, or litigation strategy to third-party cloud services—making on-prem mandatory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal-Specific Scenarios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Legal Use Cases</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deploy SecuraMem for high-value legal workflows while maintaining privilege
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Contract Review & Analysis</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Associates spend 10-15 hours reviewing M&A contracts for unusual clauses, missing provisions, and liability exposure.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy on-prem LLM to analyze 200-page contracts, flag non-standard terms, compare against firm playbooks, and generate review memos—without client documents ever leaving your firm network.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 70% faster contract review, zero privilege waiver risk, audit trail for engagement files
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
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Legal Research & Memo Drafting</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Attorneys spend hours researching case law precedents and drafting legal memos for client advice.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Use RAG-based LLM to search firm knowledge bases, case law databases, and prior memos to draft research summaries and initial memo outlines—with SecuraMem ensuring work product stays protected.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 60% faster memo turnaround, defensible work product protection, searchable audit logs
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3">eDiscovery & Document Coding</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Litigation teams manually review thousands of emails and documents for privilege, relevance, and responsiveness during discovery.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy AI to pre-code documents for privilege review, identify hot documents, and flag potential smoking guns—while SecuraMem logs every AI decision for opposing counsel challenges.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 80% reduction in review costs, defensible privilege log, cryptographic audit trail for court
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Due Diligence for M&A</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Corporate attorneys review hundreds of target company contracts, IP filings, and litigation records during acquisition due diligence.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Use LLM to analyze data room documents, extract key deal terms, flag regulatory risks, and summarize liability exposure—without exposing buyer/seller identities to cloud vendors.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 50% faster due diligence, zero confidentiality breach risk, verifiable compliance trail
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why SecuraMem for Legal AI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The only AI audit and compliance layer built to protect attorney-client privilege
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Privilege-Preserving Audit Logs</h3>
              <p className="text-slate-700">
                Cryptographically-signed logs prove AI inferences stayed within your network and weren&apos;t exposed to third parties—critical for privilege challenges and ethics audits.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client Data Never Leaves Firm</h3>
              <p className="text-slate-700">
                100MB binary runs entirely on-prem or in firm private cloud. Zero cloud dependencies. Perfect for firms handling sensitive M&A, IP, or government work.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Jailbreak Prevention (90-100%)</h3>
              <p className="text-slate-700">
                Semantic firewall blocks prompt injection attacks that could trick AI into revealing client confidences, work product, or litigation strategy to unauthorized users.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">ABA Model Rule 1.6 Compliant</h3>
              <p className="text-slate-700">
                Satisfies ethical duty to protect client confidentiality with technical controls, audit trails, and proof that AI processing occurred entirely within firm control.
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
          <h2 className="text-3xl font-bold mb-6">Deploy in Your Law Firm</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">5-Minute Setup</h3>
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-emerald-400">$ smrust init</div>
                <div className="text-slate-400"># Configure firm LLM endpoint</div>
                <div className="text-emerald-400">$ smrust firewall --port 3051</div>
                <div className="text-slate-400"># Enable privilege logging</div>
                <div className="text-emerald-400">$ smrust verify</div>
                <div className="text-cyan-400">✓ Audit chain valid, privilege protected</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Firm Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Works with iManage, NetDocuments, and custom DMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Privilege-tagged audit event logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>End-to-end encryption for client data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Real-time alerts for unauthorized access attempts</span>
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
              Start Your 30-Day Legal Pilot
            </h2>
            <p className="text-xl text-white/90 mb-4">
              $15,000 • 3 machine licenses • Proof of value guaranteed
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Deploy SecuraMem in your contract review, legal research, or eDiscovery workflows. We&apos;ll prove measurable time savings and risk reduction or refund 100%.
            </p>
            <a
              href="mailto:jeremy@securamem.com?subject=Legal%20AI%20Pilot%20-%20%2415K"
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
