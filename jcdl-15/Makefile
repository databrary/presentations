BIBFILES=references
default: paper.pdf

%.aux: %.tex
	pdflatex -shell-escape -interaction=nonstopmode $<

%.bbl: %.aux $(addsuffix .bib,$(BIBFILES))
	bibtex $* || touch $@

%.pdf: %.tex %.bbl
	pdflatex -shell-escape -interaction=nonstopmode $<

