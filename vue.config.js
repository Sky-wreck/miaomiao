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
            },
            /* '/api2' : {
              target : 'http://localhost:3000',
              changeOrigin : true
            },
            '/api' : {
                target : 'http://192.168.56.1',
                changeOrigin : true
            } */
              // '/foo': {
              //   target: '<other_url>'
              // }
          }
        
    }
}