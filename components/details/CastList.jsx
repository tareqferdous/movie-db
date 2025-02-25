import Image from "next/image";

const CastList = ({ creditData, IMAGE_BASE_URL }) => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Cast</h3>
      <div className="flex flex-wrap gap-4">
        {creditData &&
          creditData.length > 0 &&
          creditData.slice(0, 5).map((cast) => (
            <div key={cast.id} className="text-center">
              <Image
                src={`${IMAGE_BASE_URL}${cast?.profile_path}`}
                alt={cast?.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <p className="text-sm">{cast?.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CastList;
