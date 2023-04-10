import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLifebuoy = (
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
            d='M16 2H8c-1.387 0-2.663.47-3.68 1.26l5.432 5.431A3.982 3.982 0 0 1 12 8c.834 0 1.607.255 2.248.691l5.431-5.43A5.974 5.974 0 0 0 16 2Zm4.74 2.32-5.431 5.432A3.98 3.98 0 0 1 16 12c0 .834-.255 1.607-.691 2.248l5.43 5.431A5.974 5.974 0 0 0 22 16V8c0-1.387-.47-2.663-1.26-3.68Zm-1.06 16.42-5.432-5.431A3.982 3.982 0 0 1 12 16a3.982 3.982 0 0 1-2.248-.691l-5.431 5.43A5.974 5.974 0 0 0 8 22h8c1.387 0 2.663-.47 3.68-1.26ZM3.26 19.68l5.431-5.432A3.981 3.981 0 0 1 8 12c0-.834.255-1.607.691-2.248L3.261 4.32A5.974 5.974 0 0 0 2 8v8c0 1.387.47 2.663 1.26 3.68Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLifebuoy);
export default ForwardRef;
