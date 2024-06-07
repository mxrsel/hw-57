import React from "react";
import UserForm from "./lib/UserForm.tsx";
import Users from "./lib/User.tsx";
const App: React.FC = () => {
  return(
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-6">
                <UserForm/>
              </div>
              <div className="col-md-6">
                  <Users/>
              </div>
          </div>
      </div>
  );
};

export default App
