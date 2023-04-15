import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.15 3.041c-.941.16-1.69.799-2.02 1.726-.145.404-.154 1.073-.021 1.493.167.527.307.704 1.891 2.378 2.024 2.139 2.009 2.123 2.171 2.431.304.583.284.299.308 4.311l.022 3.6.106.292c.233.64.672 1.126 1.293 1.431.968.477 2.028.368 2.84-.292.179-.145 1.586-1.881 5.507-6.793 2.897-3.629 5.332-6.706 5.411-6.838.239-.397.322-.726.32-1.26-.002-.391-.019-.504-.108-.753a2.534 2.534 0 0 0-.61-.987 2.594 2.594 0 0 0-1.04-.647l-.32-.113-7.78-.006c-4.279-.003-7.865.009-7.97.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
