import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSchool = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.438 8.075a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 10c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m-.058 6.982c-1.159.268-2.007 1.094-2.299 2.239-.076.299-.081.442-.081 2.51V22h6.004l-.013-2.29c-.012-2.275-.013-2.292-.106-2.57-.334-1.004-1.038-1.707-2.025-2.02-.358-.113-1.122-.146-1.48-.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSchool);
export default ForwardRef;
