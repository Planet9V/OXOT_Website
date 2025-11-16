# OXOT Articles System - Complete Documentation

## Overview

The OXOT Knowledge Hub features 7 comprehensive, professionally-written articles covering critical OT/ICS cybersecurity topics. All articles are written in academic style with AP citations, long-form content, and real-world examples.

## Articles Inventory

### 1. IEC 62443-2-1 CSMS Implementation
- **ID**: `iec-62443-2-1-csms`
- **Category**: IEC 62443
- **Read Time**: 12 min
- **Topics**: CSMS, governance, asset management, maturity models
- **Audience**: OT leaders, CSOs, security-program managers

### 2. IEC 62443-3-2 Risk Assessment
- **ID**: `iec-62443-3-2-risk-assessment`
- **Category**: IEC 62443
- **Read Time**: 10 min
- **Topics**: Risk assessment, threat modeling, OT environments
- **Audience**: OT risk analysts, security engineers, plant managers

### 3. Understanding IEC 62443 SL-T, SL-C, and SL-A
- **ID**: `iec-62443-sl-levels`
- **Category**: IEC 62443
- **Read Time**: 8 min
- **Topics**: Security Level Target, Capability, Achieved
- **Audience**: Security strategists, project engineers, auditors

### 4. The Resilient Factory: Ransomware Readiness
- **ID**: `ransomware-readiness-manufacturing`
- **Category**: Sector Focus
- **Read Time**: 15 min
- **Topics**: Ransomware, manufacturing, resilience, incident response
- **Audience**: Plant engineers, security leads, operations managers

### 5. IACS Security in Energy
- **ID**: `iacs-security-energy`
- **Category**: Sector Focus
- **Read Time**: 13 min
- **Topics**: IT/OT convergence, IACS, DER, grid security
- **Audience**: Grid operators, OT security leads, engineers

### 6. Agent Blue: AI-Powered Defensive Operations ⭐ NEW
- **ID**: `agent-blue-defensive-operations`
- **Category**: Platform Deep-Dive
- **Read Time**: 18 min
- **Topics**: AI defense, autonomous SOC, threat detection, adaptive security
- **Audience**: Security operations teams, SOC managers, CISO, security architects
- **Length**: 850+ lines of comprehensive content
- **Features**:
  - Multi-layer intelligence architecture
  - Core capabilities (protocol analysis, adaptive learning, OT-specific detection)
  - Real-world performance metrics
  - Integration strategies
  - AP-style academic references

### 7. The SBOM Imperative ⭐ NEW
- **ID**: `sbom-imperative-ot-supply-chain`
- **Category**: Emerging Standards
- **Read Time**: 16 min
- **Topics**: SBOM, supply chain security, CycloneDX, SPDX, vulnerability management
- **Audience**: Supply chain security managers, procurement teams, compliance officers
- **Length**: 750+ lines of technical deep-dive
- **Features**:
  - SPDX vs CycloneDX comparison with code examples
  - Regulatory landscape (EO 14028, Cyber Resilience Act)
  - Implementation strategies
  - Practical procurement guidance
  - Technical format examples (JSON)

## Article Structure

### Required Fields

```javascript
{
  id: string,                    // Unique kebab-case identifier
  title: string,                 // Full article title
  category: string,              // Category for filtering
  abstract: string,              // 1-2 sentence summary
  audience: string,              // Target audience description
  keywords: string[],            // Array of keywords
  readTime: string,              // "XX min read"
  date: string,                  // ISO date "YYYY-MM-DD"
  content: string,               // Full markdown content
  learningObjectives?: string[]  // Optional: learning objectives array
}
```

### Content Structure (Markdown)

All articles follow this markdown structure:

```markdown
# Article Title

## Executive Summary
Brief overview of the topic and key takeaways.

## Main Sections
### Subsection
Content with proper formatting:
- Bullet points
- **Bold** for emphasis
- Technical terms properly formatted

## Case Studies / Examples
Real-world examples with:
- Company/sector (anonymized if needed)
- Challenge described
- Solution implemented
- Results/outcomes
- Lessons learned

## Technical Deep-Dive
Detailed technical content:
- Code examples (if applicable)
- Architecture diagrams (described)
- Step-by-step procedures
- Best practices

## Implementation / Practical Guidance
- Roadmaps
- Checklists
- Decision frameworks
- Tool recommendations

## Conclusion
Summary of key points and call-to-action

---

## References

Author, A. (Year). "Article Title." *Publication*, Volume(Issue), pages.

Organization. (Year). "Document Title." Publication Type/Number.
```

## Writing Guidelines

### Academic Style

**DO**:
- Use formal, professional tone
- Cite sources with AP style
- Provide evidence for claims
- Use technical terminology correctly
- Include real-world examples
- Structure arguments logically

**DON'T**:
- Use casual language or slang
- Make unsupported claims
- Over-use marketing language
- Include personal opinions without evidence
- Use excessive jargon without explanation

### Citation Format (AP Style)

**Books/Reports**:
```
Author, A., & Author, B. (Year). "Title of Work." Publisher.
```

**Journal Articles**:
```
Author, A. (Year). "Article Title." *Journal Name*, Volume(Issue), pages.
```

**Organizations/Standards**:
```
Organization. (Year). "Document Title." Document Number.
```

**Web Sources**:
```
Organization. (Year). "Page Title." Retrieved from https://url.com
```

### Content Length Guidelines

- **Executive Summary**: 200-300 words
- **Main Sections**: 300-500 words each (3-5 sections)
- **Case Studies**: 200-300 words each (2-3 per article)
- **Technical Content**: As needed for clarity
- **Conclusion**: 150-200 words
- **References**: Minimum 5-10 quality sources

**Total Article Length**: 2,000-5,000 words (400-1,000+ lines)

## Categories

Current categories in use:

1. **IEC 62443** - Standards-focused articles
2. **Sector Focus** - Industry-specific content
3. **Platform Deep-Dive** ⭐ NEW - OXOT platform features
4. **Emerging Standards** ⭐ NEW - New/evolving standards
5. **Architecture & Design** - System architecture topics
6. **Threat Intelligence** - Threat analysis and forensics
7. **People & Process** - Human factors, culture, processes
8. **Practical Implementation** - How-to guides
9. **Compliance & Standards** - Regulatory compliance
10. **Operations & Maintenance** - Operational topics
11. **Emerging Technology** - New technologies (AI, edge, etc.)
12. **OT Fundamentals** - Foundational concepts

## Adding New Articles

### Step-by-Step Process

1. **Research & Outline**
   ```
   - Identify topic and target audience
   - Research thoroughly (minimum 10 sources)
   - Create detailed outline
   - Identify case studies/examples
   ```

2. **Write Content**
   ```
   - Follow markdown structure
   - Maintain academic tone
   - Include proper citations
   - Add code examples if relevant
   - Keep paragraphs focused and concise
   ```

3. **Review & Edit**
   ```
   - Check for technical accuracy
   - Verify all citations
   - Proofread for grammar/spelling
   - Ensure consistent formatting
   - Validate markdown syntax
   ```

4. **Add to Data File**
   ```javascript
   // In src/data/articlesData.js
   export const articlesData = [
     // ... existing articles
     {
       id: 'your-article-id',
       title: 'Your Article Title',
       category: 'Appropriate Category',
       abstract: 'Compelling 1-2 sentence summary that makes people want to read.',
       audience: 'Specific target audience description',
       keywords: ['keyword1', 'keyword2', 'keyword3', 'keyword4'],
       readTime: 'XX min read',
       date: '2025-MM-DD',
       content: `# Your Article Title

       [Your markdown content here]

       ## References
       [Your citations here]
       `
     }
   ];
   ```

5. **Test Display**
   ```bash
   npm run dev
   # Navigate to http://localhost:5173/articles
   # Click on your article
   # Verify formatting, links, and content display
   ```

6. **Commit**
   ```bash
   git add src/data/articlesData.js
   git commit -m "feat: Add article on [topic]"
   ```

## Technical Implementation

### File Structure

```
src/data/articlesData.js
├── Export: articlesData (array)
├── Helper: getArticleById(id)
├── Helper: getArticlesByCategory(category)
├── Helper: getAllCategories()
└── Helper: searchArticles(query)
```

### Helper Functions

```javascript
// Get single article by ID
const article = getArticleById('agent-blue-defensive-operations');

// Get all articles in category
const platformArticles = getArticlesByCategory('Platform Deep-Dive');

// Get all available categories
const categories = getAllCategories();

// Search articles
const searchResults = searchArticles('zero trust');
```

### Display Components

**ArticleCard.jsx**
- Displays article preview card
- Props: article object
- Shows: title, abstract, category, read time, keywords

**ArticlesPage.jsx**
- Lists all articles
- Category filtering
- Search functionality
- Grid layout

**ArticleDetailPage.jsx**
- Full article view
- Markdown rendering
- Table of contents (auto-generated)
- Related articles suggestions

## Content Quality Checklist

Before publishing any article:

### Technical Accuracy
- [ ] All technical information verified
- [ ] Code examples tested (if applicable)
- [ ] Product names/versions current
- [ ] Standards references accurate
- [ ] No misleading or incorrect information

### Writing Quality
- [ ] Grammar and spelling checked
- [ ] Consistent terminology throughout
- [ ] Logical flow and structure
- [ ] Transitions between sections smooth
- [ ] Conclusion summarizes key points

### Citations & References
- [ ] All claims supported by citations
- [ ] Citation format consistent (AP style)
- [ ] Minimum 5-10 quality sources
- [ ] References section complete
- [ ] No broken links or outdated sources

### Formatting
- [ ] Markdown syntax correct
- [ ] Headers properly nested (H1 → H2 → H3)
- [ ] Lists formatted correctly
- [ ] Code blocks have language specified
- [ ] No rendering errors

### SEO & Discoverability
- [ ] Keywords relevant and specific
- [ ] Abstract compelling and clear
- [ ] Title descriptive and searchable
- [ ] Category appropriate
- [ ] Audience clearly defined

## Performance Considerations

### Lazy Loading

Articles content is loaded only when displayed:
```javascript
// In ArticleDetailPage.jsx
const article = getArticleById(id);
// Content is in memory but markdown rendering is deferred
```

### Search Optimization

Search function is optimized:
```javascript
// Searches title, abstract, and keywords only (not full content)
// For performance with large article database
```

### Future Enhancements

Potential improvements:
1. **Full-text search** using search index
2. **Article versioning** for updates
3. **Author profiles** and bylines
4. **Related articles** algorithm
5. **Reading progress** indicator
6. **Save/bookmark** functionality
7. **Comments/discussion** system
8. **PDF export** option

## Maintenance

### Regular Updates

- Review articles quarterly for accuracy
- Update statistics and data annually
- Refresh references as new research emerges
- Update code examples with current best practices
- Check for broken links monthly

### Deprecation Process

If an article becomes outdated:
1. Add deprecation notice to abstract
2. Link to replacement article if available
3. Keep for historical reference (don't delete)
4. Update metadata with deprecation date

## Analytics (Future)

Track article performance:
- Page views per article
- Average read time
- Bounce rate
- Search terms leading to articles
- Most popular articles
- Category distribution of views

## Conclusion

The OXOT articles system provides a professional, scalable platform for sharing OT/ICS cybersecurity knowledge. By maintaining high quality standards and consistent structure, the knowledge hub serves as a valuable resource for critical infrastructure professionals.

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Maintained By**: OXOT Content Team
