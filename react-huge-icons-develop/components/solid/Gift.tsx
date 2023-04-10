import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGift = (
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
            d='M18.563 5H20a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.437A2.75 2.75 0 0 1 8 1.25c1.68 0 3.155.872 4 2.187a4.746 4.746 0 0 1 4-2.187A2.75 2.75 0 0 1 18.563 5ZM7.25 5h3.843A3.252 3.252 0 0 0 8 2.75 1.25 1.25 0 0 0 7.25 5Zm9.5 0A1.25 1.25 0 0 0 16 2.75 3.252 3.252 0 0 0 12.907 5h3.843ZM20 11.5H4V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;
