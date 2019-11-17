FROM node:12 as build

# Install necessary tools for bcrypt to run in docker before npm install
RUN apt-get update && apt-get install -y build-essential && apt-get install -y python

# Create app directory
WORKDIR /workspace

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json yarn.lock /workspace/

# Install app dependencies
RUN yarn

# Copy source files
COPY . .

# Build the app
RUN yarn build

FROM node:12

# Create app directory
WORKDIR /workspace

COPY --from=build /workspace .

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
