import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDisLike = (
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
            d='M11.289 3H8.123a4 4 0 0 0-3.88 3.03L2.62 12.515A2 2 0 0 0 4.561 15H9.5l-1.307 2.24c-.972 1.667.23 3.76 2.16 3.76H11.5l3.868-6.77a1 1 0 0 0 .132-.496V5.535a1 1 0 0 0-.445-.832l-1.547-1.031A4 4 0 0 0 11.288 3ZM20 15h-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisLike);
export default ForwardRef;
