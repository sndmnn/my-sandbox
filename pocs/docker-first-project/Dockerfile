FROM node:16.13.2

WORKDIR /app
COPY package.json .
RUN yarn

COPY . .

EXPOSE 3333
CMD ["yarn", "start"]