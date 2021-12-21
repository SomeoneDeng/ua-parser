FROM node:12

WORKDIR /

COPY package.json *.lock .

RUN yarn --only=prod --registry=https://registry.npm.taobao.org

COPY UAParser.js .

EXPOSE 29999

CMD [ "node", "UAParser.js" ]