import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGraphicEq = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.807 6.289c-.249.053-.465.281-.523.549-.062.29-.062 10.034 0 10.324.163.758 1.269.758 1.432 0 .059-.278.06-10.062.001-10.321-.097-.421-.47-.647-.91-.552m8 0c-.249.053-.465.281-.523.549-.062.29-.062 10.034 0 10.324.163.758 1.269.758 1.432 0 .059-.278.06-10.062.001-10.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGraphicEq);
export default ForwardRef;
