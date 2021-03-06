# What image do you want to start building on?
FROM node:10.15.3

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

#Any Environment Variables will be able to able to be acceessed by any process running inside your image
ENV PORT 91

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install


# What port will the container talk to the outside world with once created?
EXPOSE 10238

# How do you start your app?
CMD [ "npm", "start"]