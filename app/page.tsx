'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Lock, CheckCircle, ArrowRight, Download, Calendar,
  Code, Globe, Zap, FileText, AlertTriangle, Target, Sparkles,
  TrendingUp, Award, Rocket, Layers, Terminal, Database, Activity,
  Eye, Scale, Building2, Gavel, Users, Brain
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

// Floating Particles Component
const FloatingParticles = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function SecuraMemLanding() {
  const [activeTab, setActiveTab] = useState('platforms');
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const acquisitionMetrics = [
    { label: "Operational Completion", value: "93%", icon: CheckCircle, color: "text-emerald-400" },
    { label: "Compliance Certifications", value: "4+", icon: Shield, color: "text-blue-400" },
    { label: "Signature Workflows", value: "3", icon: FileText, color: "text-purple-400" },
    { label: "Development Timeline Saved", value: "18-24mo", icon: Zap, color: "text-amber-400" }
  ];

  const valueProps: Record<string, any> = {
    platforms: {
      title: "AI Platform Companies",
      subtitle: "Anthropic, OpenAI, Cohere, Mistral",
      icon: Sparkles,
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
      icon: Globe,
      benefits: [
        "Defensive play against air-gapped competition",
        "Complete your sovereign AI offering without 2+ years of development",
        "Retain enterprise customers requiring on-premise deployment",
        "Bundle with existing compliance products for upsell revenue"
      ]
    },
    defense: {
      title: "Defense & Gov Tech Contractors",
      subtitle: "Palantir, Booz Allen, SAIC, Leidos",
      icon: Shield,
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
      icon: TrendingUp,
      benefits: [
        "Mandate SecuraMem across portfolio: instant compliance layer",
        "Create network effects through portfolio-wide adoption",
        "Differentiate portfolio companies in enterprise sales cycles",
        "Unified air-gapped AI standard increases exit valuations"
      ]
    }
  };

  const workflowTemplates = [
    {
      name: "Autonomous Security Sentinel",
      industry: "Security & Compliance",
      description: "Continuous system monitoring + AI threat analysis with cryptographic posture evidence",
      compliance: ["NIST-800-53", "ISO-27001"],
      runtime: "Real-time",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      name: "Banking KYC Analyzer",
      industry: "Financial Services",
      description: "Identity document processing with verifiable anti-tamper evidence streams",
      compliance: ["PCI-DSS", "GLBA"],
      runtime: "Batch processing",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Clinical Data Processor",
      industry: "Healthcare",
      description: "PHI/PII handling (OCR → redact → summarize) with court-admissible receipts",
      compliance: ["HIPAA", "HITECH"],
      runtime: "~2m per document",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "AI-Native IDE Assistant",
      industry: "Software Development",
      description: "Local code intelligence with cryptographic suggestion provenance",
      compliance: ["GDPR", "SOC 2"],
      runtime: "Millisecond response",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "SOC Security Runbook",
      industry: "Defense & Intelligence",
      description: "Log correlation → incident playbook with air-gapped signed chain",
      compliance: ["NIST SP 800-171", "CMMC"],
      runtime: "<10m execution",
      gradient: "from-amber-500/20 to-yellow-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-purple-950/30 animate-gradient-y"
             style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <FloatingParticles />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border-b border-slate-800/50 glass-effect sticky top-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold">SecuraMem</h1>
                <p className="text-xs text-slate-400">Air-Gapped AI Infrastructure</p>
              </div>
            </motion.div>
            <div className="flex items-center gap-4">
              <motion.span
                className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Built for Acquisition
              </motion.span>
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Pitch%20Deck%20Request"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Pitch Deck
              </motion.a>
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Schedule%20Acquisition%20Call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Call
              </motion.a>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 relative">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-8"
            >
              <Target className="w-4 h-4" />
              Strategic IP & Source Code Acquisition Opportunity
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">
                The Air-Gapped AI Infrastructure
              </span>
              <br />
              <span className="text-white">Every Platform Needs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Production-ready sovereign AI workflow platform enabling enterprise deployment in
              <span className="text-blue-400 font-semibold"> defense, healthcare, banking, and government</span>
              —markets worth <span className="text-emerald-400 font-semibold">$47B+</span> that cloud-only architectures cannot serve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-6 mb-12 flex-wrap"
            >
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Acquisition%20Discussion%20Request"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl font-bold text-lg flex items-center gap-3 shadow-2xl shadow-blue-600/30"
              >
                Schedule Acquisition Discussion
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
              <motion.a
                href="mailto:jeremy@securamem.com?subject=Technical%20Architecture%20Request"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-slate-600 rounded-xl font-bold text-lg flex items-center gap-3 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                View Technical Architecture
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-slate-400 text-sm flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              NDA required for source code review • Selective discussions underway
            </motion.p>
          </motion.div>
        </section>

        {/* Acquisition Metrics */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-20 border-y border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Acquisition-Ready Status
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-xl">
              Production-complete infrastructure with full compliance certifications
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6"
          >
            {acquisitionMetrics.map((metric, idx) => (
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
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Technical Architecture Deep Dive - 3 Layer System */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-slate-950 to-slate-900/50">
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
              Modular 3-Layer Architecture
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
              Technical Architecture Deep Dive
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-4xl mx-auto">
              Air-gapped, zero-egress system with cryptographic chain-of-custody and court-admissible audit trails
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                layer: "L1",
                icon: Scale,
                title: "Compliance & Legal Node",
                color: "from-blue-600 to-cyan-600",
                bgGradient: "from-blue-950/30 to-cyan-950/10",
                borderColor: "border-blue-800/50",
                features: [
                  "RFC 3161 timestamping",
                  "ED25519 + SHA-256 cryptographic proofs",
                  "Court-admissible audit receipts",
                  "Immutable chain-of-custody"
                ],
                description: "Every AI decision tracked with cryptographic evidence"
              },
              {
                layer: "L2",
                icon: Database,
                title: "Semantic & Persistent Memory",
                color: "from-emerald-600 to-green-600",
                bgGradient: "from-emerald-950/30 to-green-950/10",
                borderColor: "border-emerald-800/50",
                features: [
                  "384-dimensional vector engine",
                  "Local-only SQLite + FAISS storage",
                  "Zero external dependencies",
                  "Semantic context preservation"
                ],
                description: "Air-gapped semantic memory with zero cloud leakage"
              },
              {
                layer: "L3",
                icon: Activity,
                title: "Enterprise Monitoring Node",
                color: "from-purple-600 to-pink-600",
                bgGradient: "from-purple-950/30 to-pink-950/10",
                borderColor: "border-purple-800/50",
                features: [
                  "Prometheus metrics (127.0.0.1:8080)",
                  "REST API for health checks",
                  "Real-time compliance dashboards",
                  "Automated policy enforcement"
                ],
                description: "Enterprise-grade observability without external telemetry"
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
                className={`glass-effect border-2 ${layer.borderColor} rounded-2xl p-8 bg-gradient-to-br ${layer.bgGradient} group cursor-pointer relative overflow-hidden`}
              >
                {/* Animated layer badge */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center text-white font-bold text-lg`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {layer.layer}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <layer.icon className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {layer.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  {layer.description}
                </p>

                <div className="space-y-2">
                  {layer.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIdx * 0.1 }}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CLI Commands Showcase */}
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
                <h3 className="text-3xl font-bold">Developer-First CLI</h3>
                <p className="text-slate-400">Production-ready commands included in acquisition</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  command: "$ smem init",
                  description: "Initialize air-gapped workspace with cryptographic identity",
                  output: "✓ ED25519 keypair generated\n✓ Policy enforced: NO_TELEMETRY\n✓ Memory database ready"
                },
                {
                  command: "$ smem prove-offline",
                  description: "Generate court-admissible cryptographic proof of offline execution",
                  output: "✓ RFC 3161 timestamp applied\n✓ Chain-of-custody sealed\n✓ Receipt: a3f8c2d1.json"
                },
                {
                  command: "$ smem enterprise-health",
                  description: "Real-time compliance posture monitoring",
                  output: "✓ L1: Audit trail integrity OK\n✓ L2: Memory isolation verified\n✓ L3: API responding 127.0.0.1:8080"
                },
                {
                  command: "$ smem certify-node",
                  description: "Generate compliance certification reports (GDPR, SOX, ISO)",
                  output: "✓ GDPR Article 22 compliance\n✓ SOX 404 audit trail verified\n✓ Certificate exported"
                }
              ].map((cmd, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 font-mono text-sm"
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
              <Shield className="w-8 h-8 text-blue-400" />
              Compliance & Regulatory Alignment
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "GDPR Art. 22 & 25", color: "bg-blue-950/50 border-blue-800/50 text-blue-400" },
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
                color: "text-blue-400",
                gradient: "from-blue-950/30 to-blue-900/10",
                border: "border-blue-800/50",
                benefits: [
                  "Build AI features without cloud vendor lock-in",
                  "Cryptographic proof for every AI decision",
                  "YAML-based workflow definitions",
                  "Full source code transparency"
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
                  "Zero data exfiltration risk",
                  "Human-in-the-loop oversight at every step",
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
                  "Tamper-evident audit trails"
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
                  "Policy enforcement at infrastructure layer",
                  "Zero-trust security model",
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

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {stakeholder.title}
                </h3>

                <div className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIdx) => (
                    <motion.div
                      key={benefitIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIdx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-slate-300"
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

        {/* Strategic Opportunity */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
              The Strategic Opportunity
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-4xl mx-auto">
              Major AI platforms excel at cloud deployment but systematically lose enterprise deals
              requiring sovereign, air-gapped operation. SecuraMem is the bridge infrastructure that
              unlocks this entire market segment.
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
              className="bg-gradient-to-br from-red-950/30 to-red-900/10 border-2 border-red-900/30 rounded-2xl p-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </motion.div>
                <h3 className="text-3xl font-bold">The Problem</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                {[
                  "Cloud-only AI platforms lose $47B+ in annual enterprise deals",
                  "Defense, healthcare, banking require sovereign deployment",
                  "Building air-gapped infrastructure internally: 18-24 months",
                  "Compliance certifications add 12-18 months more",
                  "No court-admissible audit trail in existing solutions"
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
              className="bg-gradient-to-br from-emerald-950/30 to-green-900/10 border-2 border-emerald-900/30 rounded-2xl p-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </motion.div>
                <h3 className="text-3xl font-bold">The Solution</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                {[
                  "Production-ready air-gapped AI workflow platform",
                  "All major compliance certifications complete (93%)",
                  "Immediate deployment capability across regulated industries",
                  "Cryptographic audit infrastructure (court-admissible)",
                  "3 productized workflow templates included"
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
            className="glass-effect border border-blue-900/30 rounded-2xl p-10 text-center"
          >
            <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Time Advantage</h3>
            <p className="text-xl text-slate-300 mb-6">
              Build internally: <span className="text-red-400 font-bold">24-42 months</span> (development + compliance)<br />
              Acquire SecuraMem: <span className="text-emerald-400 font-bold">Immediate</span> (93% complete, integration-ready)
            </p>
            <p className="text-slate-400">
              By the time competitors build equivalent infrastructure, you&apos;ve captured 2+ years of market share
              in the sovereign AI segment.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Strategic Value by Acquirer Type */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24 border-y border-slate-800/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Strategic Value by Acquirer Type
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400">
              Transformative infrastructure for multiple strategic buyer profiles
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
                      : 'glass-effect text-slate-400 hover:text-white border border-slate-800'
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
              <p className="text-slate-400 text-xl">{valueProps[activeTab].subtitle}</p>
            </div>

            <div className="space-y-4">
              {valueProps[activeTab].benefits.map((benefit: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="flex items-start gap-4 p-5 bg-slate-800/30 rounded-xl transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Workflow Templates */}
        <AnimatedSection className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-4">
              Productized Workflow Templates
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400">
              Production-tested, compliance-certified templates included in acquisition
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {workflowTemplates.map((template, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`glass-effect border border-slate-800/50 rounded-2xl p-8 hover:border-blue-800/50 transition-all group cursor-pointer bg-gradient-to-br ${template.gradient}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-sm text-blue-400 font-semibold">{template.industry}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Code className="w-8 h-8 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </motion.div>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">{template.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {template.compliance.map((cert, certIdx) => (
                    <motion.span
                      key={certIdx}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-emerald-950/50 border border-emerald-900/30 rounded-lg text-xs text-emerald-400 font-semibold"
                    >
                      {cert}
                    </motion.span>
                  ))}
                </div>

                <div className="text-sm text-slate-500 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {template.runtime}
                </div>
              </motion.div>
            ))}
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
                description: "Every workflow execution produces court-admissible receipts with ED25519 signatures and SHA-256 digests per step.",
                features: ["Immutable audit trail", "Deterministic replay capability", "Tamper-evident chain linking"],
                color: "text-blue-400"
              },
              {
                icon: Globe,
                title: "Sovereign Operation",
                description: "Model-agnostic platform operates fully air-gapped with zero external dependencies or telemetry.",
                features: ["Offline-first architecture", "Replaceable cryptographic keys", "No cloud lock-in"],
                color: "text-emerald-400"
              },
              {
                icon: FileText,
                title: "Declarative YAML",
                description: "Human-readable workflow definitions with policy enforcement at the template layer.",
                features: ["NO_TELEMETRY enforcement", "OFFLINE_STRICT mode", "Version-controlled templates"],
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
                <p className="text-slate-400 mb-6 leading-relaxed">{item.description}</p>
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
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Public Key Fingerprint</h3>
            </div>
            <motion.code
              className="text-sm text-slate-400 font-mono bg-slate-900/50 px-6 py-4 rounded-xl block overflow-x-auto border border-slate-800"
              whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}
            >
              d870deeac602a4a32110490b8b94945267d1c16f2402cc93e04cf10baac98923
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
            className="bg-gradient-to-br from-blue-950/50 via-purple-950/50 to-pink-950/50 border-2 border-blue-800/50 rounded-3xl p-16 text-center backdrop-blur-sm relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
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
                <Award className="w-full h-full text-blue-400" />
              </motion.div>

              <h2 className="text-5xl font-bold mb-6">Begin Acquisition Discussion</h2>
              <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                SecuraMem represents the missing infrastructure layer for sovereign AI deployment.
                Strategic discussions are selective and NDA-protected.
              </p>

              <div className="flex justify-center gap-6 mb-12 flex-wrap">
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Technical%20Deep%20Dive%20Request"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xl flex items-center gap-3 shadow-2xl"
                >
                  <Calendar className="w-6 h-6" />
                  Schedule Technical Deep Dive
                </motion.a>
                <motion.a
                  href="mailto:jeremy@securamem.com?subject=Pitch%20Deck%20Request"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-xl flex items-center gap-3"
                >
                  <Download className="w-6 h-6" />
                  Download Full Pitch Deck
                </motion.a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { value: "Full IP", label: "Source Code & Patents", color: "text-blue-400" },
                  { value: "93%", label: "Operational Complete", color: "text-emerald-400" },
                  { value: "NDA", label: "Required for Review", color: "text-purple-400" }
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
                    <div className="text-slate-400">{stat.label}</div>
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
                  <Shield className="w-8 h-8 text-blue-400" />
                  <span className="font-bold text-xl">SecuraMem</span>
                </motion.div>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  Air-gapped AI infrastructure for sovereign enterprise deployment.
                </p>
                <motion.a
                  href="mailto:jeremy@securamem.com"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  jeremy@securamem.com
                </motion.a>
              </div>
              {[
                {
                  title: "Acquisition",
                  links: [
                    { text: "Pitch Deck", href: "mailto:jeremy@securamem.com?subject=Pitch%20Deck%20Request" },
                    { text: "Technical Docs", href: "mailto:jeremy@securamem.com?subject=Technical%20Documentation" },
                    { text: "Source Code Review", href: "mailto:jeremy@securamem.com?subject=Source%20Code%20Review%20Request" },
                    { text: "Licensing Terms", href: "mailto:jeremy@securamem.com?subject=Licensing%20Terms%20Inquiry" }
                  ]
                },
                {
                  title: "Platform",
                  links: [
                    { text: "Architecture", href: "mailto:jeremy@securamem.com?subject=Architecture%20Information" },
                    { text: "Workflow Templates", href: "mailto:jeremy@securamem.com?subject=Workflow%20Templates" },
                    { text: "Compliance", href: "mailto:jeremy@securamem.com?subject=Compliance%20Information" },
                    { text: "Integration Specs", href: "mailto:jeremy@securamem.com?subject=Integration%20Specifications" }
                  ]
                },
                {
                  title: "Contact",
                  links: [
                    { text: "jeremy@securamem.com", href: "mailto:jeremy@securamem.com" },
                    { text: "Acquisition Inquiries", href: "mailto:jeremy@securamem.com?subject=Acquisition%20Inquiry" },
                    { text: "Technical Questions", href: "mailto:jeremy@securamem.com?subject=Technical%20Question" },
                    { text: "NDA Request", href: "mailto:jeremy@securamem.com?subject=NDA%20Request" }
                  ]
                }
              ].map((column, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-4 text-lg">{column.title}</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
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
                {["Privacy Policy", "Terms", "NDA Template"].map((link, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
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
