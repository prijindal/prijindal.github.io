FROM node:20-alpine

ENV NODE_ENV production

USER node

WORKDIR /app

COPY --chown=node:node package*.json /app/
COPY --chown=node:node node_modules /app/node_modules
COPY --chown=node:node .next /app/.next

EXPOSE 4000

CMD [ "npm", "start"]
