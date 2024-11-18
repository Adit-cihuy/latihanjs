export const getAllProducts = () => {
  return [
    {
      id: 'HP-001',
      slug: 'iphone-14',
      name: 'iPhone 14',
      category: `Smartphones`,
      categorySlug: 'smartphones',
      price: 14_999_000,
      stock: 25,
      imageUrl: '/assets/images/iphone-14.jpg',
      description: `Apple iPhone 14 dengan layar Super Retina XDR, chipset A15 Bionic, dan kamera canggih yang mampu menghasilkan foto dan video berkualitas tinggi.`
    },
    {
      id: 'HP-002',
      slug: 'samsung-galaxy-s23',
      name: 'Samsung Galaxy S23',
      category: `Smartphones`,
      categorySlug: 'smartphones',
      price: 13_999_000,
      stock: 20,
      imageUrl: '/assets/images/samsung-galaxy-s23.jpg',
      description: `Samsung Galaxy S23 dengan layar Dynamic AMOLED 2X, performa tinggi dari prosesor Snapdragon 8 Gen 2, serta sistem kamera inovatif untuk pengalaman fotografi terbaik.`
    },
    {
      id: 'TAB-001',
      slug: 'ipad-pro-11',
      name: 'iPad Pro 11',
      category: `Tablets`,
      categorySlug: 'tablets',
      price: 15_999_000,
      stock: 15,
      imageUrl: '/assets/images/ipad-pro-11.jpg',
      description: `iPad Pro 11 inci dengan layar Liquid Retina, performa super cepat dari chipset Apple M2, dan dukungan Apple Pencil generasi kedua.`
    },
    {
      id: 'TAB-002',
      slug: 'huawei-matepad-11',
      name: 'Huawei MatePad 11',
      category: `Tablets`,
      categorySlug: 'tablets',
      price: 7_999_000,
      stock: 22,
      imageUrl: '/assets/images/huawei-matepad-11.jpg',
      description: `Huawei MatePad 11 dengan layar FullView 120Hz, prosesor Snapdragon 865, dan dukungan M-Pencil untuk pengalaman produktivitas maksimal.`
    },
    {
      id: 'LAP-001',
      slug: 'macbook-air-m2',
      name: 'MacBook Air M2',
      category: `Laptops`,
      categorySlug: 'laptops',
      price: 19_999_000,
      stock: 10,
      imageUrl: '/assets/images/macbook-air-m2.jpg',
      description: `MacBook Air dengan chip Apple M2, layar Retina 13.6 inci, dan desain ramping yang memberikan kinerja luar biasa untuk pekerjaan harian dan profesional.`
    },
    {
      id: 'LAP-002',
      slug: 'dell-xps-13',
      name: 'Dell XPS 13',
      category: `Laptops`,
      categorySlug: 'laptops',
      price: 18_499_000,
      stock: 8,
      imageUrl: '/assets/images/dell-xps-13.jpg',
      description: `Dell XPS 13 dengan layar InfinityEdge, prosesor Intel Core i7 generasi terbaru, dan desain ultra-portable yang ideal untuk pengguna profesional.`
    },
  ];
};
