# -------- Build stage --------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only the Astro site workspace
COPY site/package.json site/package-lock.json* ./site/
RUN cd site && npm install

COPY site ./site
RUN cd site && npm run build

# -------- Runtime stage --------
FROM nginx:alpine

# Copy a default nginx config if you have one (optional)
# If you already have nginx configs in /nginx, we can use them.
# Otherwise, nginx default works for static sites.

# Copy build output to nginx html directory
COPY --from=builder /app/site/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
