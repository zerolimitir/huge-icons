import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinus = (
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
            d='M6 10v.75V10Zm0 4v.75V14Zm12 0v-.75.75Zm0-4v-.75.75Zm0 3.25H6v1.5h12v-1.5Zm-12-2.5h12v-1.5H6v1.5ZM4.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 3.25 12h1.5ZM6 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 14.75v-1.5ZM19.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 12h-1.5Zm1.5 0A2.75 2.75 0 0 0 18 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
