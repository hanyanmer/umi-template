import LogoImg from "@/assets/icon.png";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <div className='flex '>
      <div>
        <img
          alt='hah'
          src={LogoImg}
          style={{ height: "30px", aspectRatio: 1, margin: "0 10px" }}
        />
        <span>xxx</span>
      </div>
    </div>
  );
};

export default Header;
