import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUploadRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.8 2.288c-.168.036-.293.151-1.826 1.685C8.401 5.547 8.326 5.628 8.289 5.81c-.12.581.322 1.022.901.9.177-.037.253-.102 1.12-.963l.93-.923v5.149c0 4.557.007 5.167.062 5.298a.748.748 0 0 0 1.396 0c.055-.131.062-.741.062-5.299V4.821l.89.888c.919.917 1.045 1.012 1.339 1.01.173-.001.439-.112.539-.225a.78.78 0 0 0 .113-.831c-.051-.106-.632-.714-1.67-1.749-1.327-1.323-1.614-1.59-1.731-1.613l-.2-.039a.899.899 0 0 0-.24.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUploadRectangle);
export default ForwardRef;
