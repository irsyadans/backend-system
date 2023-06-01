const routes = [{
        method: '*',
        path: '/',
        handler: (req, res) => {
            return 'Halaman tidak dapat diakses dengan method tersebut versi CI/CD'
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return 'Homepage versi CI/CD'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, res) => {
            return 'About page versi CI/CD'
        },
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (req, res) => {
            return 'Halaman tidak ditemukan versi CI/CD'
        }
    }
]
module.exports = routes;
