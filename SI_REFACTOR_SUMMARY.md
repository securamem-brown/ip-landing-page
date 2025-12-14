# SecuraMem Landing Page Refactor — SI Licensing Model

**Date**: December 5, 2025  
**Status**: ✅ Complete

---

## Strategic Pivot Summary

Successfully transitioned www.securamem.com from a **direct binary sales model** to a **dual-track approach** emphasizing **System Integrator (SI) licensing** while maintaining enterprise pilot option.

### FROM (Old Model)
- Direct binary sales to enterprises
- $15K pilots with individual companies
- Developer-focused CLI tool
- "Deploy SecuraMem to audit your AI"

### TO (New Model)
- **Primary**: License to System Integrators who embed in their solutions
- **Secondary**: Direct enterprise pilots (de-emphasized but retained)
- SDK and White-Label licensing tiers
- "Embed SecuraMem's cryptographic audit layer into your platform"

---

## Pages Created/Modified

### 1. ✅ NEW: `/partners` Page

**Location**: `app/partners/page.tsx`

**Key Sections**:
- **Hero**: "Embed AI Audit Infrastructure in Your Platform"
- **Why Partner**: Time-to-market (6-12 months saved), Win regulated deals (3x market), Revenue expansion (25-40% premium), Competitive moat (18-24 month lead)
- **What You Get**: Battle-tested code (2,500 lines Rust), Integration support, Go-to-market materials
- **Licensing Tiers**:
  - Evaluation License: $5K (60-day, credited to SDK)
  - Certification Partner: $15K-25K/year (badge program)
  - SDK License: $35K-75K/year (full source, embed rights) — **RECOMMENDED**
  - White-Label: $100K+/year (full rebrand, exclusivity)
- **Target Verticals**: Healthcare IT, LegalTech, InsurTech, GRC/Compliance
- **Integration Patterns**: Docker Sidecar, SDK Embed, API Integration, CLI Ingestion
- **Technical Specs**: ~85MB binary, zero dependencies, Rust, ED25519, SHA-256, ONNX
- **Partnership Process**: Evaluate (2 weeks) → Pilot (4-6 weeks) → License (1 week) → Deploy (ongoing)

**CTAs**:
- Primary: "Schedule Partnership Call"
- Secondary: "Start $5K Evaluation"

---

### 2. ✅ MODIFIED: Homepage (`app/page.tsx`)

#### Hero Section Changes:
**Old Headline**: "When Your AI Makes a Mistake, Can You Prove What Happened?"

**New Headline**: "AI Audit Infrastructure—Embeddable, Licensable, Air-Gap Ready"

**Old Subhead**: Focus on AI Black Box Recorder for direct deployment

**New Subhead**: "Cryptographic chain-of-custody for AI systems. Single Rust binary. Zero dependencies. White-label ready. System integrators license SecuraMem to embed court-admissible audit trails in their platforms. Enterprises deploy directly for air-gapped, compliant AI."

#### CTA Changes:
**Old CTAs**:
- Primary: "Start 30-Day Pilot — $15K"
- Secondary: "Schedule Live Demo"

**New CTAs**:
- **Primary**: "Partner Program" (links to `/partners`)
- Secondary: "Request Demo"
- Tertiary: "Schedule Call"

**Supporting Text**: "For Partners: SDK licensing from $35K/year • For Enterprises: $15K 30-day pilot"

#### Navigation Changes:
- Added **"Partners"** link (highlighted in teal, bold)
- Positioned first in nav menu for prominence

#### Final CTA Section:
**Old**: "Start Your 30-Day Pilot Today" (single-track)

**New**: "Get Started Today" (dual-track)
- For System Integrators: SDK from $35K/year
- For Enterprises: 30-day pilot for $15K
- CTAs: "Partner Program" (primary) + "Enterprise Pilot — $15K" (secondary)

#### Footer Changes:
**Old Columns**:
- Get Started (generic)
- Platform
- Contact Sales

**New Columns**:
- **Partners** (SDK Licensing, Evaluation License, Integration Guide)
- **Enterprise** (30-Day Pilot, Schedule Demo, Pricing, Technical Docs)
- **Resources** (Documentation, Use Cases)

---

### 3. ✅ ENHANCED: `/docs` Page

**Location**: `app/docs/page.tsx`

**New Section Added**: "Integration Patterns" (before CTA)

**Content**:
- **Docker Sidecar**: Kubernetes-native, zero code changes
- **SDK Embed**: Rust/C/Python, sub-millisecond latency
- **API Integration**: REST/gRPC, language-agnostic
- **CLI Ingestion**: Batch processing, offline support

Each pattern includes:
- Description
- Code example
- "Best for" use case
- Key features (4 bullets per pattern)

**CTA Updates**:
- Primary: "View Partner Program" (links to `/partners`)
- Secondary: "Contact Jeremy Brown" (email)

---

## Messaging Changes

### Key Value Props (SI-Focused)

| Old Message | New Message |
|-------------|-------------|
| "Deploy SecuraMem" | "Embed SecuraMem in your platform" |
| "Audit your AI" | "Enable auditable AI for your customers" |
| "100MB binary" | "Licensable Rust infrastructure" |
| "Air-gapped" | "Your platform becomes air-gap capable" |
| "$15K pilot" | "SDK licensing from $35K/year" |

### Positioning Statements

**Homepage Hero**:
> "Cryptographic chain-of-custody for AI systems. Single Rust binary. Zero dependencies. White-label ready."

**Partners Page**:
> "License SecuraMem's cryptographic audit layer. You own the customer, we provide the evidence."

**Footer (new)**:
> "Licensable AI audit infrastructure for system integrators."

---

## Pricing Display

| Tier | Display Price | Target Audience |
|------|---------------|-----------------|
| Evaluation | $5K (credited) | Partners testing integration |
| Certification | $15K-25K/year | SaaS vendors wanting badge |
| SDK License | $35K-75K/year | Full source, embed rights |
| White-Label | $100K+/year | Full rebrand, exclusivity |
| Enterprise Pilot | $15K (30 days) | Direct enterprise customers |

---

## Technical Details Highlighted

For SI audience, emphasized:

1. **Binary Size**: ~85MB (embedded ONNX model)
2. **Dependencies**: Zero runtime requirements
3. **Language**: Rust (memory-safe, fast, auditable)
4. **Signatures**: ED25519 (industry-standard)
5. **Hash Chain**: SHA-256 (tamper-evident)
6. **ML Engine**: ONNX (portable semantic firewall)

---

## Target SI Ecosystems

Explicitly mentioned as ideal partners:

**Healthcare IT**:
- Epic Systems ecosystem
- Cerner/Oracle Health partners
- Meditech integrators

**LegalTech**:
- Relativity partners
- Everlaw ecosystem
- eDiscovery platforms

**InsurTech**:
- Guidewire partners
- Duck Creek ecosystem
- Majesco integrators

**GRC/Compliance**:
- ServiceNow partners
- Archer ecosystem
- LogicGate integrators

---

## Design Updates

### Navigation
- Added **"Partners"** link (first position, teal color, bold)
- Maintained all existing industry links (Insurance, Healthcare, Legal, Enterprise, Docs)

### Homepage
- Dual-track hero CTAs (Partner Program + Request Demo)
- Updated final CTA to address both audiences
- Footer reorganized into Partners/Enterprise/Resources columns

### New Partners Page
- Premium feel with gradient backgrounds
- 4-tier pricing cards (SDK License highlighted as "Recommended")
- Integration pattern cards (4 deployment options)
- Technical credibility section (6 spec cards)
- 4-step partnership process timeline
- Trust badges for target verticals

---

## Dual Audience Strategy

The landing page now serves **two distinct audiences**:

### 1. Primary: System Integrators (60-70% focus)
- Dedicated `/partners` page
- Prominent nav link
- Primary CTAs across site
- Technical integration details
- Licensing tier clarity

### 2. Secondary: Enterprises (30-40% focus)
- Retained $15K pilot option
- Demo request CTAs
- Industry-specific pages (healthcare, legal, insurance)
- Direct deployment messaging

**Philosophy**: "You own the customer, we provide the evidence" (for SIs) + "Deploy directly for air-gapped AI" (for enterprises)

---

## Files Modified

1. **Created**: `app/partners/page.tsx` (new, ~600 lines)
2. **Modified**: `app/page.tsx` (hero, CTAs, nav, footer)
3. **Enhanced**: `app/docs/page.tsx` (added integration patterns section)

---

## Next Steps (Optional)

Per Opus 4.5's handoff document, consider:

1. **Contact Form**: Integrate Calendly for "Schedule Partnership Discussion"
2. **Blog/Resources**: Create SI-focused content marketing hub
3. **Testimonials**: Add placeholder for future SI partner logos/quotes
4. **Code Snippets**: Expand integration examples with more languages
5. **Case Studies**: Add hypothetical (but realistic) SI success stories
6. **FAQ Section**: Address common SI partnership questions

---

## Success Metrics

The refactor achieves:

✅ Clear dual-track messaging (SI primary, enterprise secondary)  
✅ Dedicated partner program page with full licensing details  
✅ Prominent navigation placement for Partners link  
✅ Integration patterns documented for technical audience  
✅ CTAs updated throughout site to reflect new strategy  
✅ Footer reorganized to serve both audiences  
✅ Pricing transparency (ranges shown, not exact)  
✅ Target vertical specificity (Healthcare IT, LegalTech, etc.)  

---

## Technical Notes

- All pages use Framer Motion for animations
- Responsive design maintained (mobile-first)
- TypeScript implementation
- Next.js 15 App Router
- Tailwind CSS styling
- No breaking changes to existing pages

---

*Refactor completed by Claude Sonnet 4.5 based on instructions from Claude Opus 4.5*
