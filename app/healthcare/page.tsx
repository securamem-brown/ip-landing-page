'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, AlertTriangle, Heart, CheckCircle, FileText, Lock, Activity } from 'lucide-react'
import Link from 'next/link'

export default function HealthcarePage() {
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
            href="mailto:jeremy@securamem.com?subject=Healthcare%20AI%20Deployment%20Information"
            className="px-6 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Contact Sales
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <Heart className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Healthcare AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust-navy-900 via-trust-blue-500 to-trust-teal-500 bg-clip-text text-transparent">
            HIPAA-Compliant AI for<br />Clinical Decision Support
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Deploy LLMs for diagnosis assistance, treatment planning, and medical documentation while maintaining full HIPAA compliance and patient privacy.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Cloud AI Fails Healthcare</h2>
              <p className="text-lg text-slate-700 mb-6">
                Your clinicians need AI to analyze patient records, suggest diagnoses, and accelerate care delivery. But cloud-based AI creates fundamental compliance violations:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> HIPAA Violations
              </h3>
              <p className="text-slate-700">
                Sending PHI to OpenAI, Anthropic, or other cloud vendors creates Business Associate liability and potential $15K+ per-record fines if breached.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> No Clinical Audit Trail
              </h3>
              <p className="text-slate-700">
                When AI assists in diagnosis or treatment planning, you cannot prove what data influenced the decision—creating malpractice liability exposure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Patient Trust Erosion
              </h3>
              <p className="text-slate-700">
                Patients expect their medical records to stay within your hospital network, not be sent to third-party cloud providers for AI processing.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> EU AI Act Medical Restrictions
              </h3>
              <p className="text-slate-700">
                Clinical decision support is &ldquo;high-risk AI&rdquo; requiring documented oversight, explainability, and audit trails cloud vendors cannot provide.
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
            <h2 className="text-4xl font-bold text-white mb-6">Healthcare AI Is Going On-Prem</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Regulators and liability insurers are forcing hospitals and health systems to deploy AI without cloud dependencies. Sovereignty is the new standard.
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
              <h3 className="text-xl font-bold text-white mb-3">HIPAA Security Rule</h3>
              <p className="text-slate-300">
                OCR guidance increasingly scrutinizes cloud BAAs and requires covered entities to prove PHI is encrypted, logged, and traceable—impossible with black-box APIs.
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
              <h3 className="text-xl font-bold text-white mb-3">Malpractice Liability</h3>
              <p className="text-slate-300">
                Medical liability insurers now ask: &ldquo;If your AI misdiagnosed a patient, can you prove exactly what it saw and why?&rdquo; Cloud vendors cannot answer this.
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
              <h3 className="text-xl font-bold text-white mb-3">Patient Data Sovereignty</h3>
              <p className="text-slate-300">
                European health systems must keep patient data within national borders. Cloud AI violates GDPR Article 44 and upcoming eHealth regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare-Specific Scenarios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Healthcare Use Cases</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deploy SecuraMem for clinical AI workflows with full HIPAA compliance
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
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Radiology Report Analysis</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Radiologists spend hours reviewing imaging reports and prior studies to write comprehensive diagnostic summaries.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy on-prem LLM to analyze radiology reports, compare with prior imaging, and generate structured summaries highlighting changes and potential diagnoses—all without PHI leaving your PACS network.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 50% faster report turnaround, zero HIPAA risk, cryptographic audit trail for litigation
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Clinical Documentation Assistant</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Physicians spend 2-3 hours per day on EHR documentation instead of patient care, leading to burnout.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Use ambient AI to transcribe patient encounters and auto-generate SOAP notes directly in your EHR—with SecuraMem ensuring no PHI is sent to cloud transcription services.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 70% reduction in documentation time, improved physician satisfaction, HIPAA-compliant logs
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Medication Safety Checks</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Pharmacists manually review medication orders for interactions, contraindications, and dosing errors—missing subtle risks.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Deploy AI to cross-reference patient allergies, current medications, and lab values against new prescriptions. SecuraMem logs every safety alert so you can defend clinical decisions in malpractice cases.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 85% reduction in adverse drug events, defensible audit trail for quality reviews
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Clinical Trial Patient Matching</h3>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">Scenario:</strong> Research coordinators manually screen thousands of patient records to identify clinical trial candidates—missing eligible patients.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong className="text-slate-900">SecuraMem Solution:</strong> Use LLM to analyze EHR data and match patients to trial inclusion/exclusion criteria. SecuraMem prevents PHI exfiltration and logs all candidate selections for IRB review.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-semibold">
                    ✓ Result: 3x faster trial enrollment, zero risk of PHI leakage to sponsors
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why SecuraMem for Healthcare AI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The only AI audit and compliance layer purpose-built for clinical environments
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">HIPAA-Compliant Audit Logs</h3>
              <p className="text-slate-700">
                Cryptographically-signed audit trail of every AI inference satisfies HIPAA Security Rule requirements and OCR audit expectations. Prove compliance in minutes.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">PHI Never Leaves Your Network</h3>
              <p className="text-slate-700">
                100MB binary runs entirely on-prem or in your private cloud. Zero internet dependency. Perfect for hospital data centers and air-gapped research labs.
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
                Semantic firewall stops prompt injection attacks that could trick AI into revealing PHI or violating clinical protocols. Protects patient privacy and clinical safety.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Malpractice Defense Ready</h3>
              <p className="text-slate-700">
                Immutable logs prove exactly what patient data the AI analyzed and how it reached clinical recommendations—critical for defending malpractice claims.
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
          <h2 className="text-3xl font-bold mb-6">Deploy in Your Clinical Environment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">5-Minute Setup</h3>
              <div className="bg-slate-800 rounded-lg p-6 font-mono text-sm space-y-2">
                <div className="text-emerald-400">$ smrust init</div>
                <div className="text-slate-400"># Configure local LLM endpoint</div>
                <div className="text-emerald-400">$ smrust firewall --port 3051</div>
                <div className="text-slate-400"># Enable audit logging + firewall</div>
                <div className="text-emerald-400">$ smrust verify</div>
                <div className="text-cyan-400">✓ Audit chain valid, PHI protected</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Clinical Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Works with Epic, Cerner, and custom EHR integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>HL7/FHIR-compatible audit event logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>HIPAA-compliant encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Real-time alerting via SIEM integration</span>
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
              Ready to Deploy SecuraMem?
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Protect your clinical and operational workflows
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Contact us to discuss deployment options, custom pricing, and how SecuraMem ensures HIPAA compliance and clinical decision auditability.
            </p>
            <a
              href="mailto:jeremy@securamem.com?subject=Healthcare%20AI%20Deployment%20Information"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-trust-blue-600 hover:bg-slate-50 rounded-xl font-bold text-xl shadow-2xl transition-all"
            >
              Contact Sales
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
