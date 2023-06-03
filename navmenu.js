import {Menu} from 'antd'
import {
    DashboardOutlined ,
    HomeOutlined,
    FolderOpenOutlined,
    ProfileOutlined,
    LogoutOutlined  
} from '@ant-design/icons';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
 function SideMenu() {
    const navigate=useNavigate()
  return (

    <div className='SideMenu mt-2 '>
        <Menu
        onClick={ (item)=>{
            navigate(item.key)            
        }}
        items={[
           { 
            label:'Dashboard',
            icon:<DashboardOutlined />,
            key:'/routes/dashboard',
           },
           { 
            label:'home',
            icon:<HomeOutlined />,
            key:'/home',
           },
           { 
            label:'Latest Reports',
            icon:<ProfileOutlined />,
            key:'/routes/reports',
           },
           { 
            label:'Archives',
            icon:<FolderOpenOutlined />,
            key:'/archives',
           },
           { 
            label:'Log Out',
            icon:<LogoutOutlined />,
            key:'/archives',
           },
        ]}
        ></Menu>
    </div>
  )
}export default SideMenu;
