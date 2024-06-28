### Vue 3 inside a .NET MVC application. (SSR, no SPA)

#### The interesting files:
```
/src/main.ts  <--- Vue main entry point file.
/Views/Shared/_Layout.cshtml  <--- Layout where "<div id="app">" lives.
/Views/Home/Index.cshtml  <--- Razor template including the vue component tag.
```

#### Install front-end modules:
```sh
$ npm install
```

#### Run front-end and watch for changes (port 5555)
```
npm run dev
```

#### Run dotnet back-end
```sh
$ dotnet run
```

#### Credits
- Jannik Maag (Fuzzypawzz)
- Evgenios Pampoukos (Evgenios95)