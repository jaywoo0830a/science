#!/bin/bash
# ============================================================
# Pandoc + XeLaTeX PDF Build Script
# ============================================================
# Usage:
#   ./build_pdf.sh                    # Build both PDFs
#   ./build_pdf.sh chemistry          # Build chemistry only
#   ./build_pdf.sh physics            # Build physics only
#
# Requirements:
#   - pandoc >= 2.0
#   - xelatex (TeX Live or similar)
#   - Required LaTeX packages: amsmath, amssymb, longtable,
#     array, booktabs, xcolor, enumitem, fontspec, hyperref
# ============================================================

set -e

PANDOC_OPTS="--pdf-engine=xelatex \
  --from=markdown+smart \
  --table-of-contents \
  --toc-depth=2 \
  -V colorlinks=true \
  -V linkcolor=blue"

build_one() {
  local name="$1"
  local input="${name}/honors-${name}-expression-to-equation-vocabulary-latex.md"
  local output="pdf/honors-${name}-expression-to-equation-vocabulary.pdf"

  if [ ! -f "$input" ]; then
    echo "ERROR: Input file not found: $input"
    exit 1
  fi

  mkdir -p pdf
  echo "Building: $input → $output"
  pandoc "$input" -o "$output" $PANDOC_OPTS
  echo "  ✓ Done: $output"
}

case "${1:-all}" in
  chemistry)
    build_one chemistry
    ;;
  physics)
    build_one physics
    ;;
  all|both)
    build_one chemistry
    build_one physics
    ;;
  *)
    echo "Usage: $0 [chemistry|physics|all]"
    exit 1
    ;;
esac

echo ""
echo "All builds complete."
