build:
	uncss index.dev.html > styles/app.min.css
	cleancss styles/app.css -o styles/app.min.css
	uglifyjs scripts/app.js -m -o scripts/app.min.js
	htmlmin -o index.tmp.html index.dev.html
	sed -i '' 's/app\./app\.min\./g' index.tmp.html
	html-inline -i index.tmp.html -o index.html --ignore-images
	rm index.tmp.html
