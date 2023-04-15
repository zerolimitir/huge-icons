import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgZoomText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.3 8.046a6.874 6.874 0 0 0-1.451.358c-1.845.733-3.157 2.207-3.65 4.102-.83 3.194 1.098 6.46 4.307 7.295a6.03 6.03 0 0 0 4.212-.46 5.992 5.992 0 0 0 3.248-5.865 5.99 5.99 0 0 0-6.666-5.43'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomText);
export default ForwardRef;
