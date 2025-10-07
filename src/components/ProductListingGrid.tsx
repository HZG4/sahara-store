import React from 'react'
import ProductCard from './ProductCard'

// Sample product data organized by category
const productsByCategory = {
  men: [
    {
      id: 'm1',
      name: 'Men\'s Athletic Pro X',
      price: '$120',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
    },
    {
      id: 'm2',
      name: 'Men\'s Urban Glide',
      price: '$80',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
    },
    {
      id: 'm3',
      name: 'Men\'s Trailblazer 2.0',
      price: '$150',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6_0wSXit3l3BhTiLAr7nSB6ROgPAAECeXsYp1tYsQKy5OxKWc6jeuUu1ImC0rhjVOeEANKYoPZffagkCpnivRo-w0WnsXD9GZBBhvP5hFnf00Fa3jeb0KTHr37AoOerLxRGUDG7PsaNofvcaoWtXtoGogI4_l6WUCQiX_hF70rZ2_6qsrImnSg253vaoNio_EysWrd_4d8gtWEGYyN7inAU9LSt8Sc4VM85zztnxjTtExABIYWHxRTvBZTVH5IsKTH55ErEaU5Bg'
    }
  ],
  women: [
    {
      id: 'w1',
      name: 'Women\'s Comfort Stride',
      price: '$90',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9H6NPVvv31tSw0x8XV6qsb-GqnzoiH7XYR7qPvcI3bdoA6Z8XUmCa3cIjX1HxJhWN6qzh1pV_UXK0s8c2Uk_JVVSPDvGN2Y5ScigTxLM4TksechjbYLNsASHrhMdoaR6RjlALW016H-EBNHa34NGs70afRKeWqmMzawIxr9QpRIcWUlqrQPQrPzRCzzPuRl8mk2CS6WrLC0a3V4XGaKT0HulpfO-gJDrOEulTqLb6mxnxO5q_MFfNb3X-MOf3_o93cjCgXti9Ak8'
    },
    {
      id: 'w2',
      name: 'Women\'s Power Play',
      price: '$110',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdFymt9XYcaU2Qh5dT_VKCXpGNlUFQaEJUEfY2Pa8vYhnLkDEspF-HWzhKvbMZCZDXPv0pb0j-p6lCBubm12RV-ZjiBbWsgrH6FB9KIrDh9PewNdCAtVIAALjPpVe7ACmLHV7zDgmrb2yiOzyVWdpzFNgyEfpnPzuKuFWcyhYByOsP0Az7-K_C_4d_nyqzCxKvtdpS02pEndZd9apFhcHcfdB8rXr-gv85lY7n5y-y1A4NO1kEXE2jHLlbXIfLLnkKGWmF1h1FTY'
    },
    {
      id: 'w3',
      name: 'Women\'s Street Style',
      price: '$70',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw0tc_AhipT4LWgKtAyhPK3DJYxNrpWTFfM3qf_20TYROjISTTMVtHVw2jqp_yzbjyRRGJPx84XJoZwdksZqDAqGyVCXUxwrFud9sD-WOOaAG4ESFAIZUdLBHM2uKhHbh0Uv0Rwj4REhE4TQ1qShadWchYkenvkcw-fywo2h8j1sxrRDaFhb_o0TW73BrVjIgyEdn1CyniUoaUllurE47leZMBV3ehhcCSXRjlLp4gQ4w4klXrvH5N_itffHtXb6H9J8iCl1-9NsU'
    }
  ],
  kids: [
    {
      id: 'k1',
      name: 'Kids\' Athletic Pro X',
      price: '$60',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
    },
    {
      id: 'k2',
      name: 'Kids\' Urban Glide',
      price: '$45',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
    }
  ],
  sale: [
    {
      id: 's1',
      name: 'Sale: Athletic Pro X',
      price: '$80',
      originalPrice: '$120',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
    },
    {
      id: 's2',
      name: 'Sale: Urban Glide',
      price: '$50',
      originalPrice: '$80',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
    }
  ],
  'new-arrivals': [
    {
      id: 'n1',
      name: 'New: Athletic Pro X',
      price: '$120',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
    },
    {
      id: 'n2',
      name: 'New: Urban Glide',
      price: '$80',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
    }
  ],
  sports: [
    {
      id: 'sp1',
      name: 'Sports Athletic Pro X',
      price: '$120',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
    }
  ],
  casual: [
    {
      id: 'c1',
      name: 'Casual Urban Glide',
      price: '$80',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
    }
  ],
  formal: [
    {
      id: 'f1',
      name: 'Formal Trailblazer 2.0',
      price: '$150',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6_0wSXit3l3BhTiLAr7nSB6ROgPAAECeXsYp1tYsQKy5OxKWc6jeuUu1ImC0rhjVOeEANKYoPZffagkCpnivRo-w0WnsXD9GZBBhvP5hFnf00Fa3jeb0KTHr37AoOerLxRGUDG7PsaNofvcaoWtXtoGogI4_l6WUCQiX_hF70rZ2_6qsrImnSg253vaoNio_EysWrd_4d8gtWEGYyN7inAU9LSt8Sc4VM85zztnxjTtExABIYWHxRTvBZTVH5IsKTH55ErEaU5Bg'
    }
  ]
}

// Default products for 'all' category
const allProducts = [
  {
    id: '1',
    name: 'Athletic Pro X',
    price: '$120',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG778TgCZBbdY6b_A08F0Km-Jq-RsSogRsD8ClU5TL4yYx-ahkuPpuYiHu29l2INNL4iRWMHnW4e1joIv3CiW1wFuGTwy_IEiu3I84eP323mryr5Jdt83VjuLIsh4bu-QM9a0yy-QGJjNeF2ToxFmLd0bYkOTmB_jK2ku2tHkJ8VKpH0bQjomf1xjlU7vAcZk34Gz8HYo0uDnqdepeJ_7LZCyBaI0v0Hi2h8xqjqEq0e0qGS1dybEyRHBz74O9GjC8yj820i0_oq4'
  },
  {
    id: '2',
    name: 'Urban Glide',
    price: '$80',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6up7YTc59sV8ypHQ3TBxDrXBLvkOEAZhNXuIlX2IK9OGELZxN1F54O47C6jS8TFIoQV8MypHBrU9_p1RgNCj6WU88tePjUODxsu78iOttXKcD4SXvuw7Enr18AaDFHL6Y8Yw2j2QMXCVkIYS1toUIEE-dNLbvL4Q9kezua626-0nR-t4yEqL1W3W3-jQfOWR1dzmGGOy3kq5xAgE99b9P-dkdJMaKVwnjETVeih9wtbaUa6Xoj8skdvQRS8-p3Fr7FWMfuy3FgTs'
  },
  {
    id: '3',
    name: 'Trailblazer 2.0',
    price: '$150',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6_0wSXit3l3BhTiLAr7nSB6ROgPAAECeXsYp1tYsQKy5OxKWc6jeuUu1ImC0rhjVOeEANKYoPZffagkCpnivRo-w0WnsXD9GZBBhvP5hFnf00Fa3jeb0KTHr37AoOerLxRGUDG7PsaNofvcaoWtXtoGogI4_l6WUCQiX_hF70rZ2_6qsrImnSg253vaoNio_EysWrd_4d8gtWEGYyN7inAU9LSt8Sc4VM85zztnxjTtExABIYWHxRTvBZTVH5IsKTH55ErEaU5Bg'
  },
  {
    id: '4',
    name: 'Comfort Stride',
    price: '$90',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9H6NPVvv31tSw0x8XV6qsb-GqnzoiH7XYR7qPvcI3bdoA6Z8XUmCa3cIjX1HxJhWN6qzh1pV_UXK0s8c2Uk_JVVSPDvGN2Y5ScigTxLM4TksechjbYLNsASHrhMdoaR6RjlALW016H-EBNHa34NGs70afRKeWqmMzawIxr9QpRIcWUlqrQPQrPzRCzzPuRl8mk2CS6WrLC0a3V4XGaKT0HulpfO-gJDrOEulTqLb6mxnxO5q_MFfNb3X-MOf3_o93cjCgXti9Ak8'
  },
  {
    id: '5',
    name: 'Power Play',
    price: '$110',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdFymt9XYcaU2Qh5dT_VKCXpGNlUFQaEJUEfY2Pa8vYhnLkDEspF-HWzhKvbMZCZDXPv0pb0j-p6lCBubm12RV-ZjiBbWsgrH6FB9KIrDh9PewNdCAtVIAALjPpVe7ACmLHV7zDgmrb2yiOzyVWdpzFNgyEfpnPzuKuFWcyhYByOsP0Az7-K_C_4d_nyqzCxKvtdpS02pEndZd9apFhcHcfdB8rXr-gv85lY7n5y-y1A4NO1kEXE2jHLlbXIfLLnkKGWmF1h1FTY'
  },
  {
    id: '6',
    name: 'Street Style',
    price: '$70',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw0tc_AhipT4LWgKtAyhPK3DJYxNrpWTFfM3qf_20TYROjISTTMVtHVw2jqp_yzbjyRRGJPx84XJoZwdksZqDAqGyVCXUxwrFud9sD-WOOaAG4ESFAIZUdLBHM2uKhHbh0Uv0Rwj4REhE4TQ1qShadWchYkenvkcw-fywo2h8j1sxrRDaFhb_o0TW73BrVjIgyEdn1CyniUoaUllurE47leZMBV3ehhcCSXRjlLp4gQ4w4klXrvH5N_itffHtXb6H9J8iCl1-9NsU'
  }
]

interface ProductListingGridProps {
  category?: string
}

function ProductListingGrid({ category = 'all' }: ProductListingGridProps) {
  // Get products based on category
  const products = category === 'all' 
    ? allProducts 
    : productsByCategory[category as keyof typeof productsByCategory] || allProducts

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default ProductListingGrid
