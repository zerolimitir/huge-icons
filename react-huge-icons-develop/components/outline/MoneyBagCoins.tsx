import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagCoins = (
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
            d='M20 18h-6m6 0a2 2 0 0 1 0 4h-6a2 2 0 1 1 0-4m6 0a2 2 0 0 0 0-4h-.667M14 18a2 2 0 1 1 0-4h5.333m-5.658 8h-3.35c-4.096 0-6.988-4.012-5.693-7.897l1-3A6 6 0 0 1 11.324 7h1.351a6 6 0 0 1 5.692 4.103L19.333 14m-5.247-7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoins);
export default ForwardRef;
