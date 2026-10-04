import React from "react";

export const servicesData = [
  {
    title: "Welding Fixtures",
    slug: "welding-fixtures",
    type: "product",
    image: "/New some photos/SOPT WELDING FIXTURE.png",
    desc: <>Engineered for <strong>uncompromising precision</strong>. Our Welding Fixtures eliminate <strong>thermal distortion</strong> and guarantee <strong>100% absolute repeatability</strong> for high-volume production lines.</>,
    details: <>At Siddhivinayak Engineering, we deliver <strong>industry-leading Welding Fixtures</strong> tailored for complex MIG, TIG, and Spot welding applications. We understand that even a millimeter of deviation can halt an assembly line. Our fixtures are built with <strong>maximum clamping rigidity</strong> to absorb extreme thermal stress, ensuring your weld penetration quality is flawless every single time. Designed for both <strong>manual workstations and fully robotic cells</strong>, we guarantee dimensional stability that meets global automotive standards.</>,
    features: [
      <>Flawless compatibility with <strong>MIG, TIG, and CO2</strong> robotic welding systems.</>,
      <><strong>Zero-distortion pneumatic/manual clamping</strong> for complex and heavy assemblies.</>,
      <>Ergonomically engineered 3D designs for <strong>optimized torch accessibility</strong>.</>,
      <>Constructed with premium Alloy Steel and Copper inserts to <strong>completely resist weld spatter</strong>.</>
    ],
    specs: {
      "Material": "MS, OHNS, or Alloy Steel",
      "Accuracy": "+/- 0.05 mm",
      "Application": "Automotive, Heavy Fabrication",
      "Operation": "Manual / Pneumatic / Hydraulic"
    }
  },
  {
    title: "Inspection Fixtures",
    slug: "inspection-fixtures",
    type: "product",
    image: "/New some photos/TOOLS (2).png",
    desc: <>CMM-validated Checking Fixtures designed for <strong>strict GD&T compliance</strong>, serving as the ultimate gatekeeper for <strong>zero-defect manufacturing</strong>.</>,
    details: <>In precision engineering, quality is non-negotiable. Our Inspection Fixtures are meticulously crafted to serve as the <strong>ultimate quality checkpoint</strong> for your critical components. Designed to strictly adhere to complex <strong>GD&T standards</strong>, they enable your quality control team to perform rapid, error-free shop-floor verifications. Every single fixture undergoes <strong>rigorous 100% CMM validation</strong> in our facility, ensuring micron-level accuracy and a perfect Gauge R&R score before it reaches your plant.</>,
    features: [
      <><strong>100% CMM-certified accuracy</strong> backed by detailed dimensional validation reports.</>,
      <>Seamless integration of precision <strong>Go/No-Go gauges</strong>, flush pins, and dial indicators.</>,
      <>Highly wear-resistant contact points engineered from <strong>hardened tool steel</strong>.</>,
      <>Foolproof design architecture enabling <strong>rapid shop-floor inspection</strong> by operators.</>
    ],
    specs: {
      "Validation": "CMM Report Provided",
      "Tolerance": "Upto 0.01 mm",
      "Material": "Aluminum / Steel / Resin",
      "Type": "Attribute & Variable Checking"
    }
  },
  {
    title: "BIW Fixtures",
    slug: "biw-fixtures",
    type: "product",
    image: "/New some photos/WELDING FIXTURES (2).png",
    desc: <>Heavy-duty Body-In-White (BIW) Fixtures engineered for <strong>Tier-1 automotive assembly lines</strong>, ensuring <strong>flawless panel alignment</strong> and structural integrity.</>,
    details: <>BIW Fixtures form the critical backbone of the automotive manufacturing process. We possess the capability to deliver <strong>high-rigidity Geo and Re-Spot framing fixtures</strong> that hold heavy sheet metal panels with absolute precision. Our robust designs are engineered to absorb extreme dynamic loads, completely eliminating vibration and flex during robotic welding. Equipped with <strong>precision modular shim blocks</strong> and heavy-duty pneumatic clamping, our BIW solutions ensure a seamless, uninterrupted assembly line.</>,
    features: [
      <>Turnkey engineering solutions for <strong>Geo, Re-Spot, and Hemming</strong> stations.</>,
      <>High-rigidity structural frames specifically designed to <strong>eliminate vibration and flex</strong>.</>,
      <><strong>Modular shim-based systems</strong> for ultra-fast maintenance and fine-tune adjustments.</>,
      <>Seamless electrical integration with <strong>PLCs, proximity sensors, and pneumatic controls</strong>.</>
    ],
    specs: {
      "Industry": "Automotive OEM & Tier 1",
      "Capacity": "Heavy Duty Load Bearing",
      "Finish": "Blackodised / Powder Coated",
      "Design": "Modular & Welded"
    }
  },
  {
    title: "Precision Job Works",
    slug: "precision-job-works",
    type: "service",
    image: "/New some photos/SPECIAL GEARS (3).png",
    desc: <>Advanced CNC & VMC Machining solutions delivering <strong>highly complex, mission-critical components</strong> with <strong>micron-level tolerances</strong>.</>,
    details: <>Leveraging state-of-the-art <strong>VMC and CNC machining centers</strong>, we execute complex precision job works that demand exacting standards. From rapid bespoke prototyping to <strong>high-volume continuous production</strong>, our facility is highly capable of machining exotic alloys, stainless steel, and aerospace-grade aluminum. We pride ourselves on our ability to maintain <strong>micro-level tolerances</strong> and deliver uncompromising quality that strictly adheres to your most demanding technical blueprints.</>,
    features: [
      <><strong>Multi-axis VMC & CNC</strong> machining for highly complex, multi-faceted component profiles.</>,
      <>Flawless processing of <strong>MS, SS, Aluminum, Brass, EN-Series</strong>, and specialized alloys.</>,
      <><strong>Micro-level tolerance control</strong> strictly verified by advanced metrology equipment.</>,
      <>Comprehensive end-to-end solutions from raw material sourcing to <strong>final surface treatment</strong>.</>
    ],
    specs: {
      "Machine": "VMC (STM VL1570), M1TR, Lathe",
      "Tolerance": "+/- 0.01 mm",
      "Batch Size": "Prototype to Mass Production",
      "Materials": "MS, EN8, EN31, Al, SS"
    }
  },
  {
    title: "Assembly Fixtures",
    slug: "assembly-fixtures",
    type: "product",
    image: "/New some photos/FIXTURES.png",
    desc: <>Intelligent Assembly Fixtures integrated with <strong>advanced Poka-Yoke systems</strong> to completely eliminate human error and <strong>maximize production throughput</strong>.</>,
    details: <>To achieve operational excellence, efficiency and accuracy must be integrated into the process. Our custom-engineered Assembly Fixtures are designed to significantly reduce operator fatigue while <strong>completely eliminating fitment errors</strong>. By deeply integrating <strong>Poka-Yoke (mistake-proofing) methodologies</strong>, we enforce correct part orientation by design. This results in drastically <strong>reduced rejection rates</strong>, lightning-fast cycle times, and the guarantee that every final assembly is perfect.</>,
    features: [
      <>Strict <strong>Poka-Yoke design architecture</strong> to physically prevent incorrect part orientation.</>,
      <>Ergonomically optimized engineering to <strong>reduce operator fatigue</strong> and boost throughput.</>,
      <>Robust, industrial-grade construction utilizing lightweight aluminum and <strong>hardened steel</strong>.</>,
      <>Highly adaptable designs suitable for both <strong>manual workstations and fully automated lines</strong>.</>
    ],
    specs: {
      "Operation": "Manual / Semi-Auto",
      "Safety": "Operator Safe Design",
      "Material": "Alloy Steel / Aluminum",
      "Application": "Sub-assembly / Final Assembly"
    }
  },
  {
    title: "Machine Parts",
    slug: "machine-parts",
    type: "product",
    images: [
      "/whatsapp folder/WhatsApp Image 2026-02-10 at 2.58.51 PM.png",
      "/whatsapp folder/WhatsApp Image 2026-02-10 at 2.58.50 PM (1).png"
    ],
    image: "/whatsapp folder/WhatsApp Image 2026-02-10 at 2.58.51 PM.png", 
    desc: <>Bespoke manufacturing of <strong>critical machinery spares</strong>, heavy-duty precision shafts, and complex mechanical components to <strong>prevent operational downtime</strong>.</>,
    details: <>We understand that machine downtime costs you money. Our highly capable facility specializes in the rapid and flawless manufacturing of <strong>mission-critical mechanical spare parts</strong>, including precision shafts, heavy-duty gears, and complex housings. Whether executing complex <strong>reverse engineering</strong> for an obsolete component or handling OEM mass production, we employ advanced heat treatments and precision grinding to deliver parts that boast <strong>superior wear resistance and extended operational lifespans</strong>.</>,
    features: [
      <>Comprehensive <strong>reverse engineering</strong> and custom CAD drafting capabilities.</>,
      <>Advanced heat treatment processes for <strong>superior durability and extreme wear resistance</strong>.</>,
      <>Precision cylindrical and surface grinding ensuring <strong>exact dimensional fitment</strong>.</>,
      <><strong>Rapid turnaround manufacturing</strong> designed to minimize your plant&apos;s operational downtime.</>
    ],
    specs: {
      "Parts": "Shafts, Gears, Flanges, Pins",
      "Hardness": "As per requirement (HRC)",
      "Finish": "Ground / Polished / Plated",
      "Material": "En Series, MS, SS"
    }
  },
  {
    title: "Fabrication",
    slug: "fabrication",
    type: "service",
    // ✅ FABRICATION IMAGE PATH CORRECTED (AS PER YOUR INSTRUCTION)
    image: "/MACHINE PHOTOS/fabrication.jpg", 
    desc: <>Premium industrial fabrication executing <strong>heavy structural frameworks</strong>, precision hoppers, and <strong>customized material handling solutions</strong>.</>,
    details: <>Siddhivinayak Engineering commands a highly capable fabrication division offering <strong>end-to-end heavy industrial fabrication</strong> with immense structural strength and premium finishing. Our certified welding experts execute complex assemblies of <strong>Mild Steel (MS), Stainless Steel (SS), and Aluminum</strong>. From heavy-duty structural shells to precision engineered hoppers and ergonomic material handling trolleys, every fabricated unit undergoes rigorous <strong>Non-Destructive Testing (NDT)</strong> to guarantee absolute structural integrity.</>,
    features: [
      <>Heavy structural fabrication utilizing industry-certified <strong>TIG, MIG, and Arc welding techniques</strong>.</>,
      <>Custom-engineered <strong>material handling solutions</strong> built to support lean manufacturing.</>,
      <>Impeccable joint strength verified through <strong>rigorous load and dye penetrant testing</strong>.</>,
      <>Complete in-house surface finishing capabilities, including <strong>powder coating and industrial painting</strong>.</>
    ],
    specs: {
      "Material": "MS, SS, Aluminum",
      "Process": "Laser Cutting, Bending, Heavy Welding",
      "Products": "Trolleys, Racks, Hoppers, Structural Shells",
      "Testing": "Visual Inspection & NDT"
    }
  },
  {
    title: "Gauges",
    slug: "gauges",
    type: "product",
    // ✅ GAUGES IMAGE PATH CORRECTED (AS PER YOUR INSTRUCTION)
    image: "/MACHINE PHOTOS/gauges.png", 
    desc: <>Highly specialized Gauges meticulously engineered to simultaneously verify <strong>multiple complex dimensional parameters</strong> with <strong>absolute certainty</strong>.</>,
    details: <>When standard measurement tools fall short on complex geometries, our custom engineered <strong>Gauges</strong> provide the definitive solution. These advanced instruments empower your quality inspectors to simultaneously verify multiple critical parameters—such as <strong>intersecting angles, intricate slot widths, and exact hole positions</strong>—in a single, rapid operation. Manufactured from premium hardened tool steel and <strong>strictly CMM-calibrated</strong>, our gauges drastically reduce QA cycle times while guaranteeing 100% component conformity.</>,
    features: [
      <>Simultaneous <strong>multi-parameter verification</strong> (Angles, Slots, Positional Tolerances) in one setup.</>,
      <>Crafted from premium <strong>hardened OHNS/HCS</strong> ensuring zero wear and extreme longevity.</>,
      <><strong>100% CMM-calibrated</strong> to guarantee micron-level measurement accuracy across all axes.</>,
      <>Drastically <strong>reduces Quality Assurance (QA) cycle times</strong> compared to standard measurement techniques.</>
    ],
    specs: {
      "Parameters Checked": "Angles, Slots, Hole Positions",
      "Customization": "As per complex component CAD design",
      "Material": "High-grade Hardened Tool Steel",
      "Validation": "CMM Certified"
    }
  }
];