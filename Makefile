TARGET_OS := $(shell uname | tr '[:upper:]' '[:lower:]' | sed "s/darwin/macos/")
TARGET_ARCH := $(shell uname -p | tr '[:upper:]' '[:lower:]')
TAILWIND_VERSION := "v3.0.18"

all: bin/tailwind
	bin/tailwind
	mkdir -p build
	bin/tailwind --input src/theme.css --output src/theme.dist.css

watch: bin/tailwind
	bin/tailwind
	mkdir -p build
	bin/tailwind --input src/theme.css --output src/theme.dist.css --watch

bin/tailwind:
	mkdir -p bin
	curl -Lo bin/tailwind "https://github.com/tailwindlabs/tailwindcss/releases/download/${TAILWIND_VERSION}/tailwindcss-${TARGET_OS}-${TARGET_ARCH}";
	chmod +x bin/tailwind

.PHONY: clean
clean:
	rm -rf bin src/*.dist.css
