FROM node

WORKDIR /app

COPY "package.json" .

COPY entrypoint.sh /entrypoint.sh

ENV PATH /app/node_modules/.bin:$PATH

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]