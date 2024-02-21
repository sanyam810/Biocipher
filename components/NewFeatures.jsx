import styles from '../styles';

const NewFeatures = ({imgUrl,title,subtitle}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[80px] h-[80px] rounded-[24px] bg-[#323f5d]`}>
    <img src={imgUrl} alt="icon" className=" object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[36px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[24px] font-normal text-[24px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>

  </div>
);

export default NewFeatures;
