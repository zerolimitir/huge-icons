import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryAirPlane = (
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
            fill='currentColor'
            fillRule='evenodd'
            d='M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm7.75 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-9.866 9.315 1.55 1.513A4.149 4.149 0 0 0 8.331 17h8.899c1.086 0 2.128.421 2.897 1.172l1.449 1.414a1.4 1.4 0 0 1 .424 1c0 .78-.649 1.414-1.449 1.414H7.425c-1.708 0-3.237-1.034-3.837-2.596l-1.517-3.95C1.801 14.752 2.334 14 3.104 14c.293 0 .573.113.78.315Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryAirPlane);
export default ForwardRef;
