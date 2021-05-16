import { forwardRef } from "react";

import type { Frec } from "../../types/utils/index";

const TagNameInput = "input";
export const TextField: Frec<typeof TagNameInput> = forwardRef((props, ref) => {
  return <TagNameInput {...props} ref={ref} />;
});
TextField.displayName = "TextField";

export default TextField;

const TagNameTextArea = "textarea";
export const TextArea: Frec<typeof TagNameTextArea> = forwardRef((props, ref) => {
  return <TagNameTextArea {...props} ref={ref} />;
});
TextArea.displayName = "TextArea";

const TagNameSelect = "select";
export const Select: Frec<typeof TagNameSelect> = forwardRef((props, ref) => {
  return (
    <TagNameSelect {...props} ref={ref}>
      {props.children}
    </TagNameSelect>
  );
});
Select.displayName = "Select";
