import React,{useState} from 'react';

function FileExplorer({files}) {
    const [expanded, setExpanded] = useState(false);
    return (files.type === "folder") ?
         (
          <div key={files.name}>
            <span onClick={() => setExpanded(!expanded)}>{files.name}📂</span>
            <div
              className="expanded"
              style={{ display: expanded ? "block" : "none" }}
            >
              {files.data.map((file) => {
               return (file.type === "file") ?
                   (<div key={file.name}>{file.name}</div>)
                :
                   (<FileExplorer key={file.name} files={file} />)
              })}
            </div>
          </div>
        )
      : ( <div>{files.name}</div>)
}

export default FileExplorer;