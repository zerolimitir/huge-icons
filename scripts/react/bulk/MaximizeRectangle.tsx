import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMaximizeRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.807 2.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.135.029.915.044 2.274.044h2.068l-4.931 4.931c-4.613 4.613-4.935 4.944-4.991 5.128-.161.536.325 1.048.886.934.193-.04.283-.127 5.146-4.986l4.95-4.947v2.068c0 1.359.015 2.139.044 2.274.163.758 1.269.758 1.432 0 .061-.287.061-6.037 0-6.324a.708.708 0 0 0-.554-.554c-.263-.056-6.101-.054-6.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangle);
export default ForwardRef;
