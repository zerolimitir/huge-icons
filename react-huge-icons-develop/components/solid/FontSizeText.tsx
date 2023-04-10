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
            d='M4 4.25a.75.75 0 0 0 0 1.5h5.25V19a.75.75 0 0 0 1.5 0V5.75H16a.75.75 0 0 0 0-1.5H4Zm10 7a.75.75 0 0 0 0 1.5h2.25V19a.75.75 0 0 0 1.5 0v-6.25H20a.75.75 0 0 0 0-1.5h-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSizeText);
export default ForwardRef;
