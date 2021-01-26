# CodeDebugging

Code debugging built with NodeJs

####/src/config/index.js

```
// default
module.exports = { config }
// fix
module.exports = config;
```

curly bracket pada export tersebut menjadikan var config menjadi object
sehingga `config.port` menjadi `undefined`, jadi perlu diakses dengan `config.config.port`
menghilangkan curly bracket adalah fix untuk bug ini

####/src/services/authService.js

```
// default
module.export = {
    redirectUri: redirectUri
}
// fix
module.exports = {
    redirectUri: redirectUri
}
```

fixnya mengubah `module.export` menjadi `module.exports`