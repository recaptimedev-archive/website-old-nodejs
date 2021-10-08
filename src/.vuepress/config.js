module.exports = {
    // Site metadata
    title: "Recap Time | The Pins Team",
    description: "Recaps, the Medium newsletters, streams, and Community Lores.",

    /*
        When forked the website, make sure to define the
        VUEPRESS_PROD_BUILD_BASE into your GH Pages build URL
        (e.g: https://yourusername.github.io/recaptime.github.io should be
            recaptime.github.io).
    */
    base: process.env.VUEPRESS_PROD_BUILD_BASE || "/",

    // https://vuepress.vuejs.org/plugin/official for list, also you can probably search npmjs
    // registry for more community-maintained plugins and themes
    plugins: ['@vuepress/back-to-top'],

    // Theme config
    themeConfig: {
        repo: "https://gitlab.com/RecapTime/recaptime.gitlab.io",
        repoLabel: "Site Source",
        locales: {
            '/': {
                label: "English",
                nav: require("./nav/en")
            }
        },
        smoothScroll: true
  }
}