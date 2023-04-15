import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.628 3.046c-.265.05-.606.208-.849.391-.22.166-3.183 3.51-3.425 3.865-.239.351-.334.686-.334 1.178 0 .467.087.798.295 1.124.061.097 1.905 2.537 4.098 5.423 2.58 3.395 4.065 5.316 4.209 5.444a2.076 2.076 0 0 0 2.757 0c.144-.129 1.618-2.035 4.192-5.421 2.183-2.872 4.027-5.313 4.098-5.423.224-.348.311-.669.31-1.147-.001-.493-.096-.831-.333-1.178-.223-.327-3.229-3.729-3.419-3.869a2.444 2.444 0 0 0-.885-.389c-.297-.055-10.427-.053-10.714.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiamond);
export default ForwardRef;
