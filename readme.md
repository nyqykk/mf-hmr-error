# vite module federation HMR bug

In this repo, I reproduced a bug I encountered when using @module-federation/enhanced.
The bug is that cross container HMR works great when the host(in vite) is in dev mode, but when the host is in production mode it is not working. I can still see the console logs correctly printing when I am changing something on the remote. but I can't see the update until I refresh.

I can also see the updated value in the sources panel.

steps to reproduce:
1. cd vite-host &&npm i && npm run build && npm run preview
2. (in a different terminal) cd webpack-remote &&npm i && npm run dev
3. visit http://localhost:4173/
4. change something in webpack-remote/src/Button.jsx and see how the console is logging correctly but you can't see the change until you refresh

The bug also exists in rsbuild.
to run the rsbuild host do:
cd rsbuild-host &&npm i && npm run build && npm run preview