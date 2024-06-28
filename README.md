### Vue 3 inside a .NET MVC application. (SSR, no SPA)

#### The interesting files:
```
/src/main.ts   <--- Vue main entry point file.
/Views/Shared/_Layout.cshtml   <--- Layout where "<div id="app">" lives.
/Views/Home/Index.cshtml   <--- Razor template including the vue component tag.
```

#### Install and build front-end:
```sh
$ npm install
$ npm run build
```

#### Run dotnet backend
```
Just run the app. Click the launch icon depending on the IDE.
```

#### Credits
- Jannik Maag (Fuzzypawzz)
- Evgenios Pampoukos (Evgenios95)