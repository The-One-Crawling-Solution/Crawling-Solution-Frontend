# Step 1: Build React App
FROM node:alpine3.18 as build

# Declare build time environment variables
ARG REACT_APP_NODE_ENV
ARG REACT_APP_SERVER_BASE_URL

# Set default values for environment variables
ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

# Create "app" Working Directory 
WORKDIR /app 
# Copy package.json into  the "app" directory
COPY package.json .
# Install package
RUN npm install
# Copy everything into the "app" directory
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