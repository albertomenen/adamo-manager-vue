all: build compile run

build:
	docker build -t adamo-vue-manager .

compile:
	docker run --rm -d -v $(shell pwd):/usr/app adamo-vue-manager yarn build

run_dev:
	docker run --rm -d --name vue-manager -p 8080:8080 -v $(shell pwd):/usr/app adamo-vue-manager yarn serve

run:
	docker run --rm --name vue-manager -p 8080:8080 -v $(shell pwd):/usr/app --network host adamo-vue-manager http-server dist

stop:
	docker stop vue-manager
