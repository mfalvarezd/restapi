const swaggerAutogen = require('swagger-autogen')()

 const doc = {
   "info": {
     "title": 'REST API',
     "description": 'REST API with Express and Firestore'
   },
   "host": 'restapi-lh7n.onrender.com',
   "schemes":["https"],
   "basePath": "/api",
 };

 const outputFile = './swagger_output.json'
 const endpointsFiles = ['./routes/*.js']

 swaggerAutogen(outputFile, endpointsFiles, doc)