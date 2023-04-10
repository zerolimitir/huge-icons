import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFeedRectangle = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M8.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.256 10.907a.75.75 0 0 1 .837-.651 8.825 8.825 0 0 1 7.651 7.651.75.75 0 1 1-1.488.186 7.325 7.325 0 0 0-6.349-6.349.75.75 0 0 1-.651-.837Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.25 6A.75.75 0 0 1 6 5.25c7.042 0 12.75 5.708 12.75 12.75a.75.75 0 0 1-1.5 0c0-6.213-5.037-11.25-11.25-11.25A.75.75 0 0 1 5.25 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeedRectangle);
export default ForwardRef;
