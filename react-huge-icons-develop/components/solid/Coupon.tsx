import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCoupon = (
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
            d='M6 21a4 4 0 0 1-4-4v-1c0-.552.46-.984.982-1.164a3.001 3.001 0 0 0 0-5.672C2.46 8.984 2 8.552 2 8V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1c0 .552-.46.984-.982 1.164a3.001 3.001 0 0 0 0 5.672c.522.18.982.612.982 1.164v1a4 4 0 0 1-4 4H6Zm3-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCoupon);
export default ForwardRef;
