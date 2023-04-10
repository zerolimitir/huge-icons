import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletOpenLeft = (
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
            d='M12 2H6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 12 2Zm10 14h-4a2 2 0 1 1 0-4h4v4ZM2 6h16a4 4 0 0 1 4 4v.5h-4a3.5 3.5 0 1 0 0 7h4v.5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletOpenLeft);
export default ForwardRef;
