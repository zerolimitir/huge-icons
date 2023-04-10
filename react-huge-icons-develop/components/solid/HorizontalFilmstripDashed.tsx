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
            fillRule='evenodd'
            d='M6.25 2H6a4 4 0 0 0-4 4v.25h4.25V2ZM2 7.75v8.5h9.25v-8.5H2Zm0 10V18a4 4 0 0 0 4 4h.25v-4.25H2ZM7.75 22h3.5v-4.25h-3.5V22Zm5 0h3.5v-4.25h-3.5V22Zm5 0H18a4 4 0 0 0 4-4v-.25h-4.25V22ZM22 16.25v-8.5h-9.25v8.5H22Zm0-10V6a4 4 0 0 0-4-4h-.25v4.25H22ZM16.25 2h-3.5v4.25h3.5V2Zm-5 0h-3.5v4.25h3.5V2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalFilmstripDashed);
export default ForwardRef;
