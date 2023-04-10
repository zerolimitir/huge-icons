import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSticker = (
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
            d='M6 3h12a4 4 0 0 1 4 4v3.172c0 .026 0 .052-.002.078H18A6.75 6.75 0 0 0 11.25 17v3.998a2.046 2.046 0 0 1-.078.002H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm6.75 17.25 8.5-8.5H18A5.25 5.25 0 0 0 12.75 17v3.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;
