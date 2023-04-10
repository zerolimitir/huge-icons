import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalFilmstripDashed = (
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
            d='M22 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17 12.75H7v-1.5h10v1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M22 6a4 4 0 0 0-4-4h-1v4.25h5V6Zm0 1.75h-5v3.5h5v-3.5Zm-5 8.5v-3.5h5v3.5h-5Zm5 1.5h-5V22h1a4 4 0 0 0 4-4v-.25Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 18a4 4 0 0 0 4 4h1v-4.25H2V18Zm0-1.75h5V2H6a4 4 0 0 0-4 4v.25h5v1.5H2v3.5h5v1.5H2v3.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstripDashed);
export default ForwardRef;
