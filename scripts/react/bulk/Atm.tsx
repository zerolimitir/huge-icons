import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAtm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.807 1.289c-.249.053-.465.281-.523.549-.063.292-.063 20.032 0 20.324.163.758 1.269.758 1.432 0 .031-.144.044-1.7.044-5.184V12H19V8H5.76l-.001-2.99c-.001-1.91-.016-3.055-.042-3.169-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAtm);
export default ForwardRef;
