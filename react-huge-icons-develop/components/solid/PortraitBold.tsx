import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPortraitBold = (
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
            d='M7.5 6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V6ZM18 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1V7ZM5 17h1V7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;
