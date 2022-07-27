import React from 'react';
import 'antd/dist/antd.css';
import { Tree, TreeDataNode, Input } from 'antd';

const { Search } = Input;

const dig = (path = '0', level = 3) => {
    const list = [];

    for (let i = 0; i < 10; i += 1) {
        const key = `${path}-${i}`;
        const treeNode: TreeDataNode = {
            title: key,
            key
        };

        if (level > 0) {
            treeNode.children = dig(key, level - 1);
        }

        list.push(treeNode);
    }

    return list;
};

const treeData = dig('route', 4);
const onSearch = (value: string) => console.log(value);

const FileTree = () => {
    return (
        <>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <Tree treeData={treeData} height={400} />
        </>
    )
}

export default FileTree;
