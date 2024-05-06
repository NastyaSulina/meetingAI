FROM node:16-alpine as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------

FROM nginx:alpine

WORKDIR /

ARG key
ARG chain

RUN echo "${key}" >> /etc/ssl/private_key.pem
RUN echo "${chain}" >> /etc/ssl/certificate_full_chain.pem

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]