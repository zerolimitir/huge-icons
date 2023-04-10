import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextRotationVertical = (
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
            d='M5.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V4a.75.75 0 0 0-1.5 0v14.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 4.25a.75.75 0 0 1 .692.462l5 12a.75.75 0 0 1-1.384.576l-1.475-3.538h-5.666l-1.475 3.538a.75.75 0 0 1-1.384-.576l5-12A.75.75 0 0 1 15 4.25Zm-2.208 8h4.416L15 6.95l-2.208 5.3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationVertical);
export default ForwardRef;
