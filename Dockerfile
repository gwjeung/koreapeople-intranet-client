FROM node:20 as build
ARG STAGE
WORKDIR /usr/src/app/
COPY package*.json ./
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci
COPY . .
RUN mv .env.$STAGE .env
RUN rm .env.*
RUN npm run build

FROM nginx:stable-alpine
ARG STAGE
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx/default.conf.$STAGE /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
