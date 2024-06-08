import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FooterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="ContactInformation"
          multiline
          source="contactInformation"
        />
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
