import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextWrap = (
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
            d='m12 17-.53-.53a.75.75 0 0 0 0 1.06L12 17Zm2.53-1.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 4a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM5 10.25a.75.75 0 0 0 0 1.5v-1.5Zm11 6h-4v1.5h4v-1.5Zm-3.47 1.28 2-2-1.06-1.06-2 2 1.06 1.06Zm-1.06 0 2 2 1.06-1.06-2-2-1.06 1.06ZM16 10.25H5v1.5h11v-1.5ZM19.75 14A3.75 3.75 0 0 0 16 10.25v1.5A2.25 2.25 0 0 1 18.25 14h1.5ZM16 17.75A3.75 3.75 0 0 0 19.75 14h-1.5A2.25 2.25 0 0 1 16 16.25v1.5Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M5 17h4M5 5h14' />
    </svg>
);
const ForwardRef = forwardRef(SvgTextWrap);
export default ForwardRef;
