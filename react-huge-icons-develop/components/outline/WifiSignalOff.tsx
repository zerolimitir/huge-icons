import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiSignalOff = (
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
            d='m3 3 18 18M9.303 5.303c3.86-.873 7.856.139 11.401 3.034.773.631.854 1.76.26 2.561l-2.58 3.485M6.353 6.354a16.024 16.024 0 0 0-3.058 1.983c-.773.631-.854 1.76-.26 2.561l7.357 9.932a2 2 0 0 0 3.214 0l3.074-4.15'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignalOff);
export default ForwardRef;
