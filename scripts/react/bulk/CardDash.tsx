import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m3.7 7.316a.745.745 0 0 0 .029 1.382c.219.091 2.323.091 2.542 0a.748.748 0 0 0 0-1.396c-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDash);
export default ForwardRef;
