import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AgentRedPage.css';

const AgentRedPage = () => {
  const [terminalText, setTerminalText] = useState('');
  const [activeFramework, setActiveFramework] = useState(null);
  const [intelligenceFeed, setIntelligenceFeed] = useState([]);

  // Terminal typing effect
  useEffect(() => {
    const text = '> Initializing Agent Red... OPERATIONAL\n> Loading offensive frameworks... COMPLETE\n> A2A protocol active... CONNECTED\n> Accessing AEON knowledge base... SYNCED\n> Ready for autonomous operations...';
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Live intelligence feed simulation
  useEffect(() => {
    const feeds = [
      { type: 'CVE', data: 'CVE-2024-8472 - SCADA Remote Code Execution - Active exploit detected', severity: 'critical' },
      { type: 'TTP', data: 'MITRE T1190 - Exploit Public-Facing Application - APT29 campaign active', severity: 'high' },
      { type: 'OSINT', data: 'Identified: Siemens S7-1200 PLC via vendor documentation analysis', severity: 'info' },
      { type: 'Exploit', data: 'New PoC available: Industrial Firewall Bypass - Testing recommended', severity: 'medium' },
      { type: 'Agent', data: 'Agent Red-3 successfully deployed to target subnet 10.50.30.0/24', severity: 'success' },
      { type: 'A2A', data: 'Agent coordination: Red-1 → Red-4 | Lateral movement in progress', severity: 'info' },
      { type: 'Framework', data: 'BloodHound analysis complete - 47 attack paths identified', severity: 'high' },
      { type: 'Intel', data: 'Threat Actor: Lazarus Group - New TTPs detected in Energy sector', severity: 'critical' }
    ];

    let currentIndex = 0;
    const feedTimer = setInterval(() => {
      setIntelligenceFeed(prev => {
        const newFeed = [...prev, feeds[currentIndex]];
        currentIndex = (currentIndex + 1) % feeds.length;
        return newFeed.slice(-5); // Keep last 5 items
      });
    }, 3000);

    return () => clearInterval(feedTimer);
  }, []);

  const frameworks = [
    {
      id: 'metasploit',
      name: 'Metasploit',
      icon: '🎯',
      description: 'Autonomous exploit delivery and payload execution',
      capabilities: ['Remote code execution', 'Post-exploitation', 'Payload generation', 'Vulnerability scanning'],
      color: '#c10230'
    },
    {
      id: 'bloodhound',
      name: 'BloodHound',
      icon: '🩸',
      description: 'Active Directory attack path enumeration',
      capabilities: ['AD reconnaissance', 'Attack path analysis', 'Privilege escalation routes', 'Kerberos attacks'],
      color: '#dc143c'
    },
    {
      id: 'responder',
      name: 'Responder',
      icon: '📡',
      description: 'LLMNR/NBT-NS poisoning and credential capture',
      capabilities: ['LLMNR poisoning', 'NBT-NS spoofing', 'Credential harvesting', 'SMB relay attacks'],
      color: '#b22222'
    },
    {
      id: 'mimikatz',
      name: 'Mimikatz',
      icon: '🔓',
      description: 'Credential extraction and pass-the-hash',
      capabilities: ['Password extraction', 'Pass-the-hash', 'Kerberos tickets', 'Token manipulation'],
      color: '#8b0000'
    },
    {
      id: 'empire',
      name: 'Empire',
      icon: '👑',
      description: 'Post-exploitation command and control framework',
      capabilities: ['C2 operations', 'PowerShell agents', 'Lateral movement', 'Persistence mechanisms'],
      color: '#a52a2a'
    },
    {
      id: 'cobalt-strike',
      name: 'Cobalt Strike',
      icon: '⚡',
      description: 'Advanced adversary simulation platform',
      capabilities: ['Beacon deployment', 'Malleable C2', 'Staged attacks', 'Team collaboration'],
      color: '#cd5c5c'
    }
  ];

  const a2aAgents = [
    { id: 1, name: 'Red-1', status: 'active', task: 'Initial Access', target: 'DMZ' },
    { id: 2, name: 'Red-2', status: 'active', task: 'Reconnaissance', target: 'AD Forest' },
    { id: 3, name: 'Red-3', status: 'deploying', task: 'Lateral Movement', target: 'OT Network' },
    { id: 4, name: 'Red-4', status: 'standby', task: 'Privilege Escalation', target: 'Domain Controller' },
    { id: 5, name: 'Red-5', status: 'active', task: 'Persistence', target: 'Critical Assets' }
  ];

  const attackChain = [
    { step: 1, phase: 'OSINT', description: 'Identify targets via intelligence', status: 'complete' },
    { step: 2, phase: 'Initial Access', description: 'Exploit public-facing application', status: 'complete' },
    { step: 3, phase: 'Execution', description: 'Deploy Agent Red on compromised host', status: 'complete' },
    { step: 4, phase: 'Persistence', description: 'Establish scheduled task backdoor', status: 'active' },
    { step: 5, phase: 'Privilege Escalation', description: 'Token impersonation attack', status: 'active' },
    { step: 6, phase: 'Defense Evasion', description: 'Obfuscate C2 communications', status: 'pending' },
    { step: 7, phase: 'Credential Access', description: 'Mimikatz memory extraction', status: 'pending' },
    { step: 8, phase: 'Discovery', description: 'BloodHound AD enumeration', status: 'pending' },
    { step: 9, phase: 'Lateral Movement', description: 'SMB relay to domain controller', status: 'pending' },
    { step: 10, phase: 'Impact', description: 'Access critical OT systems', status: 'pending' }
  ];

  return (
    <div className="agent-red-page">
      {/* Matrix Background */}
      <div className="matrix-bg"></div>

      {/* Hero Section */}
      <section className="agent-red-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            FULLY OPERATIONAL
          </div>
          <h1 className="hero-title">
            <span className="title-line-1">Agent Red</span>
            <span className="title-line-2">Autonomous Offensive AI</span>
          </h1>
          <p className="hero-tagline">
            AI-powered agents autonomously execute offensive frameworks, coordinate via A2A protocol,
            and deploy onto compromised systems with live intelligence from AEON
          </p>

          {/* Terminal Window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <div className="terminal-title">agent-red@AEON:~$</div>
            </div>
            <div className="terminal-body">
              <pre className="terminal-text">{terminalText}<span className="cursor">_</span></pre>
            </div>
          </div>

          <div className="hero-ctas">
            <Link to="/contact" className="btn-agent-primary">Request Demo</Link>
            <Link to="/simulations" className="btn-agent-secondary">Try Live Simulation</Link>
            <a href="#frameworks" className="btn-agent-tertiary">Explore Frameworks</a>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-card" data-delay="0">
            <div className="stat-number">20+</div>
            <div className="stat-label">Frameworks</div>
          </div>
          <div className="stat-card" data-delay="1">
            <div className="stat-number">∞</div>
            <div className="stat-label">Autonomous Agents</div>
          </div>
          <div className="stat-card" data-delay="2">
            <div className="stat-number">&lt;1s</div>
            <div className="stat-label">A2A Latency</div>
          </div>
          <div className="stat-card" data-delay="3">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Live Intelligence</div>
          </div>
        </div>
      </section>

      {/* Live Intelligence Feed */}
      <section className="intelligence-feed-section">
        <div className="feed-container">
          <div className="feed-header">
            <span className="feed-icon">📡</span>
            <span className="feed-title">Live Intelligence Feed</span>
            <span className="feed-status">● ACTIVE</span>
          </div>
          <div className="feed-items">
            {intelligenceFeed.map((feed, index) => (
              <div key={index} className={`feed-item feed-${feed.severity}`}>
                <span className="feed-type">[{feed.type}]</span>
                <span className="feed-data">{feed.data}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="frameworks-section">
        <div className="section-header">
          <h2 className="section-title">Autonomous Framework Execution</h2>
          <p className="section-subtitle">
            Agent Red autonomously controls industry-leading offensive frameworks with AI-driven decision making
          </p>
        </div>

        <div className="frameworks-grid">
          {frameworks.map((framework, index) => (
            <div
              key={framework.id}
              className={`framework-card ${activeFramework === framework.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveFramework(framework.id)}
              onMouseLeave={() => setActiveFramework(null)}
              style={{ '--framework-color': framework.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="framework-icon">{framework.icon}</div>
              <h3 className="framework-name">{framework.name}</h3>
              <p className="framework-description">{framework.description}</p>
              <ul className="framework-capabilities">
                {framework.capabilities.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>
              <div className="framework-status">
                <span className="status-indicator"></span>
                AUTONOMOUS
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A2A Protocol Section */}
      <section className="a2a-section">
        <div className="section-header">
          <h2 className="section-title">Agent-to-Agent Coordination Protocol</h2>
          <p className="section-subtitle">
            Multiple AI agents communicate and coordinate in real-time for complex multi-stage attacks
          </p>
        </div>

        <div className="a2a-visualization">
          <div className="a2a-center">
            <div className="aeon-hub">
              <div className="hub-pulse"></div>
              <div className="hub-icon">🧠</div>
              <div className="hub-label">AEON<br/>Knowledge Base</div>
            </div>
          </div>

          <div className="a2a-agents">
            {a2aAgents.map((agent, index) => (
              <div
                key={agent.id}
                className={`a2a-agent agent-${agent.status}`}
                style={{
                  '--angle': `${(360 / a2aAgents.length) * index}deg`,
                  '--delay': `${index * 0.2}s`
                }}
              >
                <div className="agent-node">
                  <div className="agent-inner">
                    <div className="agent-id">{agent.name}</div>
                    <div className="agent-task">{agent.task}</div>
                  </div>
                  <div className="agent-connection"></div>
                </div>
                <div className="agent-info">
                  <div className="agent-target">{agent.target}</div>
                  <div className="agent-status-badge">{agent.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="a2a-features">
          <div className="a2a-feature">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Coordination</h3>
            <p>Sub-second latency for agent communication and task delegation</p>
          </div>
          <div className="a2a-feature">
            <div className="feature-icon">🔄</div>
            <h3>Dynamic Task Assignment</h3>
            <p>AI automatically assigns tasks based on agent capabilities and target environment</p>
          </div>
          <div className="a2a-feature">
            <div className="feature-icon">🎯</div>
            <h3>Swarm Intelligence</h3>
            <p>Multiple agents work together to achieve complex objectives beyond single-agent capability</p>
          </div>
        </div>
      </section>

      {/* Attack Chain Visualization */}
      <section className="attack-chain-section">
        <div className="section-header">
          <h2 className="section-title">Automated Attack Chain Execution</h2>
          <p className="section-subtitle">
            Agent Red autonomously progresses through MITRE ATT&CK tactics with live intelligence
          </p>
        </div>

        <div className="attack-chain">
          {attackChain.map((step, index) => (
            <div key={step.step} className={`chain-step step-${step.status}`} style={{ '--step-delay': `${index * 0.1}s` }}>
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <div className="step-phase">{step.phase}</div>
                <div className="step-description">{step.description}</div>
              </div>
              <div className={`step-status status-${step.status}`}>
                {step.status === 'complete' && '✓'}
                {step.status === 'active' && '⟳'}
                {step.status === 'pending' && '○'}
              </div>
              {index < attackChain.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* OSINT Section */}
      <section className="osint-section">
        <div className="osint-content">
          <div className="osint-text">
            <h2>OSINT-Driven Attack Path Discovery</h2>
            <p className="osint-lead">
              Integrated OSINT engine discovers obscure attack vectors that traditional tools miss
            </p>
            <ul className="osint-capabilities">
              <li>
                <span className="osint-icon">🔍</span>
                <div>
                  <strong>Equipment Fingerprinting</strong>
                  <p>Identify specific PLC models, SCADA systems, and industrial equipment via vendor docs and public records</p>
                </div>
              </li>
              <li>
                <span className="osint-icon">👥</span>
                <div>
                  <strong>Personnel Mapping</strong>
                  <p>Map organizational structure, key personnel, and contractor relationships for social engineering vectors</p>
                </div>
              </li>
              <li>
                <span className="osint-icon">🏭</span>
                <div>
                  <strong>Supplier Analysis</strong>
                  <p>Trace vendor relationships, supply chain dependencies, and third-party access points</p>
                </div>
              </li>
              <li>
                <span className="osint-icon">🚪</span>
                <div>
                  <strong>Obscure Path Discovery</strong>
                  <p>Uncover maintenance VPNs, remote access tools, and forgotten internet-facing systems</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="osint-visual">
            <div className="osint-graph">
              <div className="graph-node node-center">Target Facility</div>
              <div className="graph-node node-1">Siemens PLC Vendor</div>
              <div className="graph-node node-2">Maintenance Contractor</div>
              <div className="graph-node node-3">Remote VPN Access</div>
              <div className="graph-node node-4">Third-Party Integrator</div>
              <div className="graph-connections-osint"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytical Capabilities */}
      <section className="advanced-capabilities-section">
        <div className="section-header">
          <h2 className="section-title">Advanced Analytical Capabilities</h2>
          <p className="section-subtitle">
            Agent Red performs sophisticated attack analysis beyond traditional penetration testing
          </p>
        </div>

        <div className="advanced-caps-grid">
          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">🏭</div>
              <h3>UC1: SCADA Multi-Stage Attack Reconstruction</h3>
            </div>
            <p>
              Autonomously reconstruct complex multi-stage attacks on SCADA systems by analyzing attack artifacts,
              correlating events across IT/OT networks, and identifying lateral movement paths through industrial
              control systems.
            </p>
            <ul className="adv-cap-features">
              <li>Forensic analysis of SCADA compromise indicators</li>
              <li>Multi-vector attack path reconstruction</li>
              <li>IT-to-OT pivot point identification</li>
              <li>Attack timeline generation with MITRE ATT&CK for ICS mapping</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">⚛️</div>
              <h3>UC2: Cyber-Physical Attack Detection</h3>
              <div className="rating">Stuxnet-Style Detection</div>
            </div>
            <p>
              Detect and analyze sophisticated cyber-physical attacks that manipulate industrial processes while
              hiding from traditional monitoring. Identifies subtle PLC logic modifications and physics-based
              anomalies in sensor data.
            </p>
            <ul className="adv-cap-features">
              <li>PLC ladder logic analysis for malicious modifications</li>
              <li>Physics-based anomaly detection in process data</li>
              <li>Sensor spoofing and data manipulation detection</li>
              <li>Centrifuge-style attack pattern recognition</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">🔄</div>
              <h3>UC3: Cascading Failure Analysis</h3>
            </div>
            <p>
              Simulate and analyze cascading failures across interconnected critical infrastructure systems.
              Predicts how an attack on one component propagates through dependencies to cause system-wide failures.
            </p>
            <ul className="adv-cap-features">
              <li>Dependency mapping across interconnected systems</li>
              <li>Failure propagation simulation</li>
              <li>Critical node identification</li>
              <li>Mitigation strategy recommendations</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">🔗</div>
              <h3>UC4: Supply Chain Attack Propagation</h3>
            </div>
            <p>
              Trace supply chain attack propagation through vendor relationships, software dependencies, and
              third-party integrations. Maps how malicious code spreads from suppliers to downstream customers.
            </p>
            <ul className="adv-cap-features">
              <li>Vendor relationship and trust boundary mapping</li>
              <li>Software supply chain dependency analysis</li>
              <li>Compromise propagation modeling</li>
              <li>SolarWinds-style attack pattern detection</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">⏱️</div>
              <h3>R6: Temporal Reasoning (90-Day Correlation)</h3>
            </div>
            <p>
              Correlate threat intelligence and attack indicators across 90-day windows to identify slow-burn
              APT campaigns, detect low-and-slow intrusions, and recognize attack patterns that unfold over months.
            </p>
            <ul className="adv-cap-features">
              <li>Long-term pattern recognition (90+ days)</li>
              <li>APT campaign lifecycle tracking</li>
              <li>Slow exfiltration detection</li>
              <li>Temporal attack correlation across multiple incidents</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">💥</div>
              <h3>R7: Cascading Failure Simulation</h3>
            </div>
            <p>
              Simulate cascading failures in real-time to test resilience of critical infrastructure. Models how
              attacks propagate through electrical grids, water systems, and interdependent infrastructure.
            </p>
            <ul className="adv-cap-features">
              <li>Real-time failure cascade modeling</li>
              <li>Multi-infrastructure interdependency analysis</li>
              <li>Resilience testing and weak point identification</li>
              <li>Recovery strategy optimization</li>
            </ul>
          </div>

          <div className="adv-cap-card">
            <div className="adv-cap-header">
              <div className="adv-cap-icon">🕸️</div>
              <h3>R8: Attack Graph Generation</h3>
            </div>
            <p>
              Automatically generate comprehensive attack graphs showing all possible paths from initial access
              to critical asset compromise. Visualizes attack surfaces and prioritizes defensive investments.
            </p>
            <ul className="adv-cap-features">
              <li>Automated attack path enumeration</li>
              <li>Multi-stage attack chain visualization</li>
              <li>Risk-based path prioritization</li>
              <li>Defensive control gap analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="tech-specs-section">
        <div className="section-header">
          <h2 className="section-title">Technical Specifications</h2>
        </div>

        <div className="specs-grid">
          <div className="spec-card">
            <h3>Architecture</h3>
            <ul>
              <li>Multi-agent AI system with distributed intelligence</li>
              <li>Agent-to-Agent (A2A) protocol with &lt;1s latency</li>
              <li>Deploy and persist on Windows, Linux, macOS</li>
              <li>Direct integration with AEON knowledge base</li>
            </ul>
          </div>

          <div className="spec-card">
            <h3>Supported Frameworks</h3>
            <ul>
              <li>Metasploit Framework (autonomous exploitation)</li>
              <li>BloodHound (AD attack path analysis)</li>
              <li>Responder (LLMNR/NBT-NS poisoning)</li>
              <li>Mimikatz (credential extraction)</li>
              <li>Empire, Cobalt Strike, Covenant, Sliver</li>
              <li>Custom exploit generation and delivery</li>
            </ul>
          </div>

          <div className="spec-card">
            <h3>Intelligence Sources</h3>
            <ul>
              <li>Live CVE database with exploit correlation</li>
              <li>MITRE ATT&CK framework (all tactics/techniques)</li>
              <li>Threat actor profiles and current TTPs</li>
              <li>OSINT engine (equipment, people, suppliers)</li>
              <li>Zero-day and N-day exploit intelligence</li>
              <li>Sector-specific attack techniques</li>
            </ul>
          </div>

          <div className="spec-card">
            <h3>Operational Capabilities</h3>
            <ul>
              <li>Fully autonomous operation with minimal human input</li>
              <li>Goal-oriented red team exercises</li>
              <li>Threat actor persona emulation</li>
              <li>IT and OT environment support</li>
              <li>Continuous learning and adaptation</li>
              <li>Comprehensive logging and reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Live Operations Example */}
      <section className="live-operations-section">
        <div className="section-header">
          <h2 className="section-title">Real Agent Red OSINT Operation</h2>
          <p className="section-subtitle">
            Actual intelligence report from autonomous operation - Spectrum Safety Solutions target analysis
          </p>
        </div>

        <div className="operation-container">
          <div className="operation-header">
            <span className="operation-status">🎉 COMPREHENSIVE OSINT OPERATION - COMPLETE</span>
            <span className="operation-badge">✅ MISSION ACCOMPLISHED</span>
          </div>

          <div className="intelligence-domains">
            <div className="domain-card">
              <div className="domain-icon">🏢</div>
              <h3>Corporate Intelligence</h3>
              <ul>
                <li>Sentinel Capital Partners $1.425B acquisition from Carrier Global (March 2024)</li>
                <li>4 unified safety brands: DET-TRONICS, Marioff, Autronica, Fireye</li>
                <li>1,400+ employees across 20+ countries</li>
                <li>CEO: Rajan Goel with comprehensive background intelligence</li>
                <li>Recent expansion: DET-TRONICS acquired R.C. Systems (June 2025)</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">🔧</div>
              <h3>Technical Intelligence</h3>
              <ul>
                <li>Complete product portfolio specifications</li>
                <li>Eagle Quantum Premier safety controllers (47 MITRE ATT&CK techniques applicable)</li>
                <li>Flame detectors, gas detectors, fire suppression systems</li>
                <li>Communication protocol vulnerabilities (Modbus RTU, HART, RS485)</li>
                <li>No publicly disclosed CVEs in NVD databases</li>
              </ul>
            </div>

            <div className="domain-card domain-critical">
              <div className="domain-icon">⚠️</div>
              <h3>Threat Intelligence</h3>
              <ul>
                <li><strong>CRITICAL THREAT LEVEL</strong> assessment</li>
                <li>APT28 (Sandworm Team) Russian military intelligence</li>
                <li>APT38 (Lazarus Group) North Korean state-sponsored</li>
                <li>APT1 (Comment Crew) Chinese PLA Unit 61398</li>
                <li>24+ new CISA ICS vulnerabilities (October 2025)</li>
                <li>134% increase in ICS ransomware incidents (75 Q2 2025)</li>
                <li>RansomHub RaaS specifically targeting industrial safety systems</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">👥</div>
              <h3>Social & Academic Intelligence</h3>
              <ul>
                <li>Executive leadership profiles (Rajan Goel CEO, Alex Whittlesey FP&A)</li>
                <li>33 current job openings showing active expansion</li>
                <li>Cybersecurity Compliance Engineer ($80-120K Minneapolis)</li>
                <li>Academic and professional background intelligence</li>
                <li>Talent acquisition patterns post-acquisition</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">🎯</div>
              <h3>Strategic Intelligence</h3>
              <ul>
                <li>Market positioning against Johnson Controls, Honeywell, Siemens</li>
                <li>18+ month post-acquisition integration security gaps</li>
                <li>Critical infrastructure targeting potential</li>
                <li>Supply chain vulnerabilities affecting downstream customers</li>
              </ul>
            </div>
          </div>

          <div className="operation-deliverables">
            <h3>🚀 OPERATIONAL DELIVERABLES</h3>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>Complete intelligence dossier stored in vector database</span>
              </div>
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>All research findings queryable through dimension-aware system</span>
              </div>
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>Academic format with comprehensive analysis and citations</span>
              </div>
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>Professional threat intelligence classification (TLP:AMBER)</span>
              </div>
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>384-dimensional vectors for optimal similarity search</span>
              </div>
              <div className="deliverable-item">
                <span className="check">✅</span>
                <span>Ready for immediate use in strategic analysis operations</span>
              </div>
            </div>
          </div>

          <div className="key-findings">
            <h3>📊 KEY FINDINGS SUMMARY</h3>
            <div className="findings-columns">
              <div className="finding-column">
                <h4>CRITICAL THREAT ASSESSMENT:</h4>
                <ul>
                  <li>High-value critical infrastructure target</li>
                  <li>Nation-state actor interest due to safety system access</li>
                  <li>Criminal organization ransomware targeting</li>
                  <li>89% MITRE ATT&CK for ICS technique coverage by APT groups</li>
                  <li>Critical gap in integration security post-acquisition</li>
                </ul>
              </div>
              <div className="finding-column">
                <h4>BUSINESS INTELLIGENCE:</h4>
                <ul>
                  <li>Successful private equity acquisition and integration</li>
                  <li>Unified platform challenging established market leaders</li>
                  <li>Geographic expansion across 20+ countries</li>
                  <li>Active hiring indicating growth trajectory</li>
                  <li>Cybersecurity talent acquisition priority</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="vector-database-info">
            <h4>🔍 VECTOR DATABASE STORAGE</h4>
            <p>
              <strong>Collection:</strong> RedAgent_Org_Spectrum_Safety<br/>
              <strong>Vectors:</strong> 384-dimensional (RedAgent standard)<br/>
              <strong>Metric:</strong> Cosine distance for optimal similarity search<br/>
              <strong>Classification:</strong> TLP:AMBER for strategic intelligence teams<br/>
              <strong>Query Status:</strong> Verified across all intelligence domains
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="agent-red-cta">
        <div className="cta-content">
          <h2>Experience Agent Red in Action</h2>
          <p>See how autonomous AI agents transform red team operations for critical infrastructure</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-cta-primary">Schedule Live Demo</Link>
            <Link to="/simulations/hydroelectric-dam" className="btn-cta-secondary">Try Simulation</Link>
            <Link to="/aeon" className="btn-cta-tertiary">Learn About AEON</Link>
          </div>
        </div>
        <div className="cta-terminal">
          <div className="cta-terminal-text">
            <div className="terminal-line">$ ./agent-red --mode autonomous --target critical-infrastructure</div>
            <div className="terminal-line">→ Initializing AI agents...</div>
            <div className="terminal-line">→ Loading offensive frameworks...</div>
            <div className="terminal-line">→ Querying AEON knowledge base...</div>
            <div className="terminal-line terminal-success">✓ Ready for autonomous red team operations</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentRedPage;
