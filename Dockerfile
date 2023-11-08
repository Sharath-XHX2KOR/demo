# Base image taken from:https://hub.docker.com/r/cypress/browsers/tags
FROM cypress/browsers:node-18.16.0-chrome-113.0.5672.92-1-ff-113.0-edge-113.0.1774.35-1

# Create the folder where our project will be stored
# RUN mkdir /Top99TestAutomation

# We make it our workdirectory
# WORKDIR /Top99TestAutomation
WORKDIR /e2e

# Copying the essential files that we must use to run our scripts.
COPY . .

# Install the cypress dependencies in the work directory
RUN npm i &&\
    npx cypress info

# Executable commands the container will use[Exec Form]
CMD ["npx","cypress","run"]