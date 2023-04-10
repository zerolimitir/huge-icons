import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCoinEuro = (
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
            d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.358 9.75c.578-.618 1.39-1 2.281-1 .88 0 1.676.368 2.253.97a.75.75 0 0 0 1.083-1.038 4.608 4.608 0 0 0-3.336-1.432c-1.783 0-3.32 1.016-4.105 2.5H7.77a.75.75 0 0 0 0 1.5h.266a4.861 4.861 0 0 0 0 1.5H7.77a.75.75 0 0 0 0 1.5h.764c.784 1.484 2.322 2.5 4.105 2.5 1.31 0 2.492-.551 3.336-1.432a.75.75 0 0 0-1.083-1.037 3.107 3.107 0 0 1-2.253.969 3.118 3.118 0 0 1-2.28-1h2.2a.75.75 0 0 0 0-1.5H9.563a3.354 3.354 0 0 1 0-1.5h2.998a.75.75 0 0 0 0-1.5h-2.202Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCoinEuro);
export default ForwardRef;
