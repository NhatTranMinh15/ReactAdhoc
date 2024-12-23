import {RouteObject} from "react-router";
import User from "./user";
import PersonalInformation from "./personalInformation/PersonalInfomation";
import UserKYC from "./kyc/kyc";

const userRoutes: RouteObject[] = [
    {
        path: 'user',
        element: <User/>,
        children: [
            {
                path: ':id/pi',
                element: <PersonalInformation/>
            },
            {
                path: ':id/kyc',
                element: <UserKYC></UserKYC>
            }
        ]
    }
]

export default userRoutes;