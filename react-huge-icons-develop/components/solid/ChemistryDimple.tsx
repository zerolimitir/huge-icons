import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChemistryDimple = (
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
            d='M6.75 2a.75.75 0 0 0-1.5 0v5.25H4a.75.75 0 0 0 0 1.5h1.25v12.5H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H6.75V8.75h4.377a5.75 5.75 0 1 0 7.746 0H20a.75.75 0 0 0 0-1.5h-2.25v-4.5H18a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5h.25v4.5h-5.5V2Zm9.5.75v4.5h-2.5v-4.5h2.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChemistryDimple);
export default ForwardRef;
