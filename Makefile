all: build compile run

build:
	docker build -t adamo-vue --build-arg user_offline=adamo --build-arg password_offline=adamo --no-cache .

compile:
	docker run --rm -d -v $(shell pwd):/usr/app adamo-vue yarn build

run_dev:
	docker run --rm -d --name vue -p 8080:8080 -v $(shell pwd):/usr/app adamo-vue yarn serve

run:
	docker run --restart always --name vue -v $(shell pwd):/usr/app --network host adamo-vue

u=adamo
p=adamo
generate_password:
	docker run --rm --name vue -v $(shell pwd):/usr/app --network host adamo-vue node generateOfflineCredentials $(u) $(p)

stop:
	docker stop vue
	docker rm vue
