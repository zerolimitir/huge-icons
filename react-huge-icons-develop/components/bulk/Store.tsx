import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStore = (
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
        <path fill='currentColor' d='M21 18V7H3v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M7 18a2 2 0 1 1 4 0v4H7v-4Zm15-9.75V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2.25C2 10.321 3.492 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.841 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75C20.507 12 22 10.321 22 8.25ZM14 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStore);
export default ForwardRef;
