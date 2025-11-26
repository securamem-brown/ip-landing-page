'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Lock, CheckCircle, ArrowRight, Download, Calendar,
  Code, Globe, Zap, FileText, AlertTriangle,
  Award, Rocket, Layers, Terminal, Database, Activity,
  Eye, Scale, Building2, Gavel, Brain, TrendingUp, Target, Users
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Animated Section Component
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Removed FloatingParticles - clean professional design doesn't need animated particles

export default function SecuraMemLanding() {
  const [activeTab, setActiveTab] = useState('insurance');
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const productionMetrics = [
    { label: "Jailbreak Detection Rate", value: "90-100%", icon: Shield, color: "text-emerald-400" },
    { label: "Deployment Time", value: "15 min", icon: Zap, color: "text-cyan-400" },
    { label: "External Dependencies", value: "Zero", icon: FileText, color: "text-purple-400" },
    { label: "Test Pass Rate", value: "100%", icon: CheckCircle, color: "text-amber-400" }
  ];

  const valueProps: Record<string, any> = {
    insurance: {
      title: "AI Liability Insurers",
      subtitle: "Lloyd's, AIG, Chubb, Coalition, At-Bay",
      tagline: "30-day pilot proves ROI: Reduce AI liability claims exposure and price policies with data-backed risk models.",
      icon: Shield,
      benefits: [
        "Cryptographic proof of AI decisions for claims investigation (court-admissible evidence)",
        "NeuroWall firewall reduces claims by blocking 90-100% of jailbreak attempts pre-incident",
        "Actuarial data: Risk modeling based on real AI threat patterns and user behavior",
        "Mandate SecuraMem deployment as policy requirement (like dashcams for auto insurance)"
      ]
    },
    healthtech: {
      title: "HealthTech & Medical AI",
      subtitle: "Epic, Tempus, PathAI, Paige.AI, Butterfly",
      tagline: "30-day pilot delivers: HIPAA-compliant audit trail, FDA-ready documentation, and malpractice risk reduction.",
      icon: Activity,
      benefits: [
        "HIPAA §164.312(b) compliant out-of-the-box: immutable audit controls, tamper detection",
        "FDA 21 CFR Part 11 ready: cryptographic signatures meet electronic records requirements",
        "Medical malpractice defense: cryptographic proof shifts liability from hospital to AI vendor",
        "De-risk FDA approval with built-in audit compliance and decision provenance"
      ]
    },
    legaltech: {
      title: "LegalTech & eDiscovery",
      subtitle: "Relativity, Everlaw, Casetext, Harvey, Disco",
      tagline: "30-day pilot outcome: Bar-compliant AI work product, sanctions-proof eDiscovery, and malpractice protection.",
      icon: Gavel,
      benefits: [
        "Federal Rules of Evidence 902(13): Ed25519 signatures create self-authenticating records",
        "Attorney-client privilege protection: Air-gapped deployment prevents data exfiltration",
        "eDiscovery defensibility: Hash chain proves search completeness, no selective deletion",
        "Win BigLaw contracts: Cryptographic proof meets Bar ethics rules for AI-assisted work"
      ]
    }
  };


  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-trust-blue-500 to-trust-teal-500 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-trust-navy-900 border-b border-trust-navy-800/50 sticky top-0 z-40 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Shield className="w-8 h-8 text-trust-teal-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">SecuraMem</h1>
                <p className="text-xs text-trust-navy-300">The AI Flight Recorder™</p>
              </div>
            </motion.div>
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6 text-sm">
                <a href="/insurance" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Insurance
                </a>
                <a href="/healthcare" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Healthcare
                </a>
                <a href="/legal" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Legal
                </a>
                <a href="/enterprise" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Enterprise
                </a>
                <a href="/docs" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Docs
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <motion.span
                  className="hidden md:block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-semibold text-emerald-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Production-Ready Now
                </motion.span>
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Request%20Demo%20%26%20Defense%20Kit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-trust-blue-500 hover:bg-trust-blue-600 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Request Demo
                </motion.a>
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Schedule%20Live%20Demo%20Call"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border-2 border-trust-teal-400 text-trust-teal-400 hover:bg-trust-teal-50 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Call
                </motion.a>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-trust-navy-900 via-trust-navy-800 to-trust-navy-900 relative">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-trust-teal-500/10 border border-trust-teal-400/30 rounded-full text-trust-teal-300 text-sm font-semibold mb-8"
              >
                <Shield className="w-4 h-4" />
                THE AI FLIGHT RECORDER™
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white"
              >
                When Your AI Makes a Mistake,
                <br />
                <span className="text-trust-teal-300">Can You Prove What Happened?</span>
              </motion.h1>

              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              SecuraMem is the <span className="text-cyan-400 font-semibold">AI Black Box Recorder</span> that provides <span className="text-emerald-400 font-semibold">court-admissible cryptographic proof</span> of every AI decision. Our <span className="text-purple-400 font-semibold">NeuroWall semantic firewall</span> blocks 90-100% of jailbreak attempts <span className="text-cyan-400 font-semibold">before they reach your LLM</span>. Deploy in minutes with a <span className="text-emerald-400 font-semibold">100MB single binary—no cloud, no dependencies, no risk</span>.
            </motion.p>

            {/* Demo Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12 max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8RjfMskvC_4"
                    title="SecuraMem Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <p className="text-center text-slate-400 text-sm mt-4">
                Watch SecuraMem in action: cryptographic audit trails and jailbreak prevention
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-6 mb-12 flex-wrap"
            >
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Start%2030-Day%20Pilot%20Program%20-%20%2415K"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl font-bold text-lg flex items-center gap-3 shadow-2xl shadow-cyan-600/30"
              >
                Start 30-Day Pilot — $15K
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Schedule%20Live%20Demo"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-slate-400 text-white rounded-xl font-bold text-lg flex items-center gap-3 backdrop-blur-sm hover:bg-white/10"
              >
                <Calendar className="w-5 h-5" />
                Schedule Live Demo
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-slate-400 text-sm flex items-center justify-center gap-2 mb-4"
            >
              <CheckCircle className="w-4 h-4" />
              30-day pilot: 3 machine licenses • Proof of value guaranteed • Additional licenses available
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <a
                href="/docs"
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 underline decoration-dotted underline-offset-4"
              >
                <FileText className="w-4 h-4" />
                View Partner Pitch Deck
              </a>
            </motion.div>
          </motion.div>
          </div>
        </section>

        {/* Production Metrics */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-20 border-y border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Production-Ready Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-xl">
              Deploy in 15 minutes • Full compliance out-of-the-box • Zero ongoing maintenance
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {productionMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
                className="glass-effect border border-slate-800/50 rounded-2xl p-8 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold mb-3 gradient-text"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Technical Architecture Deep Dive - 3 Layer System + NeuroWall */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold mb-6"
            >
              <Layers className="w-4 h-4" />
              Rust-Hardened 4-Layer Architecture
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
              Technical Architecture Deep Dive
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-4xl mx-auto">
              Air-gapped, zero-dependency Rust system with cryptographic chain-of-custody and court-admissible audit trails
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                layer: "L1",
                icon: Scale,
                title: "Compliance & Legal Node",
                color: "from-cyan-600 to-emerald-600",
                bgGradient: "from-cyan-950/30 to-emerald-950/10",
                borderColor: "border-cyan-800/50",
                features: [
                  "Ed25519 + SHA-256 cryptographic proofs",
                  "Blockchain-style hash chain",
                  "Court-admissible audit receipts",
                  "Immutable SQLite WAL storage"
                ],
                description: "Every AI decision tracked with cryptographic evidence"
              },
              {
                layer: "L2",
                icon: Database,
                title: "Audit Ledger (Rust)",
                color: "from-amber-600 to-orange-600",
                bgGradient: "from-amber-950/30 to-orange-950/10",
                borderColor: "border-amber-800/50",
                features: [
                  "Immutable append-only ledger",
                  "Embedded SQLite (zero dependencies)",
                  "SHA-256 tamper detection",
                  "Genesis entry bootstrap"
                ],
                description: "Blockchain-style audit chain with permanent attribution"
              },
              {
                layer: "L3",
                icon: Activity,
                title: "Enterprise Monitoring Node",
                color: "from-purple-600 to-pink-600",
                bgGradient: "from-purple-950/30 to-pink-950/10",
                borderColor: "border-purple-800/50",
                features: [
                  "Prometheus metrics (127.0.0.1:3050)",
                  "Axum REST API for health checks",
                  "Real-time compliance dashboards",
                  "Automated policy enforcement"
                ],
                description: "Enterprise-grade observability without external telemetry"
              },
              {
                layer: "FW",
                icon: Shield,
                title: "NeuroWall Semantic Firewall",
                color: "from-emerald-600 to-green-600",
                bgGradient: "from-emerald-950/30 to-green-950/10",
                borderColor: "border-emerald-800/50",
                features: [
                  "384D ONNX embeddings (all-MiniLM-L6-v2)",
                  "90.56% - 100% jailbreak detection rate",
                  "SIMD-optimized: AVX2, FMA, F16C",
                  "All decisions logged to audit chain"
                ],
                description: "Semantic threat detection with embedded AI model (fully offline)"
              }
            ].map((layer, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                }}
                className={`glass-effect border-2 ${layer.borderColor} rounded-2xl p-6 bg-gradient-to-br ${layer.bgGradient} group cursor-pointer relative overflow-hidden`}
              >
                {/* Animated layer badge */}
                <motion.div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center text-white font-bold text-sm`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {layer.layer}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4"
                >
                  <layer.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {layer.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* CLI Commands Showcase - Updated for Rust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect border border-slate-800/50 rounded-2xl p-10 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Terminal className="w-10 h-10 text-green-400" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold">Production-Ready Rust CLI</h3>
                <p className="text-slate-700">Single hardened binary (100MB with embedded ONNX model)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  command: "$ smrust init",
                  description: "Initialize air-gapped workspace with Ed25519 cryptographic identity",
                  output: "✓ ED25519 keypair generated\n✓ Genesis entry created\n✓ Policy enforced: AIR_GAPPED"
                },
                {
                  command: "$ smrust firewall --openai-api-key $KEY --port 3051",
                  description: "Start NeuroWall semantic firewall (tested: 90.56% - 100% jailbreak blocking)",
                  output: "🛡️  NeuroWall listening on 127.0.0.1:3051\n✓ SIMD: AVX2/FMA/F16C activated\n✓ Forbidden concepts: 4 embeddings computed\n✓ Similarity threshold: 80%"
                },
                {
                  command: "$ smrust verify",
                  description: "Verify entire audit chain integrity (SHA-256 hash validation)",
                  output: "✓ AUDIT CHAIN INTEGRITY CONFIRMED\n  Total entries verified: 1,247\n  Genesis → Latest: VALID"
                },
                {
                  command: "$ smrust status",
                  description: "Real-time compliance posture and system health",
                  output: "SecuraMem Status:\n  Mode: Audit-Only (AI Black Box)\n  Total Entries: 1,247\n  L2 norm: 1.000000 (perfect unit vectors)"
                }
              ].map((cmd, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 font-mono text-sm shadow-sm"
                >
                  <motion.div
                    className="text-green-400 font-bold mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {cmd.command}
                  </motion.div>
                  <p className="text-slate-500 text-xs mb-4 font-sans">{cmd.description}</p>
                  <div className="text-slate-400 text-xs whitespace-pre-line leading-relaxed border-t border-slate-800 pt-3">
                    {cmd.output}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rust Technical Stack Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-amber-200 rounded-2xl p-10 mb-16 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-10 h-10 text-amber-400" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold">Rust Technical Stack</h3>
                <p className="text-slate-700">Zero external dependencies, hardened release profile</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "ONNX Inference", value: "tract-onnx 0.21", color: "text-blue-400" },
                { label: "Cryptography", value: "Ed25519-Dalek + Ring", color: "text-emerald-400" },
                { label: "Storage", value: "SQLx (SQLite WAL)", color: "text-purple-400" },
                { label: "Web Server", value: "Axum 0.7 (Tokio)", color: "text-cyan-400" },
                { label: "Tokenization", value: "HuggingFace Tokenizers", color: "text-pink-400" },
                { label: "Build Profile", value: "LTO + Strip + Size Opt", color: "text-amber-400" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className={`text-sm font-bold ${item.color}`}>{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-bold mb-8 flex items-center justify-center gap-3"
            >
              <Shield className="w-8 h-8 text-cyan-400" />
              Compliance & Regulatory Alignment
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "GDPR Art. 22 & 25", color: "bg-cyan-950/50 border-cyan-800/50 text-cyan-400" },
                { name: "EU AI Act Ready", color: "bg-purple-950/50 border-purple-800/50 text-purple-400" },
                { name: "NIST RMF Level 4", color: "bg-emerald-950/50 border-emerald-800/50 text-emerald-400" },
                { name: "SOX 404", color: "bg-amber-950/50 border-amber-800/50 text-amber-400" },
                { name: "ISO 27001", color: "bg-cyan-950/50 border-cyan-800/50 text-cyan-400" },
                { name: "PIPEDA", color: "bg-pink-950/50 border-pink-800/50 text-pink-400" },
                { name: "HIPAA Ready", color: "bg-green-950/50 border-green-800/50 text-green-400" },
                { name: "FedRAMP Track", color: "bg-red-950/50 border-red-800/50 text-red-400" }
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  className={`px-6 py-3 ${cert.color} border rounded-xl font-semibold text-sm backdrop-blur-sm`}
                >
                  {cert.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Why This Matters - Stakeholder Value */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24 border-y border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
              Why This Matters
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-4xl mx-auto">
              Transformative value across every stakeholder in the AI ecosystem
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Code,
                title: "For Developers",
                color: "text-cyan-400",
                gradient: "from-cyan-950/30 to-cyan-900/10",
                border: "border-cyan-800/50",
                benefits: [
                  "Single Rust binary (no Node.js runtime)",
                  "Cryptographic proof for every AI decision",
                  "Semantic firewall blocks jailbreaks automatically",
                  "Full source code transparency (production-ready)"
                ]
              },
              {
                icon: Building2,
                title: "For Enterprises",
                color: "text-emerald-400",
                gradient: "from-emerald-950/30 to-emerald-900/10",
                border: "border-emerald-800/50",
                benefits: [
                  "Deploy AI in classified/air-gapped environments",
                  "Zero data exfiltration risk (no external APIs)",
                  "NeuroWall semantic threat detection (pre-LLM)",
                  "Instant compliance for regulated industries"
                ]
              },
              {
                icon: Globe,
                title: "For Governments",
                color: "text-purple-400",
                gradient: "from-purple-950/30 to-purple-900/10",
                border: "border-purple-800/50",
                benefits: [
                  "Sovereign AI without foreign cloud dependencies",
                  "National security-grade isolation",
                  "Democratic oversight of AI decisions",
                  "EU AI Act and GDPR compliant"
                ]
              },
              {
                icon: Gavel,
                title: "For Law Firms",
                color: "text-amber-400",
                gradient: "from-amber-950/30 to-amber-900/10",
                border: "border-amber-800/50",
                benefits: [
                  "Court-admissible cryptographic evidence",
                  "Attorney-client privilege preservation",
                  "Chain-of-custody for document handling",
                  "Tamper-evident audit trails (hash chain)"
                ]
              },
              {
                icon: Eye,
                title: "For Auditors",
                color: "text-cyan-400",
                gradient: "from-cyan-950/30 to-cyan-900/10",
                border: "border-cyan-800/50",
                benefits: [
                  "Deterministic replay of AI workflows",
                  "Immutable audit trail (cannot be deleted)",
                  "SOX 404 and ISO 27001 ready",
                  "Automated compliance reporting"
                ]
              },
              {
                icon: Brain,
                title: "For AI Safety",
                color: "text-pink-400",
                gradient: "from-pink-950/30 to-pink-900/10",
                border: "border-pink-800/50",
                benefits: [
                  "Glass-box AI with full transparency",
                  "Semantic firewall detects prompt injection",
                  "Zero-trust security model (Rust memory safety)",
                  "Verifiable alignment with human oversight"
                ]
              }
            ].map((stakeholder, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                className={`glass-effect border-2 ${stakeholder.border} rounded-2xl p-8 bg-gradient-to-br ${stakeholder.gradient} group`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <stakeholder.icon className={`w-12 h-12 ${stakeholder.color}`} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {stakeholder.title}
                </h3>

                <div className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIdx) => (
                    <motion.div
                      key={benefitIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIdx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Pilot Program Value - Why Regulated Industries Choose SecuraMem */}
        <AnimatedSection className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                Why Regulated Industries Choose <span className="text-cyan-400">30-Day SecuraMem Pilots</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-2xl text-slate-700 max-w-4xl mx-auto">
                Prove AI compliance value in production without cloud dependency or vendor lock-in.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* The Problem */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgb(6, 182, 212)' }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                  <h3 className="text-2xl font-bold">The Problem</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Healthcare systems won't send PHI to third-party clouds",
                    "Financial institutions can't route trade secrets through external APIs",
                    "Government agencies require sovereign, air-gapped deployment",
                    "Law firms face malpractice liability for cloud AI usage"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* What SecuraMem Unlocks */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: 'rgb(6, 182, 212)' }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold">What SecuraMem Unlocks</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { label: 'Zero-cloud deployment', desc: 'for regulated industries' },
                    { label: 'Cryptographic audit trails', desc: 'that satisfy legal/compliance requirements' },
                    { label: 'Semantic threat detection', desc: 'without external dependencies' },
                    { label: 'Single 100MB binary', desc: 'that runs anywhere—on-premises, air-gapped, or sovereign' }
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-cyan-400 mt-1">▸</span>
                      <div>
                        <strong className="text-slate-900">{item.label}</strong> {item.desc}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Market Gap Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-blue-200 rounded-2xl p-10 text-center mb-12 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-10 h-10 text-cyan-400" />
                <h3 className="text-3xl font-bold">Pilot Program Pricing</h3>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-cyan-400 mb-4">
                $15K
              </div>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-6">
                30-day pilot includes 3 machine licenses, full deployment support, and integration guidance
              </p>
              <div className="flex flex-col gap-2 text-sm text-slate-600 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>3 machine licenses included (on-premises, air-gapped deployment)</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Full integration support and technical guidance</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Production-ready in 15 minutes • Additional licenses available post-pilot</span>
                </div>
              </div>
            </motion.div>

            {/* Pilot Program CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-white border border-slate-200 rounded-2xl p-10 shadow-lg"
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <p className="text-2xl font-semibold text-slate-800 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join insurance providers, healthcare systems, law firms, and enterprises proving AI compliance in production—<span className="text-cyan-400">risk-free for 30 days</span>.
              </p>
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Start%2030-Day%20Pilot%20Program%20-%20%2415K"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-xl shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 70px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-6 h-6" />
                Start Your 30-Day Pilot
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* AI Liability Gap - Technical Context */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
              The AI Liability Gap
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-4xl mx-auto">
              When AI makes a wrong decision in healthcare, finance, or legal contexts, can you prove in court
              what actually happened? Most AI systems offer logging—SecuraMem provides <span className="text-emerald-400 font-semibold">forensic-grade
              cryptographic evidence</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-red-200 rounded-2xl p-10 shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </motion.div>
                <h3 className="text-3xl font-bold">Without SecuraMem</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                {[
                  "AI malpractice lawsuits require proof of what the AI actually did",
                  "Standard logs can be altered, deleted, or challenged in court",
                  "No cryptographic proof = 'he said, she said' liability disputes",
                  "Jailbreak attacks bypass safety controls without detection",
                  "Insurance underwriters can't price risk without verifiable data"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-400 font-bold mt-1 text-xl">×</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-emerald-200 rounded-2xl p-10 shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </motion.div>
                <h3 className="text-3xl font-bold">With SecuraMem</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                {[
                  "Court-admissible cryptographic receipts (Ed25519 + SHA-256)",
                  "NeuroWall firewall: 90-100% jailbreak blocking (E2E tested)",
                  "Immutable hash chain prevents retroactive tampering",
                  "Deploy in 15 minutes: 100MB binary, zero cloud dependencies",
                  "HIPAA, FDA 21 CFR Part 11, FRE 902(13) compliant out-of-the-box"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-400 font-bold mt-1 text-xl">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-effect border border-cyan-900/30 rounded-2xl p-10 text-center"
          >
            <Rocket className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Deploy in Minutes, Not Months</h3>
            <p className="text-xl text-slate-700 mb-6">
              <span className="text-emerald-400 font-bold">15-minute deployment:</span> Single 100MB binary, zero configuration<br />
              <span className="text-cyan-400 font-bold">Instant compliance:</span> HIPAA, FDA, FRE ready out-of-the-box<br />
              <span className="text-purple-400 font-bold">No cloud lock-in:</span> Fully air-gapped, works offline
            </p>
            <p className="text-slate-400">
              Start protecting your AI from liability today. No vendor lock-in, no ongoing cloud costs, no security reviews.
              Just cryptographic proof when you need it most.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Built for Your Industry */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24 border-y border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Built for Your Industry
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400">
              Forensic-grade AI audit trails tailored to liability-critical industries
            </motion.p>
          </motion.div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {Object.keys(valueProps).map((key) => {
              const Icon = valueProps[key].icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white text-slate-600 hover:text-slate-900 border-2 border-slate-200 hover:border-trust-blue-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {valueProps[key].title.split(' ')[0]}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect border border-slate-800/50 rounded-2xl p-12"
          >
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-3">{valueProps[activeTab].title}</h3>
              <p className="text-slate-600 text-xl mb-4">{valueProps[activeTab].subtitle}</p>
              <p className="text-2xl font-bold text-cyan-400 italic">
                &ldquo;{valueProps[activeTab].tagline}&rdquo;
              </p>
            </div>

            <div className="space-y-4">
              {valueProps[activeTab].benefits.map((benefit: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                  className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Technical Architecture */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Technical Architecture Overview
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400">
              Glass-box AI infrastructure with cryptographic auditability
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Lock,
                title: "Cryptographic Spine",
                description: "Every workflow execution produces court-admissible receipts with Ed25519 signatures and SHA-256 digests per step.",
                features: ["Immutable audit trail", "Deterministic replay capability", "Blockchain-style chain linking"],
                color: "text-blue-400"
              },
              {
                icon: Globe,
                title: "Sovereign Operation",
                description: "Single Rust binary operates fully air-gapped with zero external dependencies (no Node.js runtime).",
                features: ["Offline-first architecture", "Embedded ONNX model", "No cloud lock-in"],
                color: "text-emerald-400"
              },
              {
                icon: FileText,
                title: "Hardened Binary",
                description: "Production-optimized with LTO, stripped symbols, and size optimization (opt-level = 'z').",
                features: ["Fat LTO (link-time optimization)", "Panic = abort", "Overflow checks enabled"],
                color: "text-purple-400"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-effect border border-slate-800/50 rounded-2xl p-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className={`w-14 h-14 ${item.color} mb-6`} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3 text-sm text-slate-500">
                  {item.features.map((feature, featureIdx) => (
                    <motion.li
                      key={featureIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: featureIdx * 0.1 }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-effect border border-slate-700/50 rounded-2xl p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">Rust Build Hash (Reproducible)</h3>
            </div>
            <motion.code
              className="text-sm text-slate-700 font-mono bg-white px-6 py-4 rounded-xl block overflow-x-auto border border-slate-200"
              whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}
            >
              SHA-256: f3fd2701a1bf8daff84b3d3faf5bf738a78fb6f4d1e2a9466dadcf9455728ab1
            </motion.code>
          </motion.div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-slate-200 rounded-3xl p-16 text-center shadow-xl relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-emerald-600/20 to-teal-600/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <Award className="w-full h-full text-cyan-400" />
              </motion.div>

              <h2 className="text-5xl font-bold mb-6 text-slate-900">Start Your 30-Day Pilot Today</h2>
              <p className="text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join <span className="text-emerald-600 font-semibold">insurance providers, healthcare systems, law firms, and enterprises</span> proving AI compliance in production with <span className="text-cyan-600 font-semibold">court-admissible audit trails</span>.
                <strong className="block mt-4 text-cyan-600">$15K for 30 days • 3 machine licenses included • Additional licenses available</strong>
              </p>

              <div className="flex justify-center gap-6 mb-12 flex-wrap">
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Start%2030-Day%20Pilot%20Program%20-%20%2415K"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-emerald-500 text-white hover:bg-emerald-600 rounded-xl font-bold text-xl flex items-center gap-3 shadow-2xl"
                >
                  <Rocket className="w-6 h-6" />
                  Start 30-Day Pilot — $15K
                </motion.a>
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Schedule%20Live%20Demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-xl flex items-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
                  Schedule Live Demo
                </motion.a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { value: "15 min", label: "Deployment Time", color: "text-emerald-600" },
                  { value: "30 days", label: "Pilot Duration", color: "text-cyan-600" },
                  { value: "$15K", label: "Pilot Pricing", color: "text-purple-600" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <motion.div
                      className={`text-4xl font-bold ${stat.color} mb-2`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 glass-effect py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-8 h-8 text-cyan-400" />
                  <span className="font-bold text-xl">SecuraMem</span>
                </motion.div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Rust-hardened AI infrastructure for sovereign enterprise deployment.
                </p>
                <motion.a
                  href="mailto:jeremy@securamem.com"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  jeremy@securamem.com
                </motion.a>
              </div>
              {[
                {
                  title: "Get Started",
                  links: [
                    { text: "Schedule Live Demo", href: "mailto:jeremy@securamem.com?subject=Schedule%20Live%20Demo" },
                    { text: "Pricing & Licensing", href: "mailto:jeremy@securamem.com?subject=Pricing%20%26%20Licensing%20Inquiry" },
                    { text: "Pilot Deployment", href: "mailto:jeremy@securamem.com?subject=Pilot%20Deployment%20Request" },
                    { text: "Defense Kit Download", href: "mailto:jeremy@securamem.com?subject=Defense%20Kit%20%26%20Technical%20Docs" }
                  ]
                },
                {
                  title: "Platform",
                  links: [
                    { text: "Rust Architecture", href: "mailto:jeremy@securamem.com?subject=Rust%20Architecture%20Information" },
                    { text: "NeuroWall Firewall", href: "mailto:jeremy@securamem.com?subject=NeuroWall%20Semantic%20Firewall" },
                    { text: "Compliance", href: "mailto:jeremy@securamem.com?subject=Compliance%20Information" },
                    { text: "Integration Specs", href: "mailto:jeremy@securamem.com?subject=Integration%20Specifications" }
                  ]
                },
                {
                  title: "Contact Sales",
                  links: [
                    { text: "jeremy@securamem.com", href: "mailto:jeremy@securamem.com" },
                    { text: "Sales Inquiries", href: "mailto:jeremy@securamem.com?subject=Sales%20Inquiry" },
                    { text: "Technical Questions", href: "mailto:jeremy@securamem.com?subject=Technical%20Question" },
                    { text: "NDA Request", href: "mailto:jeremy@securamem.com?subject=NDA%20Request" }
                  ]
                }
              ].map((column, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-4 text-lg">{column.title}</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {column.links.map((link: { text: string; href: string }, linkIdx: number) => (
                      <motion.li
                        key={linkIdx}
                        whileHover={{ x: 5, color: "#ffffff" }}
                      >
                        <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
              <p>© 2025 SecuraMem (17342926 Canada Inc.). All rights reserved.</p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service", "Pilot Agreement"].map((link, idx) => (
                  <motion.a
                    key={idx}
                    href="mailto:jeremy@securamem.com?subject=Legal%20Documentation%20Request"
                    className="hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
