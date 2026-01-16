# ---- Build Astro ----
FROM node:20-alpine AS build
WORKDIR /app

COPY site/package.json site/package-lock.json* ./site/
WORKDIR /app/site
RUN npm ci

COPY site/ ./
RUN npm run build

# ---- Serve with Nginx ----
FROM nginx:1.27-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/site/dist /usr/share/nginx/html
EXPOSE 80
