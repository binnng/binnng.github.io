build:
	uncss index.dev.html > styles/app.min.css
	cleancss styles/app.min.css -o styles/app.min.css
	uglifyjs scripts/app.js -m -o scripts/app.min.js
	htmlmin -o index.html index.dev.html
	sed -i '' 's/app\./app\.min\./g' index.html