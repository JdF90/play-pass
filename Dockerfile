# build vue project
FROM node:lts-alpine as builder-vue-app

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install

COPY . ./

RUN ls -l
RUN npm run build

# build nginx server
FROM nginx:alpine as production-build
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder-vue-app /usr/src/app/dist /usr/share/nginx/html

EXPOSE 5137

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]