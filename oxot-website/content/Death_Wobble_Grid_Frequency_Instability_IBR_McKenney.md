# The Death Wobble: Grid Frequency Instability in the Age of Inverter-Based Resources

**Author:** Jim McKenney, PE
**Date:** 2024-Q4
**Category:** Grid Stability & Power Systems Engineering

---

## Abstract

North American power grids face an unprecedented stability crisis as declining system inertia drives Rate of Change of Frequency (RoCoF) beyond critical protective relay thresholds. The rapid replacement of synchronous generators with inverter-based resources (IBRs)—wind, solar, and battery storage—fundamentally alters grid physics, reducing the rotational inertia that historically provided inherent frequency stability. When RoCoF exceeds 1 Hz/s, protection relays designed for high-inertia conditions misoperate, triggering spurious trips that cascade across interconnections. This paper examines the technical mechanisms driving frequency instability, analyzes the July 2024 data center incident where 1,500 MW disconnected simultaneously in the Eastern Interconnection, and evaluates vulnerabilities across the three U.S. synchronous grids. As fossil plant retirements accelerate through 2024, traditional N-1 contingency planning proves inadequate for low-inertia environments where normal disturbances can trigger catastrophic cascading failures. Mitigation requires urgent deployment of grid-forming inverters, synthetic inertia systems, enhanced monitoring infrastructure, and fundamental revision of protection relay settings and NERC reliability standards.

---

## 1. Introduction: The Grid's Dangerous New Rhythm

For over a century, the North American power grid has operated as the world's most complex synchronized machine, maintaining a precise 60 Hz frequency through the massive rotational inertia of synchronous generators. This frequency—the grid's heartbeat—reflects the instantaneous balance between electricity generation and consumption. When supply matches demand, frequency holds steady at 60.00 Hz. Any imbalance causes deviation: excess demand pulls frequency down, excess supply pushes it up.

Traditional power plants—coal, natural gas, nuclear, hydroelectric—provide automatic stabilization through their enormous spinning turbines and rotors. These machines, with rotational kinetic energy measured in gigawatt-seconds (GW-s), resist frequency changes like a massive flywheel. When a generator trips offline or a transmission line fails, this collective inertia slows the frequency decline, providing critical seconds for protective systems and control actions to arrest the disturbance before it cascades.

We are now witnessing a fundamental transformation of this physics. The energy transition replaces high-inertia synchronous generators with inverter-based resources (IBRs)—solar photovoltaic arrays, wind turbines, and battery energy storage systems. These technologies connect via power electronics that decouple them from the grid's rotational dynamics. They lack physical mass spinning synchronously at 60 Hz. As IBR penetration grows and fossil plants retire, total system inertia declines precipitously.

The consequence is a dangerous "death wobble"—rapid, uncontrolled frequency excursions following routine disturbances. This paper examines the technical mechanisms, real-world incidents, and systemic risks of grid frequency instability in the age of inverter-based resources.

---

## 2. Technical Background: How Synchronous Inertia Works

### 2.1 Grid Frequency Fundamentals

North American grids operate at a nominal frequency of 60 Hz, maintained within extremely tight tolerances—typically ±0.5 Hz under normal conditions, with some balancing authorities requiring ±0.01 Hz deadbands. Frequency serves as the real-time indicator of generation-load balance across the entire interconnection. Unlike voltage, which varies locally, frequency is synchronous across all generators within an interconnection.

Maintaining frequency stability is non-negotiable. Significant deviations damage sensitive electronics, desynchronize industrial processes, and trigger protective relay operations that can cascade into widespread blackouts. Equipment designed for 60 Hz operation experiences reduced efficiency, increased heating, and mechanical stress at off-nominal frequencies.

### 2.2 Rotational Inertia as Grid Stabilizer

Synchronous generators possess rotational inertia (H) quantified by the inertia constant, representing the time in seconds a generator could supply rated power using only stored kinetic energy:

**H = (J × ω²) / (2S)**

Where:
- J = moment of inertia of rotating mass
- ω = nominal rotational speed (rad/s)
- S = generator MVA rating

Typical inertia constants range from H = 2-8 seconds for thermal plants, with large nuclear and hydro units providing higher values. A 1,000 MW coal plant with H = 5 stores approximately 5,000 MWh of kinetic energy in its spinning turbine-generator.

When frequency declines following a generation loss, this stored kinetic energy automatically releases to the grid, governed by the swing equation. This **inertial response** is instantaneous (sub-second), passive (requires no control signals), and proportional to the frequency deviation. Critically, it occurs *before* any control systems react, slowing the Rate of Change of Frequency (RoCoF) to manageable levels.

### 2.3 Understanding Rate of Change of Frequency (RoCoF)

RoCoF, measured in Hz/s, quantifies how rapidly grid frequency changes following a disturbance. In high-inertia systems, RoCoF typically remains below 0.1-0.2 Hz/s for survivable N-1 contingencies (loss of largest single generator or transmission element). This slow frequency decline allows:

1. **Primary Frequency Control (PFC):** Governor-based automatic generation control responds within 2-10 seconds
2. **Protection coordination:** Relays operate in designed sequences without misoperation
3. **Operator intervention:** System operators assess conditions and implement manual controls

In low-inertia systems, the same disturbance produces RoCoF exceeding 1 Hz/s—potentially reaching 2 Hz/s over short measurement windows. At these rates, frequency can plummet from 60 Hz to under-frequency load shedding (UFLS) thresholds (59.5 Hz, 59.3 Hz) in under one second, faster than PFC can respond.

### 2.4 The IBR Inertia Deficit

Inverter-based resources fundamentally differ from synchronous machines:

**Synchronous Generators:**
- Direct mechanical coupling to grid frequency
- Automatic inertial response (no control delay)
- Natural voltage support through excitation systems
- Inherent fault current contribution
- Black start capability

**Inverter-Based Resources:**
- Power electronic decoupling from grid dynamics
- No inherent inertial response (unless programmed)
- Voltage support requires control algorithms
- Limited fault current (typically 1.1-1.2 pu)
- Grid-dependent (cannot operate islanded without advanced controls)

As IBRs displace synchronous generation, system inertia declines linearly. ERCOT, with 43% IBR capacity penetration (exceeding 75% instantaneous penetration during low-load, high-renewable periods), has experienced inertia reductions of 30-40% compared to historical levels. The Western Interconnection faces similar trajectories as coal retirements accelerate.

---

## 3. The Declining Inertia Crisis: Data and Trends

### 3.1 Fossil Plant Retirement Acceleration (2020-2024)

The pace of thermal generation retirement has accelerated dramatically:

**Coal Plant Retirements:**
- 2020: 13.5 GW retired (U.S. total)
- 2021: 12.6 GW retired
- 2022: 13.5 GW retired
- 2023: 15.1 GW retired
- 2024 (projected): 18+ GW retirement announcements

**Natural Gas Combined-Cycle:**
While gas capacity has grown overall, older inefficient units face retirement pressure from renewable economics and regulatory constraints. The Western Interconnection projects 12+ GW of gas retirements by 2030.

**Nuclear:**
Premature nuclear retirements (Diablo Canyon nearly closed before California's reversal; Indian Point, Pilgrim, Palisades) remove baseload generation with extremely high inertia constants (H = 6-8 seconds).

Each retired synchronous plant removes not just energy capacity but critical inertia. A 600 MW coal plant with H = 5 provides 3,000 MW-s of inertia. Replacing this with 600 MW of solar PV provides zero inertia unless grid-forming inverters are deployed.

### 3.2 IBR Growth Trajectory

**Solar Photovoltaic:**
- U.S. utility-scale solar capacity reached 89 GW by end-2023
- Distributed solar (residential/commercial): 28+ GW
- Interconnection queues contain 750+ GW of solar proposals

**Wind:**
- Total U.S. wind capacity: 146 GW (2023)
- Offshore wind pipeline: 50+ GW in development (East Coast)

**Battery Energy Storage Systems (BESS):**
- Operational capacity: 15+ GW (2024)
- Rapid growth: 10 GW added in 2023 alone
- Queue: 300+ GW of storage proposals

### 3.3 Interconnection-Specific Inertia Decline

**ERCOT (Texas):**
- Current IBR penetration: 43% of installed capacity
- Peak instantaneous penetration: >75% during spring/fall shoulder periods
- Minimum online synchronous generation: declining toward 10-15 GW (from historical 40+ GW)
- Estimated inertia decline: 35% from 2015 baseline

**Eastern Interconnection:**
- More diverse, slower transition due to size and regulatory fragmentation
- PJM (mid-Atlantic): 20-25% IBR penetration projected by 2030
- ISO-NE (New England): Coal retirements leave grid dependent on gas and imports
- 31 Balancing Authorities create coordination challenges

**Western Interconnection (WECC):**
- California leading IBR adoption: 40%+ renewable penetration
- Massive transmission constraints limit renewable export
- 34 Balancing Authorities with varying reliability standards
- Load growth from data centers outpacing resource adequacy planning

### 3.4 Quantifying the RoCoF Threat

European studies (ENTSO-E) modeling future low-inertia scenarios project:
- RoCoF exceeding ±1 Hz/s in 15-20% of system split events by 2030
- Potential for localized RoCoF >2 Hz/s during severe contingencies
- Current protection relays designed for max 0.5 Hz/s normal, 1.0 Hz/s extreme

NERC analyses confirm similar risks for North America:
- Traditional RoCoF: 0.1-0.3 Hz/s for largest contingency
- Low-inertia RoCoF: 0.8-1.5 Hz/s for same contingency
- Extreme scenarios: >2 Hz/s during combined generator/transmission outages

Protection relay manufacturers specify maximum reliable RoCoF detection thresholds around 1 Hz/s (measured over 500ms windows). Beyond this, spurious trips become probable.

---

## 4. Case Studies: When Theory Becomes Reality

### 4.1 July 2024 Data Center Load Loss Incident (Eastern Interconnection)

**Incident Overview:**
In July 2024, a fault occurred on a 230 kV transmission line in the mid-Atlantic region (Eastern Interconnection). The fault caused a voltage dip across a localized area. Within milliseconds, approximately 1,500 MW of data center load simultaneously disconnected—not due to utility protection systems, but from the data centers' own uninterruptible power supply (UPS) systems transferring to backup generators in response to the perceived voltage disturbance.

**Technical Dynamics:**
- **Initial disturbance:** Transmission fault (tree contact, equipment failure, or fault unspecified in public reporting)
- **Voltage dip:** Brief sag to 0.7-0.8 per-unit during fault clearing
- **Load loss:** 1,500 MW instantaneous disconnection
- **Frequency response:** Grid frequency *rose* (opposite of typical contingencies)
- **Voltage response:** Local voltage spike requiring reactive power absorption

**Why This Matters:**
Historically, grid contingency planning focused on sudden *generation* losses (N-1 generator trips). System operators design frequency response, reserves, and UFLS schemes assuming frequency will *decline* following major disturbances. The July 2024 event demonstrated a new vulnerability: massive voltage-sensitive loads with autonomous protection systems can create equally severe disturbances by sudden disconnection, causing frequency and voltage to *rise* uncontrollably.

**NERC Response:**
Following investigation, NERC's Large Load Task Force (LLTF) identified this as an emerging systemic risk:
- Data center concentration in Virginia, Northern California, and Texas creates single-point vulnerabilities
- Existing planning does not adequately model simultaneous large load loss
- Load ride-through requirements (analogous to generator low-voltage ride-through, LVRT) may be necessary
- Potential for new NERC standards requiring load performance during disturbances

The incident occurred in a relatively high-inertia region (Eastern Interconnection). Had it occurred in ERCOT during a low-inertia period (high IBR penetration, minimal synchronous generation online), the frequency/voltage excursion would have been more severe, potentially triggering over-frequency protection and cascading trips.

### 4.2 ERCOT Near-Miss Events (2023-2024)

ERCOT, operating as an isolated synchronous grid with the highest IBR penetration in North America, has experienced multiple concerning frequency events:

**Spring 2023 Low-Inertia Event:**
- Conditions: High wind/solar output, low thermal commitment
- Disturbance: Unplanned trip of 1,200 MW combined-cycle plant
- Observed RoCoF: 0.7-0.9 Hz/s (estimated from public data)
- Frequency nadir: 59.68 Hz (approaching UFLS threshold of 59.5 Hz)
- Recovery: PFC and FFR (Fast Frequency Response from batteries) arrested decline

**Lessons:**
- Frequency dropped faster than historical norms for similar-sized contingencies
- Battery FFR provided critical arrest capability (responding within 1-2 seconds)
- ERCOT implemented new minimum online synchronous generation requirements

**August 2023 Extreme Heat Event:**
- Peak demand: 85+ GW (record-breaking)
- Renewable output: Variable (solar declining during evening peak)
- Thermal fleet stress: Multiple unplanned outages due to heat/age
- Frequency excursions: Multiple events >100 mHz deviation
- Outcome: Grid remained stable but operated at edge of reserves

ERCOT's experience demonstrates that low-inertia grids can remain stable with proper planning—mandating minimum synchronous generation, deploying FFR from batteries, and ensuring robust IBR performance standards. However, the margin for error narrows considerably.

### 4.3 Historical Precedent: 2003 Northeast Blackout

While pre-dating the low-inertia era, the 2003 Northeast Blackout (affecting 50 million people across 8 U.S. states and Ontario) remains instructive:

**Cascade Sequence:**
1. Transmission lines in Ohio sag into trees (inadequate vegetation management)
2. Lines trip due to contact faults
3. Power reroutes to parallel paths, overloading additional lines
4. Operators lack situational awareness (control system failures)
5. Cascading line/generator trips spread across region in <1 hour
6. Total collapse of Eastern Interconnection's northeastern section

**Key Failure Modes:**
- Protection relay miscoordination
- Inadequate real-time monitoring (SCADA blind spots)
- Lack of operator training for cascading events
- Insufficient inter-utility communication

**Low-Inertia Implications:**
Had the 2003 blackout occurred in today's lower-inertia environment, the cascade would have propagated faster. Each generator trip would have caused higher RoCoF, accelerating protection relay operations and reducing operator reaction time. NERC standards implemented post-2003 (vegetation management, synchrophasor deployment, operator training) help, but declining inertia increases baseline risk.

---

## 5. Implications for Grid Operators

### 5.1 Obsolescence of Traditional Protection Philosophy

Protection relay settings and coordination studies conducted assuming high system inertia (H > 4-5 seconds system-wide) become invalid as inertia declines. Relays configured to trip at RoCoF > 0.5 Hz/s for islanding detection will spuriously operate during normal low-inertia contingencies exhibiting 0.8-1.2 Hz/s RoCoF.

**Required Actions:**
- Comprehensive relay setting reviews for all generation and transmission assets
- Updated coordination studies incorporating low-inertia scenarios
- Potential de-sensitization of RoCoF relays (trading off anti-islanding protection for stability)
- Deployment of adaptive protection schemes that adjust settings based on real-time inertia levels

### 5.2 Inadequacy of N-1 Contingency Planning

Traditional reliability planning ensures the system can withstand loss of any single element (N-1 criterion) without cascading. This assumes:
- Sufficient inertia to limit RoCoF during largest contingency
- PFC response arrests frequency within design limits
- Protection systems operate as designed without spurious trips

In low-inertia conditions, N-1 events can trigger N-k cascades (multiple dependent failures) due to:
- High RoCoF causing relay misoperations
- Frequency/voltage exceeding protective thresholds at multiple locations simultaneously
- IBR unexpected trips during disturbances (inadequate ride-through)

**Required Actions:**
- Expand planning to N-2 or probabilistic N-k scenarios
- Develop dynamic contingency analysis incorporating real-time inertia
- Implement special protection schemes (SPS) or remedial action schemes (RAS) for low-inertia conditions

### 5.3 Operational Complexity and Situational Awareness

System operators require real-time visibility into:
- **System inertia levels:** Currently not directly measured; must be estimated from generation dispatch
- **Available frequency response:** From governors, IBR FFR, and load response
- **RoCoF potential:** For credible contingencies given current conditions
- **Critical transmission constraints:** That could propagate cascades

**Required Actions:**
- Deploy advanced synchrophasor networks (PMU density increase)
- Implement real-time inertia estimation algorithms
- Develop operator decision support tools for low-inertia awareness
- Enhanced inter-BA coordination for frequency events

### 5.4 Black Start Capability Gaps

Total grid collapse (blackout) requires **black start** capability—generation assets that can restart without external power and energize transmission to bootstrap other plants. Historically provided by:
- Hydro plants with reservoir storage
- Diesel/gas combustion turbines with onsite fuel
- Some nuclear plants (limited)

As these retire and IBRs dominate, black start gaps emerge:
- Solar/wind require grid voltage to synchronize (cannot self-start)
- Batteries can theoretically provide black start but face reactive power limits for long transmission line energization
- Reduced synchronous machine population means fewer black start resources

**Consequence:** Post-blackout restoration timelines could extend from 24-48 hours to 5-7 days or longer.

---

## 6. Mitigation Strategies: Engineering Solutions

### 6.1 Grid-Forming (GFM) Inverters

**Technology Overview:**
Traditional grid-following (GFL) inverters passively synchronize to grid voltage/frequency, behaving as current sources. Grid-forming (GFM) inverters actively establish voltage and frequency, mimicking synchronous generators.

**Capabilities:**
- **Synthetic inertia:** Algorithms detect RoCoF and inject/absorb power proportionally, emulating physical inertia
- **Voltage source behavior:** Maintain stable voltage during faults
- **Islanded operation:** Can operate autonomously without grid connection
- **Black start potential:** With sufficient energy storage

**Deployment Status:**
- UNIFI Consortium (utility-led) developing GFM standards
- Estimated need: 25-30% of IBR fleet should be GFM-capable
- Current deployment: <5% of existing IBR capacity
- Cost premium: 10-20% higher capital cost vs. GFL

**Challenges:**
- Control algorithm standardization (vendor-specific implementations)
- Interaction stability between multiple GFM units
- Grid code requirements still evolving (NERC/FERC)

### 6.2 Battery Energy Storage as Fast Frequency Response (FFR)

**Mechanism:**
Batteries with power electronics can detect frequency deviations and respond within 100-500 milliseconds—faster than governor-based PFC (2-10 seconds). ERCOT, CAISO, and Australia mandate FFR services.

**Performance:**
- Response time: 0.1-0.5 seconds (vs. 2-10s for governors)
- Arrest capability: Can halt frequency decline before UFLS activation
- Duration: Limited by state-of-charge (typically 15-60 minutes at full output)

**Limitations:**
- Does not provide true inertia (requires frequency deviation to trigger; inertia is instantaneous)
- Energy-limited (cannot sustain response for prolonged imbalances)
- Requires economic incentives (ERCOT pays ~$100-200/MW-year for FFR)

### 6.3 Synchronous Condensers

**Technology:**
Synchronous condensers are rotating machines (essentially generators without prime movers) that provide:
- True rotational inertia (mechanical response)
- Reactive power support (voltage stability)
- Fault current contribution

**Applications:**
- Re-purposing retired coal/gas plants by retaining generator, removing boiler/turbine
- New-build installations at strategic substations
- ERCOT, AEMO (Australia), UK National Grid deploying condensers

**Economics:**
- Capital cost: $50-100M per 200-300 MVA unit
- O&M: Significant (rotating equipment maintenance)
- Lifespan: 40+ years

### 6.4 Enhanced Monitoring and Control Systems

**Synchrophasor Networks (PMUs):**
- High-resolution frequency/voltage/angle measurements (30-120 samples/second)
- Enable real-time inertia estimation algorithms
- NERC requires PMU deployment at major substations; coverage expanding

**Advanced Forecasting:**
- Machine learning models predicting renewable output (15-min to 4-hour horizons)
- Load forecasting incorporating weather, EV charging patterns, data center dynamics
- Inertia forecasting based on unit commitment schedules

**Adaptive Protection:**
- Protection relays that adjust settings based on real-time system conditions
- Centralized schemes coordinating multiple relays for optimal selectivity
- AI/ML algorithms detecting pre-cascade conditions

---

## 7. Policy and Regulatory Imperatives

### 7.1 NERC Standards Revision

Current NERC reliability standards (BAL-003 Frequency Response, PRC-024 Generator Protection) were developed assuming high-inertia systems. Required updates:

- **BAL-003:** Revise frequency response obligations to account for declining inertia, mandate FFR deployment
- **PRC-024:** Update generator ride-through requirements to prevent spurious trips during high-RoCoF events
- **New standard:** Minimum inertia requirements by interconnection or BA
- **IRO-010:** Enhanced reliability coordinator authority during low-inertia conditions

### 7.2 Interconnection Queue Reform

FERC Order 2023 attempts to accelerate interconnection processes, but bottlenecks remain:
- 5-year average queue time (Western Interconnection)
- 1,500+ GW of projects in queues (mostly renewables + storage)
- Cost allocation disputes delaying transmission upgrades

**Needed Reforms:**
- Prioritize grid-forming inverter projects
- Fast-track synchronous condenser and storage projects providing inertia/FFR
- Mandate cluster studies to expedite renewable + storage co-location

### 7.3 Market Design for Ancillary Services

Wholesale electricity markets must value inertia and frequency response:

**Current gaps:**
- Energy-only markets (ERCOT) under-compensate reliability services
- Inertia not explicitly procured or compensated
- FFR markets nascent (ERCOT, CAISO pilot programs)

**Recommended Reforms:**
- Explicit inertia markets ($/MWh-s pricing)
- Enhanced FFR compensation (~$200-500/MW-year minimum)
- Co-optimization of energy, reserves, and stability services
- Long-term capacity markets favoring synchronous resources during transition

---

## 8. Conclusion: Engineering the Transition

The North American power grid stands at a critical inflection point. The rapid decline in system inertia driven by fossil plant retirements and IBR proliferation creates existential frequency stability risks that traditional N-1 contingency planning and protection coordination cannot address. The July 2024 data center incident, ERCOT's low-inertia operational challenges, and European system split events demonstrate that high-RoCoF scenarios exceeding 1 Hz/s are not theoretical—they are emerging realities.

Cascading blackouts triggered by protection relay misoperations during routine disturbances represent a plausible threat across all three U.S. interconnections within the next 5-10 years absent aggressive mitigation. The physics are unforgiving: declining inertia increases RoCoF, high RoCoF fools protective relays, spurious relay trips propagate cascades. No amount of regulatory mandate can alter this fundamental dynamic.

Engineering solutions exist—grid-forming inverters, battery FFR, synchronous condensers, enhanced monitoring—but deployment lags risk accumulation. We require:

1. **Immediate:** NERC standards mandating minimum inertia or maximum RoCoF limits by interconnection
2. **Near-term (1-3 years):** Accelerated GFM inverter deployment (targeting 20-30% of IBR fleet), comprehensive relay setting reviews
3. **Medium-term (3-7 years):** Market structures explicitly valuing inertia/FFR, transmission expansion removing renewable curtailment/congestion
4. **Long-term (7-15 years):** Full transition to GFM-based grid with synthetic inertia equivalent to historical synchronous levels

The grid's "death wobble" is a symptom of physics-based instability, not a failure of vision or commitment to clean energy. We can achieve decarbonization goals while maintaining reliability—but only through clear-eyed recognition of the technical challenges, disciplined engineering analysis, and proactive deployment of stabilization technologies. The cost of inaction—measured in blackout frequency, duration, and economic/societal impact—far exceeds the investment required for proper grid stabilization.

As power systems engineers, we must translate these complex dynamics into actionable risk frameworks for policymakers, utility executives, and grid operators. The transition to inverter-based grids is inevitable and necessary. Ensuring it occurs without catastrophic frequency instability is the engineering imperative of our generation.

---

## References

1. AEMO, "Inertia in the NEM Explained," Australian Energy Market Operator, 2023.
2. NERC, "Frequency Response Initiative Report," North American Electric Reliability Corporation, 2023.
3. ENTSO-E, "High Penetration of Power Electronic Interfaced Power Sources and the Potential Contribution of Grid Forming Converters," European Network of Transmission System Operators for Electricity, 2022.
4. ERCOT, "State of the Grid Report 2024," Electric Reliability Council of Texas, 2024.
5. NERC, "Large Load Task Force Investigation: Data Center Load Loss Event," July 2024.
6. IEEE, "IEEE 1547-2018: Standard for Interconnection and Interoperability of Distributed Energy Resources."
7. UNIFI Consortium, "Grid-Forming Inverter Deployment Roadmap," 2023.
8. WECC, "2024 Western Assessment of Resource Adequacy," Western Electricity Coordinating Council, 2024.
9. U.S. EIA, "Electric Power Annual 2023," U.S. Energy Information Administration, 2024.
10. FERC Order 2023, "Improvements to Generator Interconnection Procedures and Agreements," Federal Energy Regulatory Commission, 2023.

---

**About the Author:**

Jim McKenney, PE, is a veteran Power Systems Engineer with over 30 years of experience in grid operations, frequency stability analysis, and renewable energy integration. He has conducted groundbreaking research on RoCoF dynamics in low-inertia systems and advises utilities and grid operators across North America on stability challenges during the energy transition. McKenney holds Professional Engineer licenses in multiple states and has published extensively on grid reliability, protection coordination, and inverter-based resource performance.
