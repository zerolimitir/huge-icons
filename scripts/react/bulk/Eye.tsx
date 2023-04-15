import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.38 9.057c-1.169.27-2.01 1.096-2.305 2.262-.11.439-.091 1.11.046 1.541.315.996 1.037 1.713 2.039 2.026.252.079.386.094.84.094.454 0 .588-.015.84-.094 1.008-.314 1.729-1.036 2.046-2.047.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84a3.028 3.028 0 0 0-2.026-2.04c-.358-.113-1.122-.146-1.48-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
