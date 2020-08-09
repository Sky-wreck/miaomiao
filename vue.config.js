module.exports = {
    devServer : {
        // proxy : { //反向代理字段
        //     '/api' : {
        //         target : 'https//m.maizuo.com', //跨域地址
        //         changeOrigin : true,  //是否跨域
        //         pathRewrite: {
        //             '^/api': '/api'       //匹配以/api为开头的请求地址，并使用/api替换
        //           }
        //     }
        // }
        proxy: {
            '/ajax': {
              target: 'http://m.maoyan.com',
              // ws: true,
              changeOrigin: true
            }
            // '/foo': {
            //   target: '<other_url>'
            // }
          }
        
    }
}