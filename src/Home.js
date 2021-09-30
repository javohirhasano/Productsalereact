import React from 'react'
import ItemCard from './Itemcard'
import data from "./data"

const Home = () => {
    return (
        <div>
            <h1 className="text-center">All items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productdata.map((item, index) => {
                        return (
                            <ItemCard
                                title={item.title}
                                item={item}
                                desc={item.desc}
                                img={item.img}
                                price={item.price}
                                key={index} />
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default Home
