import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGpsOff = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 5V3m0 18v-2m7-7h2M3 12h2M3 3l18 18M9.47 5.47a7 7 0 0 1 9.058 9.058M7.051 7.051a7 7 0 1 0 9.9 9.9'
        />
        <path stroke='currentColor' strokeWidth={1.5} d='M14.121 14.121a3 3 0 1 1-4.243-4.243' />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsOff);
export default ForwardRef;
