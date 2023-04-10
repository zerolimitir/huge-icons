import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletRemove = (
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
            d='M22 6H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M22 6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4h14ZM2 12v4h4a2 2 0 1 0 0-4H2Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22.03 17.227a.75.75 0 0 1 0 1.06l-1.59 1.592 1.59 1.59a.75.75 0 1 1-1.06 1.061l-1.591-1.59-1.591 1.59a.75.75 0 0 1-1.061-1.06l1.591-1.591-1.591-1.591a.75.75 0 0 1 1.06-1.061l1.592 1.591 1.59-1.591a.75.75 0 0 1 1.061 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletRemove);
export default ForwardRef;
