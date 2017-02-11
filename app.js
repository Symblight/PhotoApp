/**
 * Created by Admin on 09.02.2017.
 */
import express from 'express';
import path from 'path';
import webpackConfig from './webpack.config';
import webpackMiddleware from 'webpack-dev-middleware';
import wepbackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
    stats:{
        colors:true
    }
}));

app.use(wepbackHotMiddleware(compiler));

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
});

app.listen(3000);