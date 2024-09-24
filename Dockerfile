# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /app 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2: Server With Nginx
FROM nginx:1.23-alpine
# nginx default work directory
WORKDIR /usr/share/nginx/html
# Remove every thing from upper directory
RUN rm -rf *
# Copy build Directory and add in to app Directory
COPY --from=build /app/build .
# Nginx server every thing on 80 port
EXPOSE 80
# "daemon off;" beacuse we server a single image
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]