import styled from '@emotion/styled';
import Editor, { OnMount, BeforeMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from 'react';
import { editor, Range } from 'monaco-editor';
import { Tabs } from 'antd';
import { file1, file2 } from './files';

import { Breadcrumb, Layout, Menu } from 'antd';
const { TabPane } = Tabs;

const StyledApp = styled.div`
  .myGlyphMarginClass {
    height: 10px !important;
    width: 400px !important;
    top: 4px;
    border-radius: 50%;
    background-color: red;
  }
`;

export function Monaco() {
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const breakpoints = useRef<string[] | undefined>([]);

    const [file, setFile] = useState(file1);

    const handleEditorWillMount: BeforeMount = (monaco) => {
        // here is the monaco instance
        // do something before editor is mounted
        console.log('Will mount')
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }
    const toggleBreakPoint = (e: editor.IEditorMouseEvent) => {
        if (e.target.type !== editor.MouseTargetType.GUTTER_GLYPH_MARGIN || e.target.detail.isAfterLines) {
            return;
        }
        if (e.event.rightButton) {
            // TODO: 
            return;
        }
        const lineNumber = e.target.position.lineNumber;
        const existingBreakpoint = editorRef.current?.getLineDecorations(lineNumber)?.[0]?.id;
        breakpoints.current = editorRef.current?.deltaDecorations(
            existingBreakpoint ? [existingBreakpoint] : [],
            existingBreakpoint ? [] : [
                {
                    range: new Range(lineNumber, 1, lineNumber, 1),
                    options: {
                        isWholeLine: true,
                        className: 'myContentClass',
                        glyphMarginClassName: 'myGlyphMarginClass'
                    }
                }
            ]
        );
    };
    const handleEditorDidMount: OnMount = (editorInstance) => {
        // here is another way to get monaco instance
        // you can also store it in `useRef` for further usage
        console.log('Did mount')
        editorRef.current = editorInstance;
        editorRef.current.onMouseDown(toggleBreakPoint);
    };
    return (
        <StyledApp>
            <Tabs defaultActiveKey="1" onTabClick={(tab) => tab == "1" ? setFile(file1) : setFile(file2)}>
                <TabPane tab="RouterFactory.java" key="1">                    
                </TabPane>
                <TabPane tab="SnapshotBuilder.java" key="2">
                </TabPane>
            </Tabs>
            <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Core</Breadcrumb.Item>
                        <Breadcrumb.Item>Factories</Breadcrumb.Item>
                        <Breadcrumb.Item>RouterFactory.java</Breadcrumb.Item>
                    </Breadcrumb>
                    <Editor
                        height="30vh"
                        width={"120vh"}
                        value={file}
                        language="java"
                        options={
                            {
                                glyphMargin: true,
                                lineNumbersMinChars: 2,
                                folding: false,
                                readOnly: true
                            }
                        }
                        loading={<>TEST</>}
                        beforeMount={handleEditorWillMount}
                        onMount={handleEditorDidMount}
                    />
        </StyledApp>
    );
}
export default Monaco;
