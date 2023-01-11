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



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Desafio clase 32

Artillery 

artillery quick --count 50 -n 50  http://localhost:8081/api/info > artillery_sinConsole.log.txt

    http.response_time:
        min: ......................................................................... 1
        max: ......................................................................... 86
        median: ...................................................................... 36.2
        p95: ......................................................................... 58.6
        p99: ......................................................................... 79.1

artillery quick --count 50 -n 50  http://localhost:8081/api/info > artillery_conConsole.log.txt

    http.response_time:
        min: ......................................................................... 2
        max: ......................................................................... 175
        median: ...................................................................... 113.3
        p95: ......................................................................... 147
        p99: ......................................................................... 165.7


Benchmark 

(con console.log())
    $ node benchmark
    Running tests
    Running 20s test @ http://localhost:8081/api/info
    100 connections


    ┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
    │ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
    ├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
    │ Latency │ 130 ms │ 177 ms │ 253 ms │ 281 ms │ 182.27 ms │ 30.44 ms │ 311 ms │
    └─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
    ┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
    │ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
    │ Req/Sec   │ 400    │ 400    │ 554    │ 637    │ 546.1  │ 68.66   │ 400    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
    │ Bytes/Sec │ 253 kB │ 253 kB │ 351 kB │ 404 kB │ 346 kB │ 43.6 kB │ 253 kB │
    └───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

    Req/Bytes counts sampled once per second.
    # of samples: 20

    11k requests in 20.12s, 6.92 MB read



(sin console.log())

    $ node benchmark
    Running tests
    Running 20s test @ http://localhost:8081/api/info
    100 connections


    ┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
    │ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
    ├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
    │ Latency │ 126 ms │ 171 ms │ 267 ms │ 292 ms │ 178.45 ms │ 34.42 ms │ 351 ms │
    └─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
    ┌───────────┬────────┬────────┬────────┬────────┬────────┬───────┬────────┐
    │ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev │ Min    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼───────┼────────┤
    │ Req/Sec   │ 361    │ 361    │ 590    │ 658    │ 559    │ 80.44 │ 361    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼───────┼────────┤
    │ Bytes/Sec │ 229 kB │ 229 kB │ 374 kB │ 417 kB │ 354 kB │ 51 kB │ 229 kB │
    └───────────┴────────┴────────┴────────┴────────┴────────┴───────┴────────┘

    Req/Bytes counts sampled once per second.
    # of samples: 20

    11k requests in 20.13s, 7.09 MB read


0x Diagrama
C:\Users\Jelee\Desktop\codigos\Nueva carpeta\clase30\desafioClase28\20488.0x\flamegraph.html

Conclusion
    Todas las pruebas realizadas nos indican que en el caso que logueamos por consola la respuesta antes de ser enviada el tiempo de respuesta es mayor y que en el mismo tiempo,
     se pueden manejar menos requests.


    