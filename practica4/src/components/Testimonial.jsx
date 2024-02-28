export const Testimonial = ({ img, testimonial, name, position }) => {
  return (
    <div className="mb-[64px] flex flex-col items-center text-center">
      <img className="w-[72px] rounded-full" src={img} alt="photo" />
      <p className="my-8 max-w-[400px] px-4 font-Barlow text-Very-dark-grayish-blue desktop:my-14">
        {testimonial}
      </p>
      <h3 className="font-Fraunces text-[18px] text-Very-dark-desaturated-blue">
        {name}
      </h3>
      <p className="font-Barlow text-[14px] text-Grayish-blue">{position}</p>
    </div>
  );
};
