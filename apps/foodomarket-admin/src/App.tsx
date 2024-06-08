import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { FooterList } from "./footer/FooterList";
import { FooterCreate } from "./footer/FooterCreate";
import { FooterEdit } from "./footer/FooterEdit";
import { FooterShow } from "./footer/FooterShow";
import { JobOfferList } from "./jobOffer/JobOfferList";
import { JobOfferCreate } from "./jobOffer/JobOfferCreate";
import { JobOfferEdit } from "./jobOffer/JobOfferEdit";
import { JobOfferShow } from "./jobOffer/JobOfferShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Foodomarket"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Footer"
          list={FooterList}
          edit={FooterEdit}
          create={FooterCreate}
          show={FooterShow}
        />
        <Resource
          name="JobOffer"
          list={JobOfferList}
          edit={JobOfferEdit}
          create={JobOfferCreate}
          show={JobOfferShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
