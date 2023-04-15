import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlusThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.807 11.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.291.062 12.033.062 12.324 0 .758-.163.758-1.269 0-1.432-.267-.057-12.098-.054-12.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlusThin);
export default ForwardRef;
