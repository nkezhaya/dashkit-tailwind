TARGET_OS := $(shell uname | tr '[:upper:]' '[:lower:]' | sed "s/darwin/macos/")
TARGET_ARCH := $(shell uname -p | tr '[:upper:]' '[:lower:]')
TAILWIND_VERSION := "3.0.23"

all: bin/tailwind
	bin/tailwind --input src/theme.css --output src/theme.dist.css

watch: bin/tailwind
	bin/tailwind --input src/theme.css --output src/theme.dist.css --watch

bin/tailwind:
	mkdir -p bin
	curl -Lo bin/tailwind "https://github.com/tailwindlabs/tailwindcss/releases/download/v${TAILWIND_VERSION}/tailwindcss-${TARGET_OS}-${TARGET_ARCH}";
	chmod +x bin/tailwind

format: node_modules/.bin/prettier
	node_modules/.bin/prettier --print-width 256 --html-whitespace-sensitivity ignore --write src/*.html

node_modules/.bin/prettier:
	npm init --force
	npm install -D prettier prettier-plugin-tailwindcss tailwindcss@${TAILWIND_VERSION} @tailwindcss/forms

.PHONY: clean
clean:
	rm -rf bin src/*.dist.css node_modules package.json package-lock.json
