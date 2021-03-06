import React from "react";
import { Rate } from "antd";
import BodyOne from "../typography/BodyOne";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

const ListingCard = ({
  listingTitle,
  listingLocation,
  price,
  rating,
  coverPhoto,
}) => (
  <>
    <div className="rounded-px w-card h-auto shadow-lg-card cursor-pointer">
      <img src={coverPhoto} className="w-full h-48 rounded-t-px" alt="cover" />
      <div className="flex flex-col p-2">
        <div className="flex flex-col mt-2 ">
          <BodyOne className="text-lg">{listingTitle}</BodyOne>
          <BodyOne className="text-sm text-grey">{listingLocation}</BodyOne>
        </div>

        <BodyOne className=" text-lg mt-8 text-green-dark">${price}</BodyOne>
        <Rate disabled defaultValue={rating} />
      </div>
    </div>
  </>
);

ListingCard.propTypes = {
  listingTitle: PropTypes.string,
  listingLocation: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  coverPhoto: PropTypes.string,
};
export default ListingCard;
