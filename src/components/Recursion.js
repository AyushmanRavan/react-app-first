
import React,{ useState } from 'react';
  
  function Recursion({ items }) {
    const [displayChildren, setDisplayChildren] = useState({});
      return (
        <ul>
            {items.map((item) => {
            return (
                        <li key={item.title}> {item.title}{' :: '}
                            
                            {item.children && (
                                <button  onClick={() => {
                                    setDisplayChildren({
                                    ...displayChildren,
                                    [item.title]: !displayChildren[item.title],
                                    });
                                }}
                                >
                                {displayChildren[item.title] ? '-' : '+'}
                                </button>
                            )}

                            {displayChildren[item.title] && item.children && <Recursion items={item.children} />}
                            
                        </li>
                    )
            })}
        </ul>
      );
  }
  
  export default Recursion;