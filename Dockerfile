#  Use Latest LTS Node.js image
From node:20-alpine As Build

# Sets working directory INSIDE the container
WORKDIR /app  

# Files will be copied INTO /app
COPY package.json package-lock.json ./

# Runs npm install inside /app
RUN npm install

# Copy the entire frontend
COPY . . 

# Build the frontend for production
RUN npm run build

CMD ["npm" ,"run" ,"dev"]