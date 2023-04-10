import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoomText = (
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
            d='M21.47 20.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.44-2.56a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM7 14.75a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm5-3.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm13-3.5a.75.75 0 0 0 0-1.5v1.5ZM2 3.25a.75.75 0 0 0 0 1.5v-1.5Zm20.53 16.22-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06ZM21.25 14c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 22.75 14h-1.5ZM16 19.25A5.25 5.25 0 0 1 10.75 14h-1.5A6.75 6.75 0 0 0 16 20.75v-1.5ZM10.75 14c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 9.25 14h1.5ZM16 8.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 16 7.25v1.5Zm-9 4.5H2v1.5h5v-1.5Zm0-5H2v1.5h5v-1.5Zm8-5H2v1.5h13v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomText);
export default ForwardRef;
