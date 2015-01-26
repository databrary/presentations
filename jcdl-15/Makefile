BIBFILES=references
default: paper.pdf paper.aux paper.bbl

%.aux: %.tex
	pdflatex -shell-escape -interaction=nonstopmode $<

%.bbl: %.aux $(addsuffix .bib,$(BIBFILES))
	bibtex $* || touch $@

%.pdf %.aux: %.tex %.bbl
	pdflatex -shell-escape -interaction=nonstopmode $<

