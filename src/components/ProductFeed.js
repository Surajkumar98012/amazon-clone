import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 lg:-mt-56 mx-auto">  

           {products
            .slice(0,4)
            .map(({id,title,price,description,category,image})=>(
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}
           
           <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/Space/More/XCM_Manual_1330718_1699378_IN_in_ha_may_in_en_3856531_1500x300_2X_en_IN.jpg"/>
           
           <div className="md:col-span-2">
           {products
            .slice(4,5)
            .map(({id,title,price,description,category,image})=>(
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}
           </div>


           {products
            .slice(5,11)
            .map(({id,title,price,description,category,image})=>(
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}

           <img className="md:col-span-full" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Adhoc/Robotic_VC/1500x300.jpg"/>
      

           {products
            .slice(11,products.length)
            .map(({id,title,price,description,category,image})=>(
               <Product
               key={id}
               id={id}
               title={title}
               price={price}
               description={description}
               category={category}
               image={image}
               />
           ))}

           <img width="1350" className="md:col-span-full" src="https://www.register365.com/blog/wp-content/uploads/2019/05/Amazon-Delivery-Returns-compressed-1024x519.png"/>

        </div>
    );
}

export default ProductFeed;

