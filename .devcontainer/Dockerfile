FROM mcr.microsoft.com/devcontainers/base:ubuntu

USER root

# ---- apt-get installs & latest node ----
RUN apt-get update \
    && apt-get install -y curl npm \
    && npm install -g n \
    && n lts

# ---- npm installs ----
WORKDIR /tmp
COPY package.json ./
RUN npm install

# ---- clean up ----
USER vscode