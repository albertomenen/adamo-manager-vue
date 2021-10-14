FROM node:16-alpine as build

WORKDIR /usr/app
USER 0
COPY package*.json ./

RUN apk update
RUN apk add git
RUN apk add openssh

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan gitlab.com > /root/.ssh/known_hosts

COPY ["components_keys/*", "/root/.ssh/"]

# Add the keys and set permissions
RUN chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

RUN  echo "    IdentityFile ~/.ssh/id_rsa" >> /etc/ssh/ssh_config

RUN yarn install -g --network-timeout 1000000

COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /usr/app/dist /bin/www
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
