# Vite-TypeScript-TailwindCSS-repo

In the package.json file, I'm using typescript `^5.5.3` which is the default version that came when I installed TypeScript somewhere else. I'm ignoring version `^5.2.2` which is the actual version that came with vite on installation. Some things might break maybe.

## Again this is not a manual installation

Manual installation would normally be done using `$npm install -D vite`

## tailwind script

`"tailwind": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"`
I'll have to work on that as well. It'll be custom.

## tsconfig.json

It might be a little wierd. Let me keep it to the defaults for now.

## package.json file

Even the package.json file will be different from the one with just TypeScript and Tailwindcss

## postcss and autoprefixer

Installed them but I didn't do any extra configurations. I'm not sure if they are doing anything at all. Or how, if they are.

## prettier

I had to do configurations for `.prettierrc` and `prettier.config.js` as I saw it on the GitHub repo. But I'm not sure, why.

### Overall

There might be extra visual code extensions or other packages I needed to installed but I didn't know. So, things might go wrong at anytime.
