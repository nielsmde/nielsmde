REMOTE="nielsm@vulpecula.uberspace.de:~/html/"

html:
	python genpage.py

copy:
	rsync -rvu index.html ./static ${REMOTE}

deploy: html copy

serve: html
	httpster -s

clean:
	rm index.html
