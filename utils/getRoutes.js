import axios from 'axios';

// const getData = async () => {
//     const res = await axios.get('https://cdn.xpendmusic.com/api/list_index/');
//     var path = [
//         {
//             path: '/hola/'
//         },
//         {
//             path: '/hola2/'
//         },
//     ];
//     res.data.map(key => {
//         path.push({ path: key.id });
//     });
//     return path;
// }

// console.log(getData);

// node ./utils/getRoutes.mjs
export default async () => {
    const { $content } = require("@nuxt/content");
    const files = await $content({ deep: true }).only(["path"]).fetch();
    const res = await axios.get('https://cdn.xpendmusic.com/api/list_index/');

    res.data.map(key => {
        files.push({ path: key.id });
    });

    return files.map((file) => (file.path === "/index" ? "/" : file.path));
};