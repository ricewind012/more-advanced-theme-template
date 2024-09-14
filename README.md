# A more advanced theme template

This uses **your own** class map - more info on how it works [here](https://github.com/ricewind012/steam-theming-utils).

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
