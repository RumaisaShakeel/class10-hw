import Image from "next/image";

function ProductCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
      {/* Product 1 and 2 */}
      <div className="flex flex-col items-center">
        <div className="border border-black-900 py-10 px-12">
          <Image
            src="/book1.png"
            width={200}
            height={100}
            alt="book 1"
          />
          <p className="text-center py-2">Book 1</p>
          <p className="text-center py-2">Rs 400</p>
          <div className="flex justify-center">
          <button className="text-center bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border border-black-500 py-10 px-12">
          <Image
            src="/book2.png"
            width={200}
            height={100}
            alt="Book 2"
          />
          <p className="text-center py-2">Book 2</p>
          <p className="text-center py-2">Rs 500</p>
          <div className="flex justify-center">
          <button className="bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center ">
        <div className="border border-black-500 py-10 px-12">
          <Image
            src="/book3.png"
            width={200}
            height={100}
            alt="Book 3"
          />
          <p className="text-center py-2">Book 3</p>
          <p className="text-center py-2">Rs 800</p>
          <div className="flex justify-center">
          <button className="bg-slate-500 text-white py-1 px-8 rounded-xl">
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

