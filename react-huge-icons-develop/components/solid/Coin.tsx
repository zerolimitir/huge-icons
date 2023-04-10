import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCoin = (
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
            d='M20 6a2 2 0 0 0-2-2h-8a2 2 0 0 0-.001 4H6a2 2 0 1 0 0 4h3.998A2 2 0 0 0 10 16H7a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4h3a2 2 0 1 0 0-4h-3.998a2 2 0 0 0-.001-4H18a2 2 0 0 0 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCoin);
export default ForwardRef;
