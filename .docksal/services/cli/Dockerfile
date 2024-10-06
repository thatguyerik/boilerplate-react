FROM docksal/cli:php8.1-3.2

RUN apt-get update && apt-get install -y xdg-utils

USER docker

RUN set -e; \
    . $HOME/.profile; \
    nvm install 18.11.0; \
    nvm alias default 18.11.0; \
    npm install -g nodemon;

USER root

