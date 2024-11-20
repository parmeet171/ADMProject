import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCourse } from "../../store/courseSlice";

const StuCard = ({ id, img, title, desc }) => {
  const dispatch = useDispatch();

  return (
    <Link to="/student/application" onClick={()=>dispatch(setCourse(id))}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <img
          className="w-[24rem] h-[15rem] object-cover"
          src={img}
          alt={title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default StuCard;
