FROM node:16-alpine as build  

WORKDIR /usr/app
USER 0

# Copiar package.json y el archivo tarball
COPY package*.json ./
COPY adamo-components-v0.0.1.tgz ./adamo-components-v0.0.1.tgz

RUN apk update && apk add git openssh

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan gitlab.com > /root/.ssh/known_hosts

COPY ["components_keys/*", "/root/.ssh/"]

# Add the keys and set permissions
RUN chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

RUN echo "    IdentityFile ~/.ssh/id_rsa" >> /etc/ssh/ssh_config



# Instalar dependencias
RUN yarn config set ignore-engines true
RUN yarn install --no-cache --network-timeout 1000000

COPY . .
RUN yarn build 

FROM nginx:stable-alpine
COPY --from=build /usr/app/dist /bin/www
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
