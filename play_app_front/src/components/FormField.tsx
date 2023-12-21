import React, { ReactNode } from "react";
import classes from "./FormField.module.css";

interface FormFieldProps {
  title: string;
  placeholder: string;
  children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = (props) => {
  return (
    <>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.field}>
        <input
          type="text"
          className={classes.field__field}
          placeholder={props.placeholder}
        />
        <div className={classes.field__icon}>{props.children}</div>
        {/* 이 자리에는 아이콘이 들어가도록 해야 한다. */}
      </div>
    </>
  );
};

export default FormField;
