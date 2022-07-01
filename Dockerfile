FROM node:14.19-alpine
WORKDIR /app
RUN  apk add --no-cache git

COPY . .
RUN rm -rf build
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]