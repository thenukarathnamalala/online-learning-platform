# Base Image
FROM node:20

# Create App Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose Port
EXPOSE 5001

# Start App
CMD ["npm", "run", "dev"]