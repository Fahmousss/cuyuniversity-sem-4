import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@nextui-org/react";

const Header = ({ title, linkRef }) => {
  return (
    <>
      <div className="flex justify-between p-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {linkRef ? (
          <Link
            href={linkRef}
            showAnchorIcon
            anchorIcon={<FaArrowRight />}
            className="text-sm"
          >
            Lihat Semua
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
