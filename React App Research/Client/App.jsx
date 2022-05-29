import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './src/pages/Main';
import AdminMain from './src/pages/admin/adminMain';
import StudentMain from './src/pages/student/studentHome';
import PanelMain from './src/pages/staff/panel members/main';
import SupervisorMain from './src/pages/staff/Supervisors/main';
import ResearchSubmit from './src/pages/student/researchSubmit';
import StudentReg from './src/pages/admin/studentReg';
import AddAssignment from './src/pages/admin/addAssignment';
import AddSchema from './src/pages/admin/addShema';
import AllForUser from './src/pages/group/allGroup';
import GroupReg from './src/pages/group/GroupRegister';
import GroupView from './src/pages/group/Group_View';
import TopicRegister from './src/pages/student/topicReg';
import StaffRegister from './src/pages/admin/staffReg';
import AdminRegister from './src/pages/admin/adminReg';
import ViewAssignment from './src/pages/admin/viewAssignment';
import EmailVerify from './src/pages/Emailverify/EmailVerify';
import Login from './src/pages/Login';
import StudentViewAssignment from './src/pages/student/assignmentView';
import ChatMain from './src/pages/chat/chat';
import GroupEdit from './src/pages/group/Group_Edit';
import TopicRegister from './src/pages/student/topicReg';
import TopicRegister from './src/pages/topic/Topic_register';
import TopicViewStd from './src/pages/topic/Topic_view_std';
import TopicView from './src/pages/topic/Topic_View';
import ViewAssignmentSubmission from './src/pages/staff/Supervisors/submissionView';
import AddNotices from "./src/pages/Notice/AddNotice";
import ViewNotices from "./src/pages/Notice/viewNotice";
import UdateNotices from "./src/pages/Notice/Update_Notices";
import AdminSchemaView from './src/pages/admin/viewSchema';
import StaffSchemaView from './src/pages/staff/Supervisors/viewSchema';
import StudentSchemaView from './src/pages/student/viewSchema';


export default class App extends React.Component {

 constructor(props) {
    super(props);
 }

 render() {
    return(
        <BrowserRouter>
        {/* <h1>Hello to React APP</h1> */}

         <Routes>

            <Route path="/" element={<Main />} />

            <Route path="/Admin" element={<AdminMain />} />
            <Route path="/Admin/AddAssignment" element={<AddAssignment />} /> 
            <Route path="/Admin/ViewAssignment" element={<ViewAssignment />} />           
            <Route path="/Admin/AddSchema" element={<AddSchema />} />
            <Route path="/Admin/viewSchema" element={<AdminSchemaView />} />
            <Route path="/Admin/GroupView" element={<GroupView />} />
           
                        
            <Route path="/StudentReg" element={<StudentReg />} />
            <Route path="/StaffRegister" element={<StaffRegister />} />
            <Route path="/AdminRegister" element={<AdminRegister />} />
            <Route path="/users/:id/verify/:token/" element={<EmailVerify />} />
            <Route path="/login" element={<Login />} />

            <Route path="/Student" element={<StudentMain />} />
            <Route path="/Student/ResearchSub" element={<ResearchSubmit />} />
            <Route path="/Student/TopicRegister" element={<TopicRegister />} />
            <Route path="/Student/AllGroup" element={<AllForUser />} />
            <Route path="/Student/GroupAdd" element={<GroupReg />} />
            <Route path="/Student/ViewAssignment" element={<StudentViewAssignment />} />
            <Route path="/Student/GroupView" element={<GroupView />} />
            <Route path="/Student/Group_Edit/:id" element={<GroupEdit />} />
            <Route path="/Student/Topic_register" element={<TopicRegister/>} />
            <Route path="/Student/Topic_view_std" element={<TopicViewStd/>} />
            <Route path="/Student/ResultView" element={<StudentSchemaView/>} />

            <Route path="/Panel" element={<PanelMain />} />
            <Route path="/Panel/researchView" element={<ViewAssignmentSubmission />} />

            <Route path="/Supervisor" element={<SupervisorMain />} />
            <Route path="/Chat" element={<ChatMain />} />
            <Route path="/Supervisor/researchView" element={<ViewAssignmentSubmission />} />
            <Route path='/AddNotices' element={<AddNotices/>}/>
            <Route path='/viewNotice'element={<ViewNotices/>}/>
            <Route path='/UpdateNotice/:id'element={<UdateNotices/>}/>
            <Route path="/Supervisor/viewSchema" element={<StaffSchemaView />} />
            <Route path="/Supervisor/Topic_View" element={<TopicView/>} />

         </Routes>
                     

        {/* <Header/> */}

        </BrowserRouter>
      );
   }
}
