import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFile = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M13 22v-4a4 4 0 0 1 4-4h4M3 18V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6.343a4 4 0 0 1-1.172 2.829l-5.656 5.656A4 4 0 0 1 11.343 22H7a4 4 0 0 1-4-4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
