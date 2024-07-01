FROM public.ecr.aws/lambda/nodejs:18

# Install dependencies
COPY package.json ${LAMBDA_TASK_ROOT}
RUN npm install --production

# Copy lambda handler code to the image
ARG LAMBDA_FOLDER
COPY ${LAMBDA_FOLDER} ${LAMBDA_TASK_ROOT}/lambda

# Create a symlink to provide a standard entrypoint
ARG ENTRY_POINT
RUN ln -s ${LAMBDA_TASK_ROOT}/lambda/${ENTRY_POINT} ${LAMBDA_TASK_ROOT}/index.js

CMD [ "index.handler" ]
