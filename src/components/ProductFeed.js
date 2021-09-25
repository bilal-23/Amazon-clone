import Product from "./Product";

export default function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-44 lg:-mt-64 xl:-mt-72 z-30 relative mx-auto">
            {products.slice(0, 4).map(({ id, name, price, description, category, image, colors, company }) => {
                return <Product key={id}
                    id={id}
                    name={name}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    colors={colors}
                    company={company}
                />
            })}
            <img src="https://links.papareact.com/dyz" alt="advert" className="md:col-span-full" />
            <div className="md:col-span-2">
                {products.slice(4, 5).map(({ id, name, price, description, category, image, colors, company }) => {
                    return <Product key={id}
                        id={id}
                        name={name}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        colors={colors}
                        company={company}
                    />
                })}
            </div>

            {products.slice(5, 10).map(({ id, name, price, description, category, image, colors, company }) => {
                return <Product key={id}
                    id={id}
                    name={name}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    colors={colors}
                    company={company}
                />
            })}
            <img src="https://links.papareact.com/dyz" alt="advert" className="md:col-span-full" />

            {products.slice(10).map(({ id, name, price, description, category, image, colors, company }) => {
                return <Product key={id}
                    id={id}
                    name={name}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    colors={colors}
                    company={company}
                />
            })}
        </div>
    )
}
