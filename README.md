# A more advanced theme template

As V\*lve started [obfuscating CSS class names](https://github.com/SteamDatabase/SteamTracking/commit/a0f82423f4c422f616253d5825fd8bf453367f3a), a [solution](https://github.com/SteamClientHomebrew/ClassMapper) came up shortly after that. But it's not perfect, as it replaces the readable class names into the ones Steam is using.

This uses the CSS Loader class map. The build script will download it if absent.

Let's say you have a file called `src/desktop/titlebarcontrols.css`:

```css
/* Remove useless shit */
#AnnouncementsButton,
#GamepadUIToggle {
  display: none;
}
```

It will be compiled to the following code residing in `dist/desktop/titlebarcontrols.css`:

```css
/* Remove useless shit */
._5wILZhsLODVwGfcJ0hKmJ /* AnnouncementsButton */,
._3LKQ3S_yqrebeNLF6aeiog /* GamepadUIToggle */ {
  display: none;
}
```

This example resides in the `src` directory. The files whose class names will be replaced will reside in the `dist` directory.

## Usage

Install dependencies:

```sh
$ npm install
```

Write some CSS, then, in your terminal, run:

```sh
$ npm run build
```
