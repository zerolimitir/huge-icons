import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalAlignCenter = (
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
            d='M18 4a2 2 0 0 1 2 2v5.25h2a.75.75 0 0 1 0 1.5h-2V18a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.25h-4V15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.25H2a.75.75 0 0 1 0-1.5h2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.25h4V6a2 2 0 0 1 2-2h2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignCenter);
export default ForwardRef;
