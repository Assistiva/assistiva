FROM node:14 AS build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
RUN npm run build --prod

FROM nginx:latest
COPY --from=build /usr/src/app/dist/assistiva /usr/share/nginx/html
EXPOSE 4201:80
