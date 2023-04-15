import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIpod = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.08 6.057c-1.885.335-3.395 1.385-4.317 3.003-.55.966-.791 1.976-.751 3.153.032.94.193 1.599.587 2.407.825 1.689 2.311 2.848 4.194 3.271.329.074.511.087 1.207.087.885 0 1.215-.048 1.907-.278 1.742-.578 3.215-2.051 3.793-3.793.23-.692.278-1.022.278-1.907 0-.696-.013-.878-.087-1.207a6 6 0 0 0-.49-1.413c-.821-1.682-2.316-2.851-4.173-3.266-.474-.105-1.694-.138-2.148-.057m1.5 4.044c.695.194 1.278.873 1.38 1.609.219 1.591-1.4 2.768-2.84 2.063a1.974 1.974 0 0 1-.893-2.653c.424-.866 1.394-1.286 2.353-1.019'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIpod);
export default ForwardRef;
