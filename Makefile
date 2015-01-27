relazione.pdf: relazione.tex
	pdflatex $^

frontespizio.png: relazione.pdf
	convert -density 60 $^[0] -quality 100 -background white -flatten -bordercolor black -border 1 $@
