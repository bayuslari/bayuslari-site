module.exports = {
  images: {
    domains: ['i.ibb.co']
  },
  async redirects() {
    return [
      {
        source: '/((?!maintenance).*)',
        destination: '/maintenance.html',
        permanent: false //!!!IMPORTANT!!!
      }
    ];
  }
};
