const routes = [{
        method: '*',
        path: '/',
        handler: (req, res) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return 'Homepage'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, res) => {
            return 'About page'
        },
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (req, res) => {
            return 'Halaman tidak ditemukan'
        }
    }
]
module.exports = routes;
