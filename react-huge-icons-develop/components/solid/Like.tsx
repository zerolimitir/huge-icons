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
            fillRule='evenodd'
            d='M12.711 21h3.166a4 4 0 0 0 3.88-3.03l1.622-6.485A2 2 0 0 0 19.439 9H14.5l1.307-2.24c.972-1.667-.23-3.76-2.16-3.76H12.5L8.632 9.77a1 1 0 0 0-.132.496v8.199a1 1 0 0 0 .445.832l1.547 1.031a4 4 0 0 0 2.22.672ZM4 9h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLike);
export default ForwardRef;
