import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalEqualizer = (
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
            d='M19 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6.75h3a.75.75 0 0 0 0-1.5h-3V4Zm-6 12a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1.25H2a.75.75 0 0 0 0 1.5h3V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4ZM1.25 6A.75.75 0 0 1 2 5.25h6a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 6Zm14 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalEqualizer);
export default ForwardRef;
