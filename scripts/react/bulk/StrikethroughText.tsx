import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStrikethroughText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.807 11.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.142.03 1.327.044 3.804.044h3.598v3.098c0 2.111.014 3.164.044 3.304.163.758 1.269.758 1.432 0 .03-.14.044-1.193.044-3.304V12.76h3.598c2.477 0 3.662-.014 3.804-.044.758-.163.758-1.269 0-1.432-.268-.057-16.097-.054-16.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethroughText);
export default ForwardRef;
