#CS Hide After

Hide an element after a specified number of milliseconds

```html
<div class='message' hide-after='3000'>Hello!</div>
```

## Development Setup

- `npm install`
- `bower install`
- `npm install -g uglify`

## Use with bower

`"cs-hide-after": "git@github.com:cloudspace/cs-hide-after.git#master",`

Include the following in your html

```html
<script src='./<my_base_path>/bower_components/dist/cs-hide-after.min.js'></script>
```
## To minify
uglifyjs ./lib/cs-hide-after.js ./lib/cs-hide-after-directive.js -o ./dist/cs-hide-after.min.js

## Releases
TBD

## Contribution
TBD