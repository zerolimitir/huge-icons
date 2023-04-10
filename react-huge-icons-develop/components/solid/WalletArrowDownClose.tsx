import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletArrowDownClose = (
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
            d='M18 2a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v1a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-1.5h4a3.5 3.5 0 1 0 0-7H2V6a4 4 0 0 1 4-4h12ZM8 11a2 2 0 0 0-2-2H2v4h4a2 2 0 0 0 2-2Zm9.53 7.884.72.72V16a.75.75 0 0 1 1.5 0v3.604l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0l-1.293-1.292a.75.75 0 1 1 1.06-1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowDownClose);
export default ForwardRef;
