/* eslint-disable react/prop-types */
import React from 'react';

const Image = ({ type, value }) => {
  const { title, description } = type;
  return (
    <div>
      <div className="DefaultLabel_root_1vtRm forms_label_3VbRA DefaultFormField_label_1lrxP DefaultLabel_level_1_1NA0j forms_headingLevel_1_20wsC forms_label_3VbRA">
        {title}
      </div>
      <div className="DefaultFormField_description_385bE text-blocks_description_uNil_ text-blocks_small_3gnjM text-blocks_base_37xpS text-blocks_root_1n-qL DefaultFormField_header_1cg3f">
        {description}
      </div>
      <img src={value} alt="" width="100%" />
    </div>
  );
};

export default Image;
