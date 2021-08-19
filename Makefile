.PHONY: wasm-build
wasm-build:
	cd wasm && wasm-pack build
	npm run lint:fix

.PHONY: run
run:
	make wasm-build
	npm run dev