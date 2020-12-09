import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';


const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    topics.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={changeSelectedKey}>
                {topic.icon}{topic.name}
                <Link to={`/${topic.link}`} />
            </Menu.Item>
        )
    );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
};
export default TopicMenu;
