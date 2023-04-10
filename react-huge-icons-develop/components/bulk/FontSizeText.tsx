import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFontSizeText = (
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
            d='M3.25 5A.75.75 0 0 1 4 4.25h12a.75.75 0 0 1 0 1.5h-5.25V19a.75.75 0 0 1-1.5 0V5.75H4A.75.75 0 0 1 3.25 5Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-2.25V19a.75.75 0 0 1-1.5 0v-6.25H14a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSizeText);
export default ForwardRef;
