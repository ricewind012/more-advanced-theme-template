# A more advanced theme template

This uses a class map, more info on how it works [here][web-app-class-maps].

## Example

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
._5wILZhsLODVwGfcJ0hKmJ,
._3LKQ3S_yqrebeNLF6aeiog {
	display: none;
}
```

This example resides in the `src` directory. The files whose class names will be replaced will reside in the `dist` directory.

## Usage

```sh
# Install dependencies
$ bun i

# See the readable versions of classes
$ bunx @web-app-class-maps/scripts make-readable-classes

# ...and build!
$ bun run build
```

[web-app-class-maps]: https://github.com/ricewind012/web-app-class-maps
