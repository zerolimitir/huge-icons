import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.807 1.289c-.249.053-.465.281-.523.549-.063.292-.063 20.032 0 20.324.163.758 1.269.758 1.432 0 .06-.28.061-20.06.001-20.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignRight);
export default ForwardRef;
