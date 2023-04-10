import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSunset = (
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
            d='m10.53 4.97.72.72V2a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 6.03a.75.75 0 0 1 1.06-1.06Zm9.528 3.782a.75.75 0 0 0-1.06-1.06l-1.414 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.414ZM3.441 7.692a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.44 8.753a.75.75 0 0 1 0-1.06ZM2.75 15.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5h-2.291a6.751 6.751 0 0 0-13.418 0H2.75ZM5 19a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 5 19Zm3.75 2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSunset);
export default ForwardRef;
