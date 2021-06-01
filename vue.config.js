module.exports = {
    devServer : {
        proxy : {
            //https://m.maoyan.com/dianying/cities.json
            '/dianying' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true
            },
            //https://i.maoyan.com/apollo/ajax/search?kw=a&cityId=1&stype=-1
            '/apollo' : {
                target : 'https://i.maoyan.com',//后端接口地址
                changeOrigin: true//是否允许跨越
            },
            //http://m.maoyan.com/ajax/movieOnInfoList
            '/ajax' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true
            },

        }
    }
}