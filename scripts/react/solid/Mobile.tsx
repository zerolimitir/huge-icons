import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.503 2.042c-1.017.173-1.947.934-2.301 1.883-.209.559-.201.226-.201 8.067-.001 6.409.006 7.327.061 7.589a2.993 2.993 0 0 0 2.357 2.357c.448.093 8.714.093 9.162 0a3.003 3.003 0 0 0 2.357-2.357C18.993 19.32 19 18.4 19 12c0-7.976.012-7.547-.234-8.151a2.99 2.99 0 0 0-1.47-1.537c-.647-.311-.245-.288-5.176-.297-2.431-.003-4.509.008-4.617.027m5.885 16.325a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.232.331-.233.331-1.616.331s-1.384 0-1.616-.331c-.286-.406-.056-1.011.431-1.132.069-.017.639-.028 1.268-.024l1.143.007.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
