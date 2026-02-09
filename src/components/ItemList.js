import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="overflow-x-hidden">
      {items?.map((item) => {
        const info = item?.card?.info;

        return (
          <div
            key={info?.id}
            className="flex justify-between gap-4 py-6 border-b border-gray-200"
          >
            {/* LEFT SECTION */}
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-base text-gray-900">
                {info?.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-gray-800">
                ₹{" "}
                {info?.price
                  ? info.price / 100
                  : info?.defaultPrice / 100}
              </p>

              <p className="mt-2 text-sm text-gray-500 leading-5 line-clamp-2">
                {info?.description}
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-[118px] flex-shrink-0">
              <div className="relative">
                {info?.imageId && (
                  <img
                    src={CDN_URL + info.imageId}
                    alt={info?.name}
                    className="w-full h-[96px] rounded-lg object-cover"
                  />
                )}

                {/* ADD BUTTON */}
                <button
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2
                             bg-white text-green-600 border border-green-600
                             px-6 py-1 text-sm font-bold rounded-md
                             shadow hover:bg-green-600 hover:text-white transition mb-4"
                >
                  ADD
                </button>
              </div>

              {/* Customisable text */}
              <p className="mt-6 text-center text-xs text-gray-400">
                Customisable
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
