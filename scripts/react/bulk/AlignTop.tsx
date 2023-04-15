import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.807 4.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.291.062 14.033.062 14.324 0 .758-.163.758-1.269 0-1.432-.268-.057-14.097-.054-14.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlignTop);
export default ForwardRef;
