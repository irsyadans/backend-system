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
            return 'Homepage versi 2'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, res) => {
            return 'About page versi 2'
        },
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (req, res) => {
            return 'Halaman tidak ditemukan versi 2'
        }
    }
]
module.exports = routes;
