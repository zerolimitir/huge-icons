import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLike = (
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
            d='M6 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z'
        />
        <path
            fill='currentColor'
            d='M15.877 21H12.21a4 4 0 0 1-2.219-.672l-1.547-1.031A1 1 0 0 1 8 18.465v-8.2a1 1 0 0 1 .132-.496l3.58-6.265A1 1 0 0 1 12.58 3h.749c1.996 0 3.187 2.225 2.08 3.887L14 9h5.438a2 2 0 0 1 1.94 2.485l-1.62 6.485A4 4 0 0 1 15.877 21Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLike);
export default ForwardRef;
