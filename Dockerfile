FROM node:16-alpine as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build:dev

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------

FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

RUN rm -rf ./*

COPY --from=build /app/.nginx/nginx.conf ./

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist ./

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]