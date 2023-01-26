// require('dotenv').config()
// const {
//     FIREBASE_TYPE,
//     FIREBASE_PROJECT_ID,
//     FIREBASE_PRIVATE_KEY_ID,
//     FIREBASE_PRIVATE_KEY,
//     FIREBASE_CLIENT_EMAIL,
//     FIREBASE_CLIENT_ID,
//     FIREBASE_AUTH_URI,
//     FIREBASE_TOKEN_URI,
//     FIREBASE_AUTH_PROVIDER_URL,
//     FIREBASE_CLIENT_CERT_URL
// } = process.env
let FIREBASE_TYPE= "service_account"
let FIREBASE_PROJECT_ID= "node-ecommerce-9bf63"
let FIREBASE_PRIVATE_KEY_ID= "bf319e326a53cbe79ed6c04415a15ba874ae6f47"
let FIREBASE_PRIVATE_KEY= "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDhxu5ZQMoaXE73\naVC25SZZKQa/6DfR35iP14nI2smkXwzyLoIUodhfX6tpXVsuhxK+On6C7ttRI3Fh\nwfiudHM/LhEtjxMkxjSilQ7FBeEb8iVvI5ggUOoLwBW0K/LsLZbECdKtNtFrrkBE\n378K5JB7uppjoyrN0zVVInnDUUIYkrPlZiwSlyI3zwXCwfKRZzyGX/QYkFl+aIIK\ncZ+SQBgsyIKNntdIL0YcvCGY5N4xogngJqnxJU7h2KRiyBXrvyFH6N6nb8w7Hzrr\nUxDK/KJQsZlBXJX2BC0jx47G2PNAjH9vYzvzgsouqGe625YPfdlw2DdInoVOVh+p\nWIuJsAXBAgMBAAECggEAEL8NnMcmdnAUV1uTZg13G7PkUUWrJkD8cubczG4V+MAo\nGKqEcX1TrDdPYoBPLBNOu5dhHNsUn18OoN6fUGlIxw3mrkdndxnQe6KstsZp3QXH\n6wdr2DHIOljkAzojSYtUHHRSERD41ZDWKYWjCO7NHLBJlUxb92pMEWV+PJOBYIsV\nbKoVb4Pz0hC4iWSk4F4DlaLLWXNV4l5HhToHwHPjsdbSOkEUHaZh77RrnA92JTIQ\nMdHNTzzchaYIPjHXWxS1Ycb8OyRGXAudECI5NRCGeAiP5f2Xlnv18c8WjlunTIV4\nm/Oul465GdKi525kWL21E62+tz9/gKzRRFKf/AbecQKBgQDxWdXfiiIFbbtHVEYE\nsfZeieBWUZl8ceEyERyUaltQJtiQatPIx9ATqV54sPM44qHuQ75/H648Ogp/faia\nDBP/lfri8ZO5bUNB9+FBkjkj8/iCPX3Zl2hswZLnguVdF/tTZRm2MrZgoeg2/KJ9\nxJk6CypsdL82zpIr7ieLMx5N7QKBgQDvexsQQPjOvYO6h0eDphhyXALbHjFNjhLT\nSp3Tkd9m306vWpnZUzZneo/ifsUiPu1JRuFyH46S3ZlGbhkHpfH+Of6E8j0bXxuw\ntYyY9mvHpCJDfLVPuDa4IKMflE5KyXfH9Mjw2/TgVMheIsu5LJu+w78LmtNq7bYN\nRBItOe18pQKBgQCX34gOGsY91Ec9I3LMEZCO/QQGTWLgRGkJMGtjmWnMjiVI+3A5\nsELnnHSuTes/qJ1taYO+SxlBHOTuRQyLo34SHza5CHuE+5SPNoSw1mrOjP+cNUW0\nXup/RXBD7sKWSjkEyWHcnRzWwgt2TpORwN0LAWu4w95vhp3EtyB7H7e6IQKBgQCR\nBJVA5HdGilCotZ7Cw+Pt7HX2RnRIqI4R0Q99vMnxu6wkV9LuXYuGYhubZnTt5fk+\n9GM0/pMRsItOsQELNpwx/OB5lU8XsiJMgcPgJOjjfisZfv00hzLrkSf2yZIXi6Sz\nOzIrWKcS6YRkLOH9AlxVyqd32YvJJqWlpuDy7i832QKBgCDpu/5HQ4AOr4jBtted\n7OS7z/9IUwGxqIyTJAKwko36WM/rglabS5hpFlDYx/nIilw9WI8yESHM0Ruh+5gT\n0IjJXeCp2470FK9hJyFRxEoOqluqBoYJfbpO6XAieOB8XmU8VfxOD2s7LVc6m2I3\nw7kbc9QKR36OV8f36kDQnHtV\n-----END PRIVATE KEY-----\n"
let FIREBASE_CLIENT_EMAIL= "firebase-adminsdk-rs45m@node-ecommerce-9bf63.iam.gserviceaccount.com"
let FIREBASE_CLIENT_ID= "105228179378274566660"
let FIREBASE_AUTH_URI= "https://accounts.google.com/o/oauth2/auth"
let FIREBASE_TOKEN_URI= "https://oauth2.googleapis.com/token"
let FIREBASE_AUTH_PROVIDER_URL= "https://www.googleapis.com/oauth2/v1/certs"
let FIREBASE_CLIENT_CERT_URL= "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rs45m%40node-ecommerce-9bf63.iam.gserviceaccount.com"
const config = {
    firebase: {
        "type": FIREBASE_TYPE,
        "project_id": FIREBASE_PROJECT_ID,
        "private_key_id": FIREBASE_PRIVATE_KEY_ID,
        "private_key": FIREBASE_PRIVATE_KEY,
        "client_email": FIREBASE_CLIENT_EMAIL,
        "client_id": FIREBASE_CLIENT_ID,
        "auth_uri": FIREBASE_AUTH_URI,
        "token_uri": FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": FIREBASE_AUTH_PROVIDER_URL,
        "client_x509_cert_url": FIREBASE_CLIENT_CERT_URL
    },
    mongodb: {
        conexionMongo: 'mongodb+srv://cvarela:never123@cluster0.hz9hxot.mongodb.net/?retryWrites=true&w=majority',
    },
}

module.exports = config;