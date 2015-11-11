# Envy

Envy is a simple Ember CLI addon that loads environment variables
with [dotenv](https://github.com/motdotla/dotenv) so that you can
reference them inside of `ember` commands.

## Installation

```
ember install ember-cli-envy
```

## Configuration (optional)

You can optionally configure `dotenv` by place a configuration file at `config/envy.js` that exports an options hash. The path is passed directly to [`dotenv.config`](https://github.com/motdotla/dotenv#config) after normalizing the `path`. For example

```js
module.exports = {
  silent: true,
  path: '.env.' + process.env.DEPLOY_TARGET
}
```

## Alternatives

If this addon doesn't do what you want please check out
[ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv).
