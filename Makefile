.PHONY: wasm-build
wasm-build:
	cd wasm && wasm-pack build
	npm run lint:fix