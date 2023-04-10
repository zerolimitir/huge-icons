import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiOff = (
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
        <circle cx={12.445} cy={19} r={1} fill='currentColor' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='m3 3 18 18m.89-13.334A13.95 13.95 0 0 0 12.445 4c-1.352 0-2.66.192-3.896.55m10.135 6.963a8.969 8.969 0 0 0-5.666-2.495m-3.593 6.358A3.991 3.991 0 0 1 12.445 14c.83 0 1.602.253 2.242.687m-8.48-3.174a9 9 0 0 1 3.288-2.018M3 7.665A14.04 14.04 0 0 1 5.719 5.72'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
