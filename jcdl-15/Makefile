BIBFILES=references
default: demo.pdf demo.aux demo.bbl

%.aux: %.tex
	pdflatex -shell-escape -interaction=nonstopmode $<

%.bbl: %.aux $(addsuffix .bib,$(BIBFILES))
	bibtex $* || touch $@

%.pdf %.aux: %.tex %.bbl
	pdflatex -shell-escape -interaction=nonstopmode $<

