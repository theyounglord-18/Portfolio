FROM node:22.16.0-alpine as base
WORKDIR /usr/src/app

FROM base as build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base as final
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
