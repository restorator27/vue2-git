https://nuxtjs.org/docs/directory-structure/assets/

структура файлов

-| assets
----| fonts
------| DMSans-Regular.ttf
------| DMSans-Bold.ttf

пример конфига

export default {
  ...
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ]
  ...
}
