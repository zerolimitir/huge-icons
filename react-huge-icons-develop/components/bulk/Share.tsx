import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShare = (
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
            d='M18.04 5.73a.75.75 0 0 1-.336 1.006L7.177 12l10.527 5.264a.75.75 0 1 1-.67 1.341L6.296 13.236A.75.75 0 0 1 6.138 12a.75.75 0 0 1 .157-1.236l10.738-5.37a.75.75 0 0 1 1.007.336Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M22 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm0 13a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9 12a3.5 3.5 0 1 1-6.998 0A3.5 3.5 0 0 1 9 12Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
