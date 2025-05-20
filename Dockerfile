# Step 1: Use a Node.js base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /sdu_gov

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install project dependencies
RUN rm -rf node_modules package-lock.json
RUN npm install web-vitals
RUN npm install

# Step 5: Install necessary dependencies explicitly (if not already included in package.json)
RUN npm install next react react-dom

# Step 6: Copy the rest of the application files
COPY . .

# Step 7: Build the Next.js application
RUN npm run build

# Step 8: Expose the application port (3000 for Next.js)
EXPOSE 3000

# Step 9: Set the command to start the Next.js application in production mode
CMD ["npm", "start"]
