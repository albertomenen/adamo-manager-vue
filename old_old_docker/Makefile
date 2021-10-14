all: build compile run

build:
	docker build --no-cache -t adamo-vue-manager .

compile:
	docker run --rm -v $(shell pwd):/usr/app adamo-vue-manager yarn install && yarn build

run_dev:
	docker run --rm -d --name vue-manager -p 8080:8080 -v $(shell pwd):/usr/app adamo-vue-manager yarn serve

run:
	docker run --rm --name vue-manager -p 8080:8080 -v $(shell pwd):/usr/app --network host adamo-vue-manager http-server dist

stop:
	docker stop vue-manager
