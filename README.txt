Realizó directamente con pm2 ya que este por parámetro permite recibir si se desea que sea modo fork o modo cluster.

Generamos 4 clusters en 8082, 8083, 8084 y 8085

pm2 start index.js --name="Server8081" --watch -i 2  -- -p 8081
pm2 start index.js --name="Server8082" --watch -i 2  -- -p 8082
pm2 start index.js --name="Server8083" --watch -i 4  -- -p 8083
pm2 start index.js --name="Server8084" --watch -i 1  -- -p 8084

Para ver los servidores creados
pm2 list

Ahora solamente debemos editar nuestro archivo de configuración de nginx para redigir cuando se vaya a /test/random que vaya a -> /test/randoms de los servidores creados anteriormente.

    server {
        listen       8080;
        server_name  proxy_server;

        location / {
            root   html;
            index  index.html index.htm;
        }

        location /api/random/ {
            proxy_pass http://node_app;
        }

        location /api/info/ {
            proxy_pass http://node_app;
        }
    }

    upstream node_app {
        server 127.0.0.1:8081 weight=1;
        server 127.0.0.1:8082 weight=2;
        server 127.0.0.1:8083 weight=10;
        server 127.0.0.1:8084 weight=2;
    }