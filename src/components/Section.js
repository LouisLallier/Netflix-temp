import data from "../data.json";

const Section = () => {
  return (
    <div>
      {data.map(({ category, images }, index) => {
        console.log(data);
        return (
          <div key={index}>
            <h2 className="text-xl">{category}</h2>
            <div className="flex shrink-0 overflow-x-scroll pt-8 pb-8">
              {images.map((image, index1) => {
                return (
                  <img
                    className="h-[120px] w-[220px]"
                    key={index1}
                    src={image}
                    alt="moviePic"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
