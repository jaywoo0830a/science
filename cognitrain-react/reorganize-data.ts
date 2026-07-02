/**
 * Reorganize data files by domain instead of "extra-all" naming.
 * Physics: mechanics.ts, em.ts, thermo.ts, waves.ts, modern.ts, constants.ts
 * Chemistry: stoichiometry.ts, gases.ts, thermochemistry.ts, kinetics.ts,
 *            equilibrium.ts, acidbase.ts, electrochemistry.ts, solutions.ts, nuclear.ts
 */
import * as fs from "fs";
import * as path from "path";

// ---- Read all physics concepts ----
function readPhysicsConcepts(): Record<string, string[]> {
  const files = [
    "src/data/physics/mechanics.ts",
    "src/data/physics/em.ts",
    "src/data/physics/thermoWavesModern.ts",
    "src/data/physics/constants.ts",
    "src/data/physics/extended.ts",
    "src/data/physics/extra-all.ts",
    "src/data/physics/extra-all2.ts",
    "src/data/physics/extra-all3.ts",
  ];

  const byDomain: Record<string, string[]> = {};

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    // Extract all concept objects using a regex that matches { keyword:..., domain:..., ... }
    const regex = /\{\s*keyword:\s*"([^"]+)"[\s\S]*?\n\s*\}/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const conceptBlock = match[0];
      const domainMatch = conceptBlock.match(/domain:\s*"([^"]+)"/);
      if (domainMatch) {
        const domain = domainMatch[1];
        if (!byDomain[domain]) byDomain[domain] = [];
        byDomain[domain].push(conceptBlock);
      }
    }
  }
  return byDomain;
}

// ---- Read all chemistry concepts ----
function readChemistryConcepts(): Record<string, string[]> {
  const files = [
    "src/data/chemistry/index.ts",
    "src/data/chemistry/extra.ts",
    "src/data/chemistry/extra2.ts",
  ];

  const byDomain: Record<string, string[]> = {};

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const regex = /\{\s*keyword:\s*"([^"]+)"[\s\S]*?\n\s*\}/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const conceptBlock = match[0];
      const domainMatch = conceptBlock.match(/domain:\s*"([^"]+)"/);
      if (domainMatch) {
        const domain = domainMatch[1];
        if (!byDomain[domain]) byDomain[domain] = [];
        byDomain[domain].push(conceptBlock);
      }
    }
  }
  return byDomain;
}

// ---- Write physics domain files ----
const physicsDomains: Record<string, string> = {
  mechanics: "Mechanics",
  em: "Electricity & Magnetism",
  thermo: "Thermodynamics & Fluids",
  waves: "Waves & Optics",
  modern: "Modern Physics",
};

const physicsConcepts = readPhysicsConcepts();

// Separate special domains (not standard physics domains)
const specialPhysics: Record<string, string[]> = {};
for (const [domain, concepts] of Object.entries(physicsConcepts)) {
  if (!physicsDomains[domain]) {
    specialPhysics[domain] = concepts;
    delete physicsConcepts[domain];
  }
}

for (const [domain, label] of Object.entries(physicsDomains)) {
  const concepts = physicsConcepts[domain] || [];
  const varName = `physics${domain[0].toUpperCase() + domain.slice(1)}`;
  const content = `import type { ConceptDef } from "../../engine/types";

export const ${varName}: ConceptDef[] = [
  // === ${label} (${concepts.length} cards) ===
${concepts.map((c, i) => `  ${c}${i < concepts.length - 1 ? "," : ""}`).join("\n")}
];
`;
  fs.writeFileSync(`src/data/physics/${domain}.ts`, content, "utf-8");
  console.log(`✅ Physics ${domain}: ${concepts.length} cards`);
}

// Write constants (Lane B/C + special)
const allSpecial: string[] = [];
for (const concepts of Object.values(specialPhysics)) {
  allSpecial.push(...concepts);
}
// Also get original constants
const constantsContent_orig = fs.readFileSync("src/data/physics/constants.ts", "utf-8");
const constRegex = /\{\s*keyword:\s*"([^"]+)"[\s\S]*?\n\s*\}/g;
let cm;
const constConcepts: string[] = [];
while ((cm = constRegex.exec(constantsContent_orig)) !== null) {
  constConcepts.push(cm[0]);
}
// Deduplicate
const seenKeywords = new Set<string>();
const uniqueConstants: string[] = [];
for (const c of [...constConcepts, ...allSpecial]) {
  const kwMatch = c.match(/keyword:\s*"([^"]+)"/);
  if (kwMatch && !seenKeywords.has(kwMatch[1])) {
    seenKeywords.add(kwMatch[1]);
    uniqueConstants.push(c);
  }
}

const constFile = `import type { ConceptDef } from "../../engine/types";

export const physicsConstants: ConceptDef[] = [
  // === Constants, Dimensions & Special Lanes (${uniqueConstants.length} cards) ===
${uniqueConstants.map((c, i) => `  ${c}${i < uniqueConstants.length - 1 ? "," : ""}`).join("\n")}
];
`;
fs.writeFileSync("src/data/physics/constants.ts", constFile, "utf-8");
console.log(`✅ Physics constants: ${uniqueConstants.length} cards`);

// ---- Write chemistry domain files ----
const chemistryDomains: Record<string, string> = {
  stoichiometry: "Stoichiometry",
  gases: "Gases",
  thermochemistry: "Thermochemistry",
  kinetics: "Kinetics",
  equilibrium: "Equilibrium",
  acidbase: "Acid-Base",
  electrochemistry: "Electrochemistry",
  solutions: "Solutions",
  nuclear: "Nuclear",
};

const chemistryConcepts = readChemistryConcepts();

for (const [domain, label] of Object.entries(chemistryDomains)) {
  const concepts = chemistryConcepts[domain] || [];
  const varName = `chemistry${domain[0].toUpperCase() + domain.slice(1)}`;
  const content = `import type { ConceptDef } from "../../engine/types";

export const ${varName}: ConceptDef[] = [
  // === ${label} (${concepts.length} cards) ===
${concepts.map((c, i) => `  ${c}${i < concepts.length - 1 ? "," : ""}`).join("\n")}
];
`;
  fs.writeFileSync(`src/data/chemistry/${domain}.ts`, content, "utf-8");
  console.log(`✅ Chemistry ${domain}: ${concepts.length} cards`);
}

// ---- Update index files ----
const physicsIndex = `import type { SubjectModule } from "../../engine/types";
import { physicsMechanics } from "./mechanics";
import { physicsEm } from "./em";
import { physicsThermo } from "./thermo";
import { physicsWaves } from "./waves";
import { physicsModern } from "./modern";
import { physicsConstants } from "./constants";

export const physicsModule: SubjectModule = {
  id: "physics",
  name: "Physics",
  concepts: [
    ...physicsMechanics,
    ...physicsEm,
    ...physicsThermo,
    ...physicsWaves,
    ...physicsModern,
    ...physicsConstants,
  ],
};
`;
fs.writeFileSync("src/data/physics/index.ts", physicsIndex, "utf-8");

const chemistryIndex = `import type { SubjectModule } from "../../engine/types";
import { chemistryStoichiometry } from "./stoichiometry";
import { chemistryGases } from "./gases";
import { chemistryThermochemistry } from "./thermochemistry";
import { chemistryKinetics } from "./kinetics";
import { chemistryEquilibrium } from "./equilibrium";
import { chemistryAcidbase } from "./acidbase";
import { chemistryElectrochemistry } from "./electrochemistry";
import { chemistrySolutions } from "./solutions";
import { chemistryNuclear } from "./nuclear";

export const chemistryModule: SubjectModule = {
  id: "chemistry",
  name: "Chemistry",
  concepts: [
    ...chemistryStoichiometry,
    ...chemistryGases,
    ...chemistryThermochemistry,
    ...chemistryKinetics,
    ...chemistryEquilibrium,
    ...chemistryAcidbase,
    ...chemistryElectrochemistry,
    ...chemistrySolutions,
    ...chemistryNuclear,
  ],
};

// Re-export for backward compatibility
export { chemistryStoichiometry as chemistryCards };
`;
fs.writeFileSync("src/data/chemistry/index.ts", chemistryIndex, "utf-8");

// ---- Delete old extra files ----
const toDelete = [
  "src/data/physics/thermoWavesModern.ts",
  "src/data/physics/extended.ts",
  "src/data/physics/extra-all.ts",
  "src/data/physics/extra-all2.ts",
  "src/data/physics/extra-all3.ts",
  "src/data/chemistry/extra.ts",
  "src/data/chemistry/extra2.ts",
];
for (const f of toDelete) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log(`🗑️  Deleted: ${f}`);
  }
}

console.log("\n🎉 Reorganization complete!");
