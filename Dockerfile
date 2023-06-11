# image
FROM node:slim

# setting docker node memory limit
ARG MAX_OLD_SPACE_SIZE=8192
ARG ENV
ENV NODE_OPTIONS=--max-old-space-size=${MAX_OLD_SPACE_SIZE}

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install --verbose

# Copying source files
COPY . .

ENV NODE_ENV ${ENV}

# Running the app

CMD [ "npm", "run", "start" ]

