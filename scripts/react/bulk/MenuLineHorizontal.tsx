import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuLineHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.807 11.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.29.062 10.034.062 10.324 0 .758-.163.758-1.269 0-1.432-.266-.057-10.098-.054-10.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuLineHorizontal);
export default ForwardRef;
