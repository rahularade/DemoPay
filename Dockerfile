FROM mongo:8.2.2

RUN echo "rs.initiate();" > /docker-entrypoint-initdb.d/replica-init.js

CMD [ "--replSet", "rs" ]