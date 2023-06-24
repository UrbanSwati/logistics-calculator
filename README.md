# trucker-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy on s3
```
aws s3 cp index.html s3://$DOMAIN_NAME
```

### Deply on S3 - Files in dist folder
```
aws s3 cp dist s3://$DOMAIN_NAME/ --recursive
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
