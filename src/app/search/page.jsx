'use client'

import { CategoryCard } from '@/app/components/common'
import { categories } from '@/data/categories'

export default () => {
  return (
    <section className=" pt-6">
      <h2 className=" text-primary text-2xl font-semibold mx-4 my-2">
        Browse all
      </h2>
      <div className=" grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4 py-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            img={category.img}
            title={category.title}
          />
        ))}
      </div>
    </section>
  )
}
