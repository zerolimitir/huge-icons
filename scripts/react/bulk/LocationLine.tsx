import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.38 6.057c-1.169.27-2.01 1.096-2.305 2.262-.11.439-.091 1.11.046 1.541.315.996 1.037 1.713 2.039 2.026.252.079.386.094.84.094.454 0 .588-.015.84-.094 1.008-.314 1.729-1.036 2.046-2.047.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84a3.028 3.028 0 0 0-2.026-2.04c-.358-.113-1.122-.146-1.48-.063m-5.573 15.23a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.291.062 12.033.062 12.324 0 .758-.163.758-1.269 0-1.432-.267-.057-12.098-.054-12.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationLine);
export default ForwardRef;
