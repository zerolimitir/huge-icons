import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSunrise = (
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
            d='M10.763 2.177a1.75 1.75 0 0 1 2.474 0L14.53 3.47a.75.75 0 0 1-1.06 1.06l-.72-.72V7a.75.75 0 0 1-1.5 0V3.81l-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293ZM4.753 7.69A.75.75 0 0 0 3.69 8.752l1.415 1.414a.75.75 0 1 0 1.06-1.06L4.752 7.69Zm15.555 1.061a.75.75 0 0 0-1.06-1.06l-1.414 1.414a.75.75 0 1 0 1.06 1.06l1.415-1.414ZM3 15.25a.75.75 0 1 0 0 1.5h18a.75.75 0 0 0 0-1.5h-2.291a6.751 6.751 0 0 0-13.418 0H3ZM5.25 19a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM9 21.25a.75.75 0 1 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSunrise);
export default ForwardRef;
