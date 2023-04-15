import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVibrateMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 8.289c-.249.053-.465.281-.523.549-.061.287-.061 6.037 0 6.324.163.758 1.269.758 1.432 0 .059-.275.06-6.065.001-6.321-.097-.421-.47-.647-.91-.552m20 0c-.249.053-.465.281-.523.549-.061.287-.061 6.037 0 6.324.163.758 1.269.758 1.432 0 .059-.275.06-6.065.001-6.321-.097-.421-.47-.647-.91-.552m-17 1c-.249.053-.465.281-.523.549-.06.283-.06 4.041 0 4.324.163.758 1.269.758 1.432 0 .058-.271.059-4.069.001-4.321-.097-.421-.47-.647-.91-.552m14 0c-.249.053-.465.281-.523.549-.06.283-.06 4.041 0 4.324.163.758 1.269.758 1.432 0 .058-.271.059-4.069.001-4.321-.097-.421-.47-.647-.91-.552'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVibrateMode);
export default ForwardRef;
