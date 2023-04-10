import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWalletArrowLeft = (
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
            d='M18 2h-6a4.001 4.001 0 0 0-3.71 2.5h13.42A4.001 4.001 0 0 0 18 2ZM2 16v-4h4a2 2 0 1 1 0 4H2ZM6 6h16v8a1 1 0 0 1-1 1h-3a4 4 0 0 0-4 4v2a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-.5h4a3.5 3.5 0 1 0 0-7H2V10a4 4 0 0 1 4-4Zm13.116 12.53-.72.72H22a.75.75 0 0 1 0 1.5h-3.604l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474l1.292-1.293a.75.75 0 1 1 1.061 1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowLeft);
export default ForwardRef;
