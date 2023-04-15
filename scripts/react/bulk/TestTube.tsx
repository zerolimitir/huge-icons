import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.287.061 6.037.061 6.324 0 .758-.163.758-1.269 0-1.432-.263-.056-6.101-.054-6.355.003M5.911 16.19c-1.079 2.167-1.602 3.258-1.63 3.402-.21 1.082.485 2.141 1.551 2.364.299.062 12.037.062 12.336 0a1.992 1.992 0 0 0 1.003-.559 1.944 1.944 0 0 0 .548-1.805c-.028-.144-.551-1.235-1.63-3.402L16.501 13H7.499l-1.588 3.19'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
