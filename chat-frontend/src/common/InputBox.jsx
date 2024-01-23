/* eslint-disable react/prop-types */
import { useState } from "react";

const InputBox = ({
  name,
  type,
  value,
  id,
  placeholder,
  icon,
  disabled = false,
  classes
}) => {
  const [passwordVisible, SetPasswordVisible] = useState(false);

  console.log(classes)

  return (
    <>
      <div className="relative w-[100%] mb-4">
        <input
          name={name}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          defaultValue={value}
          id={id}
          placeholder={placeholder}
          className={`input-box  ${classes}`}
          disabled={disabled}
        />

        <i className={`fi ${icon} input-icon `}></i>

        {type === "password" ? (
          <i
            className={`fi fi-rr-eye${
              !passwordVisible ? "-crossed" : ""
            } input-icon left-[auto] right-4 cursor-pointer`}
            onClick={() => SetPasswordVisible((currValue) => !currValue)}
          ></i>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default InputBox;