import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignalCellularOff = (
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
            d='m3 3 18 18m0-4.063V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.3 4.589m6.874 10.873a2.225 2.225 0 0 1-.14.004H5.148c-1.965 0-2.894-2.331-1.434-3.596l6.265-5.425'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff);
export default ForwardRef;
