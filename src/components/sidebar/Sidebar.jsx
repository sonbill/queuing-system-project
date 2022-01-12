import React, { useState } from 'react'
import './sidebar.css'
import GridViewIcon from '@mui/icons-material/GridView';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LayersIcon from '@mui/icons-material/Layers';
import ForumIcon from '@mui/icons-material/Forum';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import LoginIcon from '@mui/icons-material/Login';


import Logo from '../../assets/LogoAlta.svg'



function Sidebar() {
    // const [toggled, setToggled] = useState(false);

    // const handleToggled = (event, active) => {
    //     setToggled(active);
    // };
    return (
        <div className="sidebar">
            <div className="sidebarLogo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="sidebarWrapper">
                <div className="sidebarList">
                    <div className="sidebarListItem active">
                        <GridViewIcon />
                        <p className="sidebarTextItem">Dashboard</p>
                    </div>
                    <div className="sidebarListItem">
                        <DesktopMacIcon />
                        <p className="sidebarTextItem">Thiết bị</p>
                    </div>
                    <div className="sidebarListItem">
                        <ForumIcon />
                        <p className="sidebarTextItem">Dịch vụ</p>
                    </div>
                    <div className="sidebarListItem">
                        <LayersIcon />
                        <p className="sidebarTextItem">Cấp số</p>
                    </div>
                    <div className="sidebarListItem">
                        <SummarizeIcon />
                        <p className="sidebarTextItem">Báo cáo</p>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn">
                            <GridViewIcon />
                            <p className="sidebarTextItem">Cài đặt</p>
                            <MoreVertIcon style={{ marginLeft: 40 }} />
                        </div>
                        <ul className="dropdown-content">
                            <li className="item">Quản lý vai trò</li>
                            <li className="item">Quản lý tài khoản</li>
                            <li className="item">Nhật ký người dùng</li>
                        </ul>
                    </div>
                </div>

            </div>
            <button className="logout">
                <LoginIcon />
                <p className="logoutText">Đăng nhập</p>
            </button>

        </div >
    )
}
export default Sidebar