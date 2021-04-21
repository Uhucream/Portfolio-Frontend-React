FROM node:alpine

ARG REACT_APP_API_ENDPOINT
ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT

RUN apk update && \
  apk add --no-cache git curl && \
  curl -o- -L https://yarnpkg.com/install.sh | sh