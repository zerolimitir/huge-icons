import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeCylindrical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.29.062 10.034.062 10.324 0 .758-.163.758-1.269 0-1.432-.266-.057-10.098-.054-10.355.003M8.01 13.33l.012 5.33.11.378c.363 1.24 1.235 2.218 2.388 2.677 1.316.524 2.866.295 3.961-.585a3.933 3.933 0 0 0 1.436-2.356c.081-.399.083-.507.083-5.59V8H7.998l.012 5.33'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindrical);
export default ForwardRef;
