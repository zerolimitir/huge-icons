import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWirelessCharging = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m13 8-3 4h4l-3 4M4.929 4.929A9.969 9.969 0 0 0 2 11.999a9.969 9.969 0 0 0 2.929 7.072M7.757 7.757A5.981 5.981 0 0 0 6 12c0 1.657.672 3.157 1.757 4.242m11.314 2.829A9.969 9.969 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071m-2.828 11.313A5.981 5.981 0 0 0 18 12a5.981 5.981 0 0 0-1.757-4.243'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWirelessCharging);
export default ForwardRef;
