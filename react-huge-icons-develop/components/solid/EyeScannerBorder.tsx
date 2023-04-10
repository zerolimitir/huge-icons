import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeScannerBorder = (
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
            d='M2.5 5.75A3.25 3.25 0 0 1 5.75 2.5h2a.75.75 0 0 0 0-1.5h-2A4.75 4.75 0 0 0 1 5.75v2a.75.75 0 0 0 1.5 0v-2ZM15.75 1a.75.75 0 0 0 0 1.5h2A3.25 3.25 0 0 1 21 5.75v2a.75.75 0 0 0 1.5 0v-2A4.75 4.75 0 0 0 17.75 1h-2Zm6.75 14.75a.75.75 0 0 0-1.5 0v2A3.25 3.25 0 0 1 17.75 21h-2a.75.75 0 0 0 0 1.5h2a4.75 4.75 0 0 0 4.75-4.75v-2Zm-20 .556a.75.75 0 1 0-1.5 0v1.444a4.75 4.75 0 0 0 4.75 4.75h2a.75.75 0 0 0 0-1.5h-2a3.25 3.25 0 0 1-3.25-3.25v-1.444Zm16.79-3.455c-1.423 1.472-4.265 3.899-7.54 3.899-3.274 0-6.117-2.427-7.54-3.899-.613-.634-.613-1.568 0-2.202C5.633 9.176 8.476 6.75 11.75 6.75s6.117 2.426 7.54 3.899c.613.634.613 1.568 0 2.202Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeScannerBorder);
export default ForwardRef;
