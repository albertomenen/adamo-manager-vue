FROM node:16.5
USER 0

WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update && \
    apt-get install -y \
        git \
        openssh-server \
        default-libmysqlclient-dev

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan gitlab.com > /root/.ssh/known_hosts

COPY ["components_keys/*", "/root/.ssh/"]

# Add the keys and set permissions
RUN chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

RUN  echo "    IdentityFile ~/.ssh/id_rsa" >> /etc/ssh/ssh_config

RUN yarn install
RUN npm install http-server -g


EXPOSE 8080
CMD ["/bin/bash"]
