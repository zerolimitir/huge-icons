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
            d='M4 4.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 0h12v-1.5H4v1.5Zm10 5.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5h-6v1.5Z'
        />
        <path
            fill='currentColor'
            d='M10.75 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5Zm0-14v14h1.5V5h-1.5Zm8.5 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 7a.75.75 0 0 0 1.5 0h-1.5Zm0-7v7h1.5v-7h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSizeText);
export default ForwardRef;
