module.exports = {
    apps: [
        {
            name:"app",
            script:"../index.js",
            watch: false,
            exec_mode:argumentos.modo,
            env:{
                NODE_ENV: "development",
            },
            env_production:{
                NODE_ENV: "production",
            }
        }
    ]
}