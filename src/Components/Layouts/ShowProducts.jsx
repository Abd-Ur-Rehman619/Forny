import DescriptionLabel from "./DescriptionLabel";
import ProductCard from "./ProductCard";
import TitleLabel from "./TitleLabel";

export default function ShowProducts({
  titleLabel,
  descriptionLabel,
  products,
}) {
  return (
    <>
      <div className="flex items-center flex-col gap-32 h-screens">
        <div className="container flex gap-32 mt-5">
          <main className="flex flex-col gap-10">
            <div>
              <TitleLabel>{titleLabel}</TitleLabel>
            </div>
            <div>
              <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
            </div>
            <div className="grid grid-cols-5 gap-10">
              {products &&
                products.map((items) => (
                  <div key={items.id}>
                    <ProductCard
                      slug={items.slug}
                      name={items.name}
                      price={items.price}
                      brand={items.brand}
                      discount={items.discount}
                      gender={items.gender}
                      image={items.imageURL}
                    />
                  </div>
                ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
