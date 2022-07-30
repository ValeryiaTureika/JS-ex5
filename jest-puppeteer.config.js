module.exports = {
    launch: { // здесь можем указывать все глобальные параметры запуска браузера для функции launch()    
        slowMo: 300,
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    },
    browserContext: "default",
};