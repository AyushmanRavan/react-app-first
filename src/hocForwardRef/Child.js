import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, forwardedRef) => {
    const childRef = useRef(null)

    const doSomeThing = () => {
          console.log("doSomeThing called from parent.")
    }

    useImperativeHandle(ref, () => ({
        getDOMNode: () => childRef.current,
        focus: () => ref.current.focus(),
        doSomeThing: () => childRef.current.doSomeThing(),
    }));

    return (
        <div>
            <input ref={childRef} {...props}/>
        </div>
    );
});

export default Child;