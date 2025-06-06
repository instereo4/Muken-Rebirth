import fs from "fs";

const inputPath = "./addon_english.txt";
const outputPath = "./heroAbilities.json";

const file = fs.readFileSync(inputPath, "utf-8");
const lines = file.split(/\r?\n/);

const result = {};
let currentHeroKey = null;

// Armazena dados agrupados por habilidade
const groupedAbilities = {};

// Função para gerar chave com sufixo se necessário
function getKeyWithSuffix(number, index) {
  return index === 0 ? number : number + String.fromCharCode(96 + index + 1); // 'b', 'c', etc.
}

for (const line of lines) {
  const heroMatch = line.match(/"npc_dota_hero_[^"]*"\s*"([^"]*)"/);
  if (heroMatch) {
    const heroName = heroMatch[1].trim();
    currentHeroKey = heroName.toLowerCase().replace(/\s+/g, "_");
    result[currentHeroKey] = {};
    groupedAbilities[currentHeroKey] = {};
    continue;
  }

  if (!currentHeroKey) continue;

  const abilityMatch = line.match(
    /"DOTA_Tooltip_ability_([^_]+)_([0-9]+)__([^"]+)"\s*"([^"]*)"/
  );
  if (abilityMatch) {
    const [, , abilityNumber, suffix, text] = abilityMatch;
    const abilityPrefix = suffix.split("_")[0]; // ex: "shield", "lance", etc.
    const key = `${abilityNumber}__${abilityPrefix}`;

    if (!groupedAbilities[currentHeroKey][key]) {
      groupedAbilities[currentHeroKey][key] = {
        abilityNumber,
        entries: [],
      };
    }

    groupedAbilities[currentHeroKey][key].entries.push(text);
  }
}

// Processa os dados agrupados
for (const heroKey in groupedAbilities) {
  const abilityGroups = Object.values(groupedAbilities[heroKey]);
  const groupedByNumber = {};

  for (const group of abilityGroups) {
    const { abilityNumber } = group;
    if (!groupedByNumber[abilityNumber]) {
      groupedByNumber[abilityNumber] = [];
    }
    groupedByNumber[abilityNumber].push(group);
  }

  for (const number in groupedByNumber) {
    const variants = groupedByNumber[number];

    variants.forEach((variant, idx) => {
      const abilityKey = getKeyWithSuffix(number, idx);
      const data = {};
      const entries = variant.entries;

      if (entries.length > 0) data.skillname = entries[0];
      if (entries.length > 1) data.description = entries[1];
      for (let i = 2; i < entries.length; i++) {
        data[entries[i]] = "";
      }

      result[heroKey][abilityKey] = data;
    });
  }
}

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");
console.log("✅ JSON gerado com habilidades agrupadas corretamente.");
