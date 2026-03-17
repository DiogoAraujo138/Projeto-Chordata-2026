# Relatório de Melhorias V3 — Ecossistema Chordata

**Data:** 17/03/2026  
**Commit:** `feat: melhorias v3`

---

## 1. BrandsSection — Links Clicáveis e Correção Visual

### Links adicionados
| Marca | URL |
|-------|-----|
| Chordata Consultoria | https://chordataconsultoria.com/ |
| Chordata Analytics | https://chordataanalytics.com.br/ |
| MentAll.Vet | https://www.mentall.vet/ |
| JurídicoPet Digital | https://juridicopetdigital.com.br/ |
| VetConnection | https://brasilfeiras.vet/ |

### Correções visuais
- **MentAll.Vet e VetConnection**: removido fundo escuro (`darkBg: true` → `false`), agora todos os logos aparecem com **fundo branco** e borda `slate-200`
- Todos os cards são agora `<a>` com `target="_blank" rel="noopener noreferrer"`
- **Hover effects**: nome fica `text-blue-500`, card ganha `shadow-md` e `scale-105`
- Propriedade `darkBg` removida completamente — todos consistentes

---

## 2. EcosystemSection — Novo Logo

- **Logo central** substituído por `Chordata_marca_Principal simbolo cor logo branco.png` (símbolo colorido + texto branco)
- **DescomplicaVet removido** do diagrama orbital (agora são 5 satélites)
- Ângulo orbital recalculado dinamicamente: `360 / satellites.length` (72° por satélite)
- Subtítulo atualizado: "5 soluções integradas"
- Arquivo: `src/assets/logos/chordata-ecossistema-branco.png`

---

## 3. TeamSection — Novas Fotos

| Membro | Foto | Origem |
|--------|------|--------|
| Eduardo Monteiro | `eduardo-monteiro.png` (567×566) | Google Drive |
| Mikael Cattani | `mikael-cattani.jpeg` (1280×853) | Google Drive |

- Ambos mapeados corretamente no array `team`
- Sistema de fallback (iniciais) mantido, mas agora **todos os 5 membros** têm foto

---

## 4. TimelineSection — Cronologia com Semestres

| Período | Marco | Logo |
|---------|-------|------|
| **2022** | Chordata Consultoria — Fundação | ✅ |
| **2023** | Chordata Analytics — Lançamento | ✅ |
| **2024 · 1º sem** | MentAll.Vet — Lançamento | ✅ |
| **2024 · 2º sem** | VetConnection — Início do projeto | ❌ (ícone) |
| **2025 · 1º sem** | Jurídico Pet Digital — Lançamento | ✅ |
| **2025 · 2º sem** | VetConnection Evento — Realização | ✅ |
| **2026** | Ecossistema Chordata — Consolidação | ❌ (ícone) |

### Melhorias visuais na timeline
- Indicador de semestre nos **círculos centrais** (ano + semestre em tamanho menor)
- **Badge de semestre** dentro do card (ex: `1º sem`, `2º sem`)
- Desktop: badge visível acima do título
- Mobile: badge entre os logos e a descrição
- 7 marcos distintos (antes eram 6 combinados)

---

## 5. Arquivos Modificados

| Arquivo | Alteração |
|---------|-----------|
| `src/components/sections/BrandsSection.tsx` | Links, hover, fundo branco |
| `src/components/sections/EcosystemSection.tsx` | Novo logo central, -DescomplicaVet, 5 satélites |
| `src/components/sections/TeamSection.tsx` | +fotos Eduardo e Mikael |
| `src/components/sections/TimelineSection.tsx` | 7 marcos com semestres |

## 6. Novos Assets

| Arquivo | Descrição |
|---------|-----------|
| `src/assets/logos/chordata-ecossistema-branco.png` | Logo Chordata símbolo cor + texto branco |
| `src/assets/logos/chordata-ecossistema-principal.png` | Logo Chordata principal (backup) |
| `src/assets/team/eduardo-monteiro.png` | Foto Eduardo Monteiro |
| `src/assets/team/mikael-cattani.jpeg` | Foto Mikael Cattani |

---

## 7. Verificações

- ✅ Build TypeScript sem erros
- ✅ Build Vite produção OK (14.9s)
- ✅ Servidor dev rodando (porta 8080)
- ✅ Todas as imagens carregam no bundle final
- ✅ Git commit realizado
