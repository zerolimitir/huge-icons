import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalFilmstripDashed = (
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
            d='M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 7v10h-1.5V7h1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M6 2a4 4 0 0 0-4 4v1h4.25V2H6Zm1.75 0v5h3.5V2h-3.5Zm10 5h-5V2h3.5v5h1.5Zm0 0V2H18a4 4 0 0 1 4 4v1h-4.25ZM18 22a4 4 0 0 0 4-4v-1h-4.25v5h-1.5v-5h-3.5v5H18Zm-6.75-5v5h-3.5v-5h3.5Zm-5 0H2v1a4 4 0 0 0 4 4h.25v-5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalFilmstripDashed);
export default ForwardRef;
