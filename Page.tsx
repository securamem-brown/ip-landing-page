'use client';

import React, { useState } from 'react';
import { Shield, Lock, CheckCircle, ArrowRight, Download, Calendar, Code, Building, Globe, Zap, FileText, AlertTriangle, Target } from 'lucide-react';

export default function SecuraMemAcquisitionPage() {
  const [activeTab, setActiveTab] = useState('platforms');

  const acquisitionMetrics = [
    { label: "Operational Completion", value: "93%", icon: CheckCircle },
    { label: "Compliance Certifications", value: "4+", icon: Shield },
    { label: "Signature Workflows", value: "5", icon: FileText },
    { label: "Development Timeline Saved", value: "18-24mo", icon: Zap }
  ];

  const certifications = [
    "FedRAMP Ready",
    "ISO/IEC 23894",
    "NIST AI RMF",
    "SOC 2 Type II"
  ];

  const valueProps = {
    platforms: {
      title: "AI Platform Companies",
      subtitle: "Anthropic, OpenAI, Cohere, Mistral",
      benefits: [
        "Unlock $47B+ enterprise/government market your cloud-only architecture can't serve",
        "Immediate defense, healthcare, banking deployment capability",
        "Differentiation against cloud-locked competitors",
        "Strategic moat: only production-ready air-gapped AI workflow infrastructure"
      ]
    },
    cloud: {
      title: "Cloud Infrastructure Providers",
      subtitle: "AWS, Google Cloud, Azure, Oracle",
      benefits: [
        "Defensive play against air-gapped competition (Google Distributed Cloud, etc.)",
        "Complete your sovereign AI offering without 2+ years of internal development",
        "Retain enterprise customers requiring on-premise/air-gapped deployment",
        "Bundle with existing compliance/security products for upsell revenue"
      ]
    },
    defense: {
      title: "Defense & Gov Tech Contractors",
      subtitle: "Palantir, Booz Allen, SAIC, Leidos",
      benefits: [
        "Commercial-ready AI compliance layer for classified environments",
        "Court-admissible cryptographic audit trail (first-of-kind)",
        "Instant credibility in AI-powered government RFP responses",
        "Accelerate AI solution delivery by 18-24 months per program"
      ]
    },
    vc: {
      title: "VC Firms & Portfolio Strategy",
      subtitle: "Strategic mandate across investments",
      benefits: [
        "Mandate SecuraMem across portfolio: instant compliance layer for all AI startups",
        "Create network effects through portfolio-wide adoption",
        "Differentiate portfolio companies in enterprise sales cycles",
        "Unified air-gapped AI standard increases individual exit valuations"
      ]
    }
  };

  const workflowTemplates = [
    {
      name: "Autonomous Security Sentinel",
      industry: "Security & Compliance",
      description: "Continuous system monitoring + AI threat analysis with cryptographic posture evidence",
      compliance: ["NIST-800-53", "ISO-27001"],
      runtime: "Real-time"
    },
    {
      name: "Banking KYC Analyzer",
      industry: "Financial Services",
      description: "Identity document processing with verifiable anti-tamper evidence streams",
      compliance: ["PCI-DSS", "GLBA"],
      runtime: "Batch processing"
    },
    {
      name: "Clinical Data Processor",
      industry: "Healthcare",
      description: "PHI/PII handling (OCR → redact → summarize) with court-admissible receipts",
      compliance: ["HIPAA", "HITECH"],
      runtime: "~2m per document"
    },
    {
      name: "AI-Native IDE Assistant",
      industry: "Software Development",
      description: "Local code intelligence with cryptographic suggestion provenance",
      compliance: ["GDPR", "SOC 2"],
      runtime: "Millisecond response"
    },
    {
      name: "SOC Security Runbook",
      industry: "Defense & Intelligence",
      description: "Log correlation → incident playbook with air-gapped signed chain",
      compliance: ["NIST SP 800-171", "CMMC"],
      runtime: "<10m execution"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold">SecuraMem</h1>
              <p className="text-xs text-slate-400">Air-Gapped AI Infrastructure</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300">
              Built for Acquisition
            </span>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Pitch Deck
            </button>
            <button className="px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Call
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Strategic Acquisition Opportunity • $25-50M Valuation
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            The Air-Gapped AI Infrastructure
            <br />Every Platform Needs
          </h1>
          
          <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
            Production-ready sovereign AI workflow platform enabling enterprise deployment in defense, healthcare, banking, and government—markets worth $47B+ that cloud-only architectures cannot serve.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 shadow-lg shadow-blue-600/20">
              Schedule Acquisition Discussion
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 rounded-lg font-bold text-lg transition-colors flex items-center gap-3">
              <Download className="w-5 h-5" />
              View Technical Architecture
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            <Lock className="w-4 h-4 inline mr-2" />
            NDA required for source code review • Selective discussions underway
          </p>
        </div>
      </section>

      {/* Acquisition-Ready Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-y border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Acquisition-Ready Status</h2>
          <p className="text-slate-400">Production-complete infrastructure with full compliance certifications</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {acquisitionMetrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <metric.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-slate-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Included in Acquisition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-300 mb-3">Technical Assets</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Complete source code + documentation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  5 signature workflow templates (production-tested)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Cryptographic audit infrastructure (ED25519 + SHA-256)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Integration specifications for major AI platforms
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-300 mb-3">Compliance & IP</h4>
              <ul className="space-y-2 text-slate-400">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    {cert} certification complete
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Opportunity */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Strategic Opportunity</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Major AI platforms excel at cloud deployment but systematically lose enterprise deals requiring sovereign, air-gapped operation. SecuraMem is the bridge infrastructure that unlocks this entire market segment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-950/20 border-2 border-red-900/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold">The Problem</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">×</span>
                <span>Cloud-only AI platforms lose $47B+ in annual enterprise deals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">×</span>
                <span>Defense, healthcare, banking require sovereign deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">×</span>
                <span>Building air-gapped infrastructure internally: 18-24 months</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">×</span>
                <span>Compliance certifications add 12-18 months more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">×</span>
                <span>No court-admissible audit trail in existing solutions</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-950/20 border-2 border-green-900/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">The Solution</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Production-ready air-gapped AI workflow platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>All major compliance certifications complete (93%)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Immediate deployment capability across regulated industries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>Cryptographic audit infrastructure (court-admissible)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>5 productized workflow templates included</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-950/20 border border-blue-900/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Time Advantage</h3>
          <p className="text-lg text-slate-300 mb-6">
            Build internally: <span className="text-red-400 font-bold">24-42 months</span> (development + compliance)<br />
            Acquire SecuraMem: <span className="text-green-400 font-bold">Immediate</span> (93% complete, integration-ready)
          </p>
          <p className="text-slate-400 text-sm">
            By the time competitors build equivalent infrastructure, you've captured 2+ years of market share in the sovereign AI segment.
          </p>
        </div>
      </section>

      {/* Strategic Value by Acquirer Type */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-y border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Strategic Value by Acquirer Type</h2>
          <p className="text-xl text-slate-400">Transformative infrastructure for multiple strategic buyer profiles</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {Object.keys(valueProps).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {valueProps[key].title.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-10">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">{valueProps[activeTab].title}</h3>
            <p className="text-slate-400 text-lg">{valueProps[activeTab].subtitle}</p>
          </div>
          
          <div className="space-y-4">
            {valueProps[activeTab].benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Templates */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Productized Workflow Templates</h2>
          <p className="text-xl text-slate-400">Production-tested, compliance-certified templates included in acquisition</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowTemplates.map((template, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-800 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{template.name}</h3>
                  <p className="text-sm text-blue-400">{template.industry}</p>
                </div>
                <Code className="w-6 h-6 text-slate-600" />
              </div>
              
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">{template.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {template.compliance.map((cert, certIdx) => (
                  <span key={certIdx} className="px-2 py-1 bg-green-950/30 border border-green-900/30 rounded text-xs text-green-400">
                    {cert}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <Zap className="w-3 h-3" />
                {template.runtime}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Architecture Overview</h2>
          <p className="text-xl text-slate-400">Glass-box AI infrastructure with cryptographic auditability</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <Lock className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Cryptographic Spine</h3>
            <p className="text-slate-400 mb-4">
              Every workflow execution produces court-admissible receipts with ED25519 signatures and SHA-256 digests per step.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>• Immutable audit trail</li>
              <li>• Deterministic replay capability</li>
              <li>• Tamper-evident chain linking</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <Globe className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Sovereign Operation</h3>
            <p className="text-slate-400 mb-4">
              Model-agnostic platform operates fully air-gapped with zero external dependencies or telemetry.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>• Offline-first architecture</li>
              <li>• Replaceable cryptographic keys</li>
              <li>• No cloud lock-in</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <FileText className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Declarative YAML</h3>
            <p className="text-slate-400 mb-4">
              Human-readable workflow definitions with policy enforcement at the template layer.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>• NO_TELEMETRY enforcement</li>
              <li>• OFFLINE_STRICT mode</li>
              <li>• Version-controlled templates</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-slate-950/50 border border-slate-700 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold">Public Key Fingerprint</h3>
          </div>
          <code className="text-sm text-slate-400 font-mono bg-slate-900 px-4 py-3 rounded block overflow-x-auto">
            d870deeac602a4a32110490b8b94945267d1c16f2402cc93e04cf10baac98923
          </code>
        </div>
      </section>

      {/* Why Acquire Now */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Acquire Now</h2>
          <p className="text-xl text-slate-400">Market forces creating immediate strategic urgency</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-amber-400" />
              Market Timing
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-2xl leading-none">1</span>
                <div>
                  <strong>Enterprise AI adoption accelerating</strong> in regulated industries (defense, healthcare, banking)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-2xl leading-none">2</span>
                <div>
                  <strong>Sovereign AI mandates</strong> emerging globally (EU AI Act, US executive orders, data localization laws)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-2xl leading-none">3</span>
                <div>
                  <strong>Cloud-only competitors</strong> losing deals at scale (Tabnine, Google, others pivoting to air-gapped)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-2xl leading-none">4</span>
                <div>
                  <strong>First-mover advantage</strong> in court-admissible AI audit infrastructure
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-7 h-7 text-blue-400" />
              Competitive Advantage
            </h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl leading-none">1</span>
                <div>
                  <strong>Only production-ready platform</strong> with full compliance stack (competitors 18-24 months behind)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl leading-none">2</span>
                <div>
                  <strong>Cryptographic audit moat</strong> creates switching costs for customers
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl leading-none">3</span>
                <div>
                  <strong>Model-agnostic architecture</strong> prevents vendor lock-in concerns
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-2xl leading-none">4</span>
                <div>
                  <strong>Strategic defensibility</strong> through compliance certification complexity
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-950 to-purple-950 border-2 border-blue-800 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Begin Acquisition Discussion</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SecuraMem represents the missing infrastructure layer for sovereign AI deployment. Strategic discussions are selective and NDA-protected.
          </p>
          
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-bold text-lg transition-colors flex items-center gap-3 shadow-lg">
              <Calendar className="w-5 h-5" />
              Schedule Technical Deep Dive
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-colors flex items-center gap-3">
              <Download className="w-5 h-5" />
              Download Full Pitch Deck
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">$25-50M</div>
              <div className="text-slate-400">Valuation Range</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">93%</div>
              <div className="text-slate-400">Operational Complete</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">NDA</div>
              <div className="text-slate-400">Required for Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-lg">SecuraMem</span>
              </div>
              <p className="text-sm text-slate-400">
                Air-gapped AI infrastructure for sovereign enterprise deployment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Acquisition</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Pitch Deck</a></li>
                <li><a href="#" className="hover:text-white">Technical Docs</a></li>
                <li><a href="#" className="hover:text-white">Source Code Review</a></li>
                <li><a href="#" className="hover:text-white">Licensing Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Architecture</a></li>
                <li><a href="#" className="hover:text-white">Workflow Templates</a></li>
                <li><a href="#" className="hover:text-white">Compliance</a></li>
                <li><a href="#" className="hover:text-white">Integration Specs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Acquisition Inquiries</a></li>
                <li><a href="#" className="hover:text-white">Technical Questions</a></li>
                <li><a href="#" className="hover:text-white">NDA Request</a></li>
                <li><a href="#" className="hover:text-white">Schedule Call</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2025 SecuraMem (17342926 Canada Inc.). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">NDA Template</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}