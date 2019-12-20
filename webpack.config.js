var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const components = [
    ['audio', './assets/components/audio/index.js']
];

Encore
    .setOutputPath('public/assets')
    .setPublicPath('/assets')
    .addEntry('app', './assets/index.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    // .autoProvidejQuery()
    .enableVueLoader()
    .enableLessLoader();

components.forEach(value => {
    Encore.addEntry(value[0], value[1]);
});

module.exports = Encore.getWebpackConfig();
