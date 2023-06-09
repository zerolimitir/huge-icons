import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.49 2.044c-1.185.2-2.126 1.096-2.413 2.298-.165.689-.046 1.526.301 2.118.061.104.74 1.028 1.509 2.054 1.47 1.961 1.647 2.239 1.776 2.786.039.167.066.449.066.7 0 .251-.027.533-.066.7-.129.547-.306.825-1.776 2.786-.769 1.026-1.448 1.95-1.509 2.054-.347.592-.466 1.429-.301 2.118.216.903.783 1.629 1.583 2.024.644.318.293.298 5.34.298s4.696.02 5.34-.298c.8-.395 1.367-1.121 1.583-2.024.165-.689.046-1.526-.301-2.118-.061-.104-.74-1.028-1.509-2.054-1.469-1.96-1.646-2.237-1.777-2.786a3.43 3.43 0 0 1-.066-.7c0-.254.026-.531.066-.7.131-.549.308-.826 1.777-2.786.769-1.026 1.448-1.95 1.509-2.054.347-.592.466-1.429.301-2.118-.262-1.097-1.048-1.921-2.143-2.248-.224-.066-.544-.072-4.66-.078-2.443-.005-4.514.008-4.63.028'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglass);
export default ForwardRef;
