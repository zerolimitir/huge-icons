import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPinCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.44 2.057c-1.706.362-2.766 2.03-2.34 3.683.242.939.985 1.757 1.881 2.069l.259.091v5.028c0 3.521.013 5.09.044 5.234.163.758 1.269.758 1.432 0 .031-.144.044-1.714.044-5.238V7.893l.17-.051c.68-.201 1.393-.815 1.721-1.482a3.98 3.98 0 0 0 .255-.66c.088-.361.088-1.028.001-1.389a3.014 3.014 0 0 0-2.114-2.192c-.379-.106-1.007-.135-1.353-.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinCircle);
export default ForwardRef;
