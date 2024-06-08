import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FooterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="ContactInformation"
          multiline
          source="contactInformation"
        />
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Create>
  );
};
