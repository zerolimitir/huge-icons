import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFormatClear = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.7 4.355a.61.61 0 0 0-.358.375.746.746 0 0 0-.001.581c.043.104.95 1.037 3.028 3.117l2.966 2.967-.547 3.833c-.59 4.126-.577 3.986-.383 4.259.158.222.583.336.862.231a.925.925 0 0 0 .411-.393c.034-.084.962-6.433.962-6.584 0-.022 1.562 1.52 3.47 3.428 2.442 2.441 3.514 3.486 3.619 3.53.587.242 1.184-.315.991-.924-.04-.127-1.312-1.42-7.134-7.249C7.653 6.587 5.451 4.409 5.34 4.357a.758.758 0 0 0-.64-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFormatClear);
export default ForwardRef;
